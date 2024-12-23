import React from 'react';
import QRCode from 'qrcode.react';

interface CouponQRProps {
  url: string;
  size?: number;
}

export const CouponQR: React.FC<CouponQRProps> = ({ url, size = 40 }) => (
  <div className="text-center">
    <QRCode 
      value={url}
      size={size}
      level="L"
      includeMargin={true}
      renderAs="svg"
    />
    <p className="text-[6px] text-gray-600 mt-0.5">Follow Us</p>
  </div>
);