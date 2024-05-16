const BinNumber = (decimal: number): string => {
  let binario = "";
  while (decimal > 0) {
    const residuo = decimal % 2;
    decimal = Math.floor(decimal / 2);
    binario = residuo + binario;
  }
  console.log(binario);
  return binario;
};

BinNumber(25);
