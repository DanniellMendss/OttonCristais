// @/utils/galleryImages.ts

// Define o tipo do import
type ImageModule = {
  default: string; // A URL da imagem
};

// Carrega todos os arquivos .png da pasta gallery
const images = import.meta.glob("@/assets/gallery/*.png", {
  eager: true,
}) as Record<string, ImageModule>;

// Extrai as URLs e ordena por número no nome do arquivo
const imageList = Object.values(images)
  .map((img) => img.default) // Agora sem `any` — img é do tipo ImageModule
  .sort((a, b) => {
    const getNumber = (url: string): number => {
      const match = url.match(/foto(\d+)\.png$/i);
      return match ? parseInt(match[1], 10) : 0;
    };
    return getNumber(a) - getNumber(b);
  });

export default imageList;
