@echo off
setlocal enabledelayedexpansion

echo Setting up KWD Coupon Generator...

:: Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo Node.js is not installed. Please install Node.js 18 or higher.
    exit /b 1
)

:: Check Node.js version
for /f "tokens=2 delims=v." %%a in ('node -v') do (
    set NODE_VERSION=%%a
)
if !NODE_VERSION! lss 18 (
    echo Node.js version 18 or higher is required. Current version: !NODE_VERSION!
    exit /b 1
)

:: Install dependencies
echo Installing dependencies...
call npm install
if %ERRORLEVEL% neq 0 (
    echo Failed to install dependencies
    exit /b 1
)

:: Build the project
echo Building the project...
call npm run build
if %ERRORLEVEL% neq 0 (
    echo Failed to build the project
    exit /b 1
)

:: Check if serve is installed globally
where serve >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo Installing serve globally...
    call npm install -g serve
)

:: Start the application
echo Starting the application...
start "" serve -s dist -l 3000

echo Setup complete! Application is running on http://localhost:3000
echo.
echo To stop the application, press Ctrl+C in the server window
echo To restart, run this script again