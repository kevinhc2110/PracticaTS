//Forma completa

const numeros = (): void => {
  for (let i = 1; i <= 100; i++) {
    let numero: number = i;
    let resultado: string = "";

    if (numero % 3 === 0 && numero % 5 === 0) {
      resultado = "FizzBuzz";
    } else if (numero % 3 === 0) {
      resultado += "Fizz";
    } else if (numero % 5 === 0) {
      resultado += "Buzz";
    }
    if (resultado === "") {
      resultado = numero.toString();
    }

    console.log(resultado);
  }
};
numeros();

//Forma abreviada con ternarias

const numeros2 = (): void => {
  for (let i = 1; i <= 100; i++) {
    let resultado: string =
      i % 3 === 0 && i % 5 === 0
        ? "FizzBuzz"
        : i % 3 === 0
        ? "Fizz"
        : i % 5 === 0
        ? "Buzz"
        : i.toString();

    console.log(resultado);
  }
};
numeros2();
