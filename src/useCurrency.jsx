const intl = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
});
export const priceConverter = (price) => intl.format(price);
export default function useCurrency(price) {
  return priceConverter(price);
}
