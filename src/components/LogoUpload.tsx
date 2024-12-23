import React, { useRef } from 'react';
import { Upload } from 'lucide-react';

interface LogoUploadProps {
  onLogoSelect: (logoData: string) => void;
}

export const LogoUpload: React.FC<LogoUploadProps> = ({ onLogoSelect }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const logoData = e.target?.result as string;
        onLogoSelect(logoData);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        Company Logo
      </label>
      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
        className="flex items-center justify-center w-full px-4 py-2 border-2 border-dashed border-gray-300 rounded-md hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <Upload className="w-5 h-5 mr-2 text-gray-400" />
        <span className="text-sm text-gray-600">Upload Logo</span>
      </button>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
      />
    </div>
  );
};