const naturalDict: { [key: string]: string } = {
  A: ".—",
  N: "—.",
  "0": "—————",
  B: "—...",
  Ñ: "——.——",
  "1": ".————",
  C: "—.—.",
  O: "———",
  "2": "..———",
  CH: "————",
  P: ".——.",
  "3": "...——",
  D: "—..",
  Q: "——.—",
  "4": "....—",
  E: ".",
  R: ".—.",
  "5": ".....",
  F: "..—.",
  S: "...",
  "6": "—....",
  G: "——.",
  T: "—",
  "7": "——...",
  H: "....",
  U: "..—",
  "8": "———..",
  I: "..",
  V: "...—",
  "9": "————.",
  J: ".———",
  W: ".——",
  ".": ".—.—.—",
  K: "—.—",
  X: "—..—",
  ",": "——..——",
  L: ".—..",
  Y: "—.——",
  "?": "..——..",
  M: "——",
  Z: "——..",
  '"': ".—..—.",
  "/": "—..—",
};

const morseDict: { [key: string]: string } = {};
Object.keys(naturalDict).forEach((key) => {
  morseDict[naturalDict[key]] = key;
});

function decoder(input: string): string {
  let decodedInput = "";

  if (/[a-zA-Z0-9]/.test(input)) {
    // Natural to Morse
    let i = 0;
    let ch = false;

    input
      .toUpperCase()
      .split("")
      .forEach((cadena) => {
        if (!ch && cadena !== " ") {
          const nextIndex = i + 1;
          if (
            cadena === "C" &&
            nextIndex < input.length &&
            input.toUpperCase()[nextIndex] === "H"
          ) {
            decodedInput += naturalDict["CH"];
            ch = true;
          } else {
            decodedInput += naturalDict[cadena] ?? cadena;
          }

          decodedInput += " ";
        } else {
          if (!ch) {
            decodedInput += " ";
          }
          ch = false;
        }

        i++;
      });
  } else if (input.includes(".") || input.includes("—")) {
    input.split("  ").forEach((word) => {
      word.split(" ").forEach((symbols) => {
        if (symbols) {
          decodedInput += morseDict[symbols].toLowerCase() ?? symbols;
        }
      });
      decodedInput += " ";
    });
  }

  return decodedInput.trim();
}

console.log(decoder("Chocapic. Es una marca de cereales?"));
