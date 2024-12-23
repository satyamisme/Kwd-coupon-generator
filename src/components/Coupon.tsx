import React from 'react';
import Barcode from 'react-barcode';
import { CouponHeader } from './CouponHeader';
import { CouponDiscount } from './CouponDiscount';
import { CouponQR } from './CouponQR';
import { CouponTerms } from './CouponTerms';
import { CouponTermsLeft } from './CouponTermsLeft';

interface CouponProps {
  name: string;
  number: string;
  discount: number;
  purchaseAmount: number;
  validUntil: string;
  showQR: boolean;
  socialLinks: {
    linktree: string;
  };
}

export const Coupon: React.FC<CouponProps> = (props) => {
  return (
    <div className="w-full h-full border border-dashed border-gray-300 bg-white print:border-gray-800">
      <div className="flex h-full p-2">
        <div className="flex-1 pr-2">
          <CouponHeader />
          <CouponDiscount amount={props.discount} />
          <div className="mt-1 text-[6px] text-gray-600 leading-tight">
            <p>* Maximum redemption value of 5 KWD for mobile phones</p>
            <p>* Value applicable for accessories purchase of actual amount</p>
            <p>* Not valid for repair services</p>
          </div>
          <CouponTermsLeft />
        </div>

        <div className="w-[40%] flex flex-col justify-between items-end border-l border-gray-200 pl-2">
          <div className="flex flex-col items-end gap-1">
            {props.showQR && (
              <CouponQR url={`https://linktr.ee/${props.socialLinks.linktree}`} size={40} />
            )}
            <div className="-mr-2">
              <Barcode 
                value={props.number} 
                width={0.7}
                height={15}
                fontSize={6}
                margin={0}
              />
            </div>
          </div>
          <CouponTerms 
            validUntil={props.validUntil} 
            purchaseAmount={props.purchaseAmount}
          />
        </div>
      </div>
    </div>
  );
};