//split: Divide una cadena de caracteres en un array de caracteres
// replace: Busca en una sub cadena especificada y la remplaza por otra
// entries: Devuelve una matriz de pares de una propiedad enumerable [key, value] de un objeto.

const WordsCount = (cadena: string) => {
  const cadenaNomalizada = cadena.toLowerCase().replace(/[\p{P}]/gu, "");
  const palabras = cadenaNomalizada.split(/\s+/);

  const conteoPalabras = new Map<string, number>();

  for (const palabra of palabras) {
    if (conteoPalabras.has(palabra)) {
      conteoPalabras.set(palabra, conteoPalabras.get(palabra)! + 1);
    } else {
      conteoPalabras.set(palabra, 1);
    }
  }
  for (const [palabra, conteo] of conteoPalabras.entries()) {
    console.log(`${palabra}: ${conteo}`);
  }
};

WordsCount(
  "Este es un texto para analizar. Aquí hay otra oración con. puntuación."
);
