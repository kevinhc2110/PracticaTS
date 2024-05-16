function calcularArea(
  tipo: string,
  base: number,
  altura?: number
): number | string {
  tipo = tipo.toLowerCase();

  if (tipo === "cuadrado" && base > 0) {
    return base * base;
  } else if (tipo === "rectangulo" && base > 0 && altura !== undefined) {
    return base * altura;
  } else if (tipo === "triangulo" && base > 0 && altura !== undefined) {
    return (base * altura) / 2;
  } else {
    console.error("Error: Tipo de polígono desconocido o altura indefinida.");
    return 0;
  }
}

const areaCuadrado = calcularArea("cuadrado", 5);
console.log("Área del cuadrado:", areaCuadrado);
