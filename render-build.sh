#!/bin/bash
# Build script for Render

echo "Installing ALL dependencies (including dev)..."
npm install --include=dev

echo "Generating Prisma Client..."
npx prisma generate

echo "Running migrations..."
npx prisma migrate deploy

echo "Building application..."
npm run build

echo "Removing devDependencies..."
npm prune --production

echo "Build complete!"
