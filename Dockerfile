# Use an official Node.js runtime as a parent image
FROM node:20 AS build

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the application code to the container
COPY . .

# Build the app for production
RUN npm run build

# Use a new stage to serve the app
FROM node:20 AS production

# Set the working directory in the container to /app
WORKDIR /app

# Copy the build artifacts from the build stage
COPY --from=build /app/.next /app/.next
COPY --from=build /app/public /app/public
COPY --from=build /app/package*.json ./

# Install only production dependencies
RUN npm install --legacy-peer-deps --only=production

# Set the command to run the app
CMD ["npm", "start"]

# Expose the port that the app runs on
EXPOSE 3000
