# Deployment Guide

## VPS Deployment

### Prerequisites

- Ubuntu 20.04 or higher
- Node.js 18.x or higher
- Nginx
- PM2 (optional)

### Steps

1. Connect to your VPS:
```bash
ssh user@your-vps-ip
```

2. Install Node.js:
```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

3. Install Nginx:
```bash
sudo apt install nginx
```

4. Clone the repository:
```bash
git clone <repository-url>
cd kwd-coupon-generator
```

5. Install dependencies and build:
```bash
npm install
npm run build
```

6. Configure Nginx:
```nginx
server {
    listen 80;
    server_name your-domain.com;

    root /path/to/kwd-coupon-generator/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

7. Start the application:
```bash
# Using PM2
npm install -g pm2
pm2 serve dist 3000 --spa

# Or using serve
npm install -g serve
serve -s dist -l 3000
```

## Docker Deployment

1. Build the image:
```bash
docker build -t kwd-coupon-generator .
```

2. Run the container:
```bash
docker run -d -p 3000:3000 kwd-coupon-generator
```

## SSL Configuration

1. Install Certbot:
```bash
sudo apt install certbot python3-certbot-nginx
```

2. Obtain SSL certificate:
```bash
sudo certbot --nginx -d your-domain.com
```