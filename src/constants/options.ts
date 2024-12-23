export interface CouponOptions {
  enableBranchSpecific: boolean;
  enableExpiration: boolean;
  enableCustomTerms: boolean;
  enableCustomDesign: boolean;
}

export const DEFAULT_OPTIONS: CouponOptions = {
  enableBranchSpecific: false,
  enableExpiration: true,
  enableCustomTerms: false,
  enableCustomDesign: false,
};