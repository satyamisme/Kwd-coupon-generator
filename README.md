# KWD Coupon Generator

A React-based coupon generation system for phone repair services, built with Vite and TypeScript.

## Features

- Dynamic discount calculation based on purchase amount
- QR code generation for social media links
- Barcode generation for coupon tracking
- Print-ready coupon design
- Multi-branch support
- Responsive UI with Tailwind CSS
- Customizable terms and conditions
- Branch-specific coupon generation
- Custom design options
- Flexible price range configuration

## Prerequisites

- Node.js 18.x or higher
- npm 9.x or higher
- Docker (optional)

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment Options

### 1. Docker Deployment

```bash
# Build Docker image
docker build -t kwd-coupon-generator .

# Run container
docker compose up -d
```

### 2. VPS Deployment

1. Connect to your VPS:
```bash
ssh user@your-vps-ip
```

2. Clone and setup:
```bash
git clone <repository-url>
cd kwd-coupon-generator
npm install
npm run build
```

3. Use PM2 to manage the application:
```bash
npm install -g pm2
pm2 serve dist 3000 --spa
```

### 3. Local PC Deployment

1. Clone the repository
2. Install dependencies: `npm install`
3. Build: `npm run build`
4. Serve locally: `npm run preview`

## Development

- Built with React 18 and TypeScript
- Uses Vite for fast development
- Tailwind CSS for styling
- Lucide React for icons
- QR code and barcode generation

## Project Structure

```
src/
├── components/     # React components
├── constants/      # Application constants
├── utils/         # Utility functions
└── types/         # TypeScript types
```

## Configuration

The application supports various configuration options:

1. Price Ranges
- Customize min/max prices
- Set discount amounts
- Define minimum purchase requirements
- Specify quantities per range

2. Additional Options
- Branch-specific coupons
- Custom expiration dates
- Customizable terms
- Design modifications

## License

MIT