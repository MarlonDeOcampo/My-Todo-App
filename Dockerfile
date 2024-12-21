# Use Node.js with Alpine as the base image
FROM node:alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json for deployment
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire application source code
COPY . .

# Build the application (for example: Vite, Webpack, etc.)
RUN npm run build

# Expose port 8080 or the port your app is running on
EXPOSE 8080

# Start the application
CMD ["npm", "start"]
