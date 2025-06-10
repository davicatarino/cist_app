FROM node:18

# Use local Expo CLI that comes with the project dependencies

# Create app directory
WORKDIR /app

# Copy package files first for better caching
COPY mobile/package.json /app/mobile/package.json

# Install dependencies
RUN cd mobile && npm install

# Copy source code
COPY mobile /app/mobile

WORKDIR /app/mobile

EXPOSE 19000 19001 19002

CMD ["npx", "expo", "start", "--tunnel", "--non-interactive"]
