export function getDiscountPercent(
  price: number,
  compareAtPrice: number | null,
) {
  if (!compareAtPrice) return null;

  return Math.round(((compareAtPrice - price) / compareAtPrice) * 100);
}
