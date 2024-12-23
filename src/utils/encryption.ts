import { Buffer } from 'buffer';

export const encryptCoupon = (data: string): string => {
  const buffer = Buffer.from(data, 'utf-8');
  return buffer.toString('base64');
};

export const decryptCoupon = (encrypted: string): string => {
  const buffer = Buffer.from(encrypted, 'base64');
  return buffer.toString('utf-8');
};