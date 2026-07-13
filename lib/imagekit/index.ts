const IMAGEKIT_URL = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT!;

type TransformationOptions = {
  width?: number;
  height?: number;
  quality?: number;
};

export function getImageUrl(path: string, options?: TransformationOptions) {
  const params: string[] = [];

  if (options?.width) params.push(`w-${options.width}`);
  if (options?.height) params.push(`h-${options.height}`);
  if (options?.quality) params.push(`q-${options.quality}`);

  const transformation = params.length > 0 ? `?tr=${params.join(",")}` : "";

  return `${IMAGEKIT_URL}/${path}${transformation}`;
}
