# Use the official Node.js image as a base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install --only=production

# Copy the rest of the application code
COPY . .

# Build the application (if using TypeScript)
RUN npm run build

# Expose the application's port (default: 3000 for NestJS)
EXPOSE 3000

# Command to run the application
CMD ["node", "dist/main.js"]

