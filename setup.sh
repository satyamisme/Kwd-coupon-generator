#!/bin/bash

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}Setting up KWD Coupon Generator...${NC}"

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "Node.js is not installed. Please install Node.js 18 or higher."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "Node.js version 18 or higher is required. Current version: $(node -v)"
    exit 1
fi

# Install dependencies
echo -e "${BLUE}Installing dependencies...${NC}"
npm install

# Build the project
echo -e "${BLUE}Building the project...${NC}"
npm run build

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo -e "${BLUE}Installing PM2...${NC}"
    npm install -g pm2
fi

# Start the application with PM2
echo -e "${BLUE}Starting the application...${NC}"
pm2 serve dist 3000 --spa --name "kwd-coupon"

echo -e "${GREEN}Setup complete! Application is running on http://localhost:3000${NC}"
echo -e "Use the following commands to manage the application:"
echo -e "  ${BLUE}pm2 status${NC} - Check application status"
echo -e "  ${BLUE}pm2 logs kwd-coupon${NC} - View application logs"
echo -e "  ${BLUE}pm2 stop kwd-coupon${NC} - Stop the application"
echo -e "  ${BLUE}pm2 restart kwd-coupon${NC} - Restart the application"