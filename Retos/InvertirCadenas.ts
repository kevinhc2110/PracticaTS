//charAt: Devuelves los caracteres 1 por 1 en la ubicación especificada

const invertirPalabra = (str: string): string => {
  let invertdida: string = "";
  for (let i = str.length - 1; i >= 0; i--) {
    invertdida += str.charAt(i);
  }
  console.log(invertdida);
  return invertdida;
};

invertirPalabra("Hola Mundo");
