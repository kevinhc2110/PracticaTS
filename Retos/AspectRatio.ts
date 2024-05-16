type ImageSize = {
  width: number;
  height: number;
};

async function calculateAspectRatio(imageUrl: string): Promise<string> {
  try {
    const response = await fetch(imageUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch image: ${response.status}`);
    }

    const image = new Image();
    image.src = imageUrl;

    const imageLoaded: Promise<ImageSize> = new Promise((resolve, reject) => {
      image.onload = () =>
        resolve({ width: image.width, height: image.height });
      image.onerror = () => reject(new Error("Error cargando la imagen"));
    });

    const { width, height } = await imageLoaded;

    const aspectRatio = width / height;

    const formattedRatio = aspectRatio.toFixed(2);
    return `El ratio de aspecto de la imagen es: ${formattedRatio}`;
  } catch (error) {
    console.error(error);
    return "Error al calcular el ratio de aspecto";
  }
}

const imageUrl =
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.fotor.com%2Fes%2Fia-generador-de-imagenes%2F&psig=AOvVaw0OOj2M6FSeg5ozdg_fCoMl&ust=1715800152272000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNDw2OfrjYYDFQAAAAAdAAAAABAJ";
calculateAspectRatio(imageUrl)
  .then((aspectRatio) => console.log(aspectRatio))
  .catch((error) => console.error(error));
