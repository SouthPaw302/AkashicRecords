#!/bin/bash

echo "🚀 Installing Akashic Records Backend Dependencies..."

# Install Node.js dependencies
npm install

echo "✅ Dependencies installed successfully!"

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo "📝 Creating .env file from template..."
    cp .env.example .env
    echo "⚠️  Please edit .env file with your API keys before starting the server"
fi

echo "🌟 Setup complete! Run 'npm start' to start the server"