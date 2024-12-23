let currentSequence = 1;

export const generateRandomDiscount = (): number => {
  return Math.floor(Math.random() * 5) + 1;
};

export const generateCouponNumber = (): string => {
  const prefix = 'KWD-97790665-LBR';
  return `${prefix}${currentSequence++}`;
};