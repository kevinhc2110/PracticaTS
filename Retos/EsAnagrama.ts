//Split divide las palabras en letras individuales en un arreglo de caracteres
//Sort ordena alfabéticamente las palabras
//Join se usa para unir de nuevo los caracteres

const anagrama = (palabra1: string, palabra2: string): boolean => {
  const palabraOrg1 = palabra1.toLowerCase().split("").sort().join("");
  const palabraOrg2 = palabra2.toLowerCase().split("").sort().join("");

  if (palabra1 === palabra2) {
    return false;
  }

  return palabraOrg1 === palabraOrg2;
};

console.log(anagrama("roma", "amor"));
