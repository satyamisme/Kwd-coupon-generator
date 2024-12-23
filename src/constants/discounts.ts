export const INITIAL_PRICE_RANGES = [
  { min: 1, max: 20, discount: 2, minPurchase: 10 },
  { min: 21, max: 50, discount: 5, minPurchase: 20 },
  { min: 51, max: 100, discount: 10, minPurchase: 50 }
] as const;

export const getDiscountForAmount = (amount: number, ranges: typeof INITIAL_PRICE_RANGES) => {
  return ranges.find(range => 
    amount >= range.min && amount <= range.max
  )?.discount || 2;
};