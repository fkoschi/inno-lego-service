FROM node:16.19.0-slim

# Create and set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Build the application
RUN npm run build

EXPOSE 8080

USER 101

# Start the application when the container starts
CMD ["npm", "run", "start:prod"]
STOPSIGNAL SIGQUIT
