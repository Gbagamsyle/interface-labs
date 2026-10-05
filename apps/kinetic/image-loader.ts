type ImageLoaderOptions = { src: string; width: number; quality?: number };

export default function imageLoader({ src, width, quality }: ImageLoaderOptions): string {
  const imageUrl = new URL(src);
  imageUrl.searchParams.set("w", String(width));
  imageUrl.searchParams.set("q", String(quality ?? 75));
  return imageUrl.toString();
}
