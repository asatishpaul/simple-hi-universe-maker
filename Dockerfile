# Multi-stage build for React/Vite application
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install ALL dependencies (including dev dependencies needed for build)
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built assets from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy nginx configuration (optional - create if you need custom config)
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
