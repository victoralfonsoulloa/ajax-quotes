FROM php:8.2-cli

# Install any necessary PHP extensions or tools here
RUN apt-get update && apt-get install -y curl

# Set working directory
WORKDIR /workspace

# Expose port for PHP's built-in server
EXPOSE 3000