const imageFiles = import.meta.glob(
  "../assets/images/**/*.{jpg,jpeg,png,webp}",
  {
    eager: true,
    import: "default",
    query: "?url",
  },
) as Record<string, string>;

export function getImageSet(folder: string, limit = 4): string[] {
  const normalizedFolder = folder
    .replaceAll("\\", "/")
    .replace(/^\/+|\/+$/g, "");
  const folderPath = `/assets/images/${normalizedFolder}/`;

  const images = Object.entries(imageFiles)
    .filter(([path]) => path.replaceAll("\\", "/").includes(folderPath))
    .sort(([firstPath], [secondPath]) =>
      firstPath.localeCompare(secondPath, undefined, { numeric: true }),
    )
    .map(([, url]) => url)
    .slice(0, limit);

  if (images.length === 0) {
    throw new Error(`No images found in src/assets/images/${normalizedFolder}`);
  }

  return images;
}
