export function formatPrice(price: number,showDecimals=true) {
  return new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PEN",
    minimumFractionDigits: showDecimals ? 2 : 0,
    maximumFractionDigits: showDecimals ? 2 : 0
  }).format(price);
}
export function formatString(str: string): string {
  return str
      .toLowerCase()
      .replace(/&/g, "") // Remove all occurrences of "&"
      .replace(/\s+/g, "-") // Replace one or more spaces with a single "-"
      .replace(/-+/g, "-") // Replace multiple "-" with a single "-"
      .trim(); // Remove any leading or trailing spaces
}
