# FROM node:18-alpine

# WORKDIR /pages
# COPY package*.json ./
# RUN npm install


# COPY . .
# EXPOSE 3000
# CMD npm run dev

# # Use an official Node.js runtime as a parent image
# FROM node:18-alpine

# # Set the working directory in the container
# WORKDIR /pages

# # Install dependencies
# COPY package*.json ./
# RUN npm install

# # Copy the rest of the application code
# COPY . .

# # Copy Prisma schema if it's in a separate folder
# COPY prisma ./prisma

# # Build the Next.js application
# RUN npm run build

# # Expose port 3000 to the outside world
# EXPOSE 3000

# # Define the command to run the Next.js application
# CMD ["npm", "start"]
# Use an official Node.js runtime as a parent image

FROM node:18-alpine

# Set the working directory in the container

WORKDIR /app

# Copy package files and install dependencies

COPY package*.json ./
RUN npm install

# Copy the entire application code including the Prisma schema

COPY . .

# Generate Prisma client

RUN npx prisma generate

# Build the Next.js application

RUN npm run build

# Expose port 3000 to the outside world

EXPOSE 3000

# Define the command to run the Next.js application

CMD ["npm", "start"]
