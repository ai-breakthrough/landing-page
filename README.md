# CoreAI Website

A React-based website served using Docker and Nginx.

## Docker Setup

This project is configured to run locally using Docker and Docker Compose.

### Prerequisites

- Docker
- Docker Compose

### Running the Website

1. **Build and start the container:**

   ```bash
   docker-compose up -d
   ```

2. **Access the website:**
   Open your browser and navigate to: http://localhost:3000

3. **Stop the container:**
   ```bash
   docker-compose down
   ```

### Development

- The website serves static files from the `dist/` directory
- Any changes to the `dist/` folder will be reflected immediately due to volume mounting
- The container automatically restarts unless manually stopped

### Container Details

- **Port:** 3000 (mapped to container port 80)
- **Container Name:** coreai-website
- **Base Image:** nginx:alpine
- **Auto-restart:** enabled

### Useful Commands

```bash
# View logs
docker-compose logs -f

# Rebuild and restart
docker-compose up -d --build

# Check container status
docker-compose ps

# Stop and remove containers
docker-compose down
```
