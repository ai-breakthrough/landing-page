#!/bin/bash

echo "🚀 CoreAI Website Development Script"
echo "=================================="
echo ""
echo "Choose an option:"
echo "1) Start development server (live reload)"
echo "2) Build for production"
echo "3) Serve production build"
echo "4) Stop all containers"
echo ""

read -p "Enter your choice (1-4): " choice

case $choice in
  1)
    echo "Starting development server with live reload..."
    docker-compose -f docker-compose.dev.yml up dev
    ;;
  2)
    echo "Building for production..."
    docker-compose -f docker-compose.dev.yml up build
    ;;
  3)
    echo "Starting production server..."
    docker-compose up -d
    echo "🌐 Website available at: http://localhost:3000"
    ;;
  4)
    echo "Stopping all containers..."
    docker-compose down
    docker-compose -f docker-compose.dev.yml down
    ;;
  *)
    echo "Invalid choice. Please run the script again."
    ;;
esac
