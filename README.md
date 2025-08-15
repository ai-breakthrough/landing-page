# CoreAI Website

A React-based website served using Docker and Nginx, with automatic deployment to GitHub Pages.

## Local Development

This project can be run locally in multiple ways using Docker.

### Quick Start (Recommended)

Use the development script for easy setup:

```bash
./dev.sh
```

This will present you with options to:
- Start development server with live reload
- Build for production
- Serve production build
- Stop all containers

### Manual Docker Commands

### Prerequisites

- Docker
- Docker Compose

### Running the Website

#### Option 1: Production Build (Static Files)
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

#### Option 2: Development Server (Live Reload)
1. **Start development server:**
   ```bash
   docker-compose -f docker-compose.dev.yml up dev
   ```

2. **Access the website:**
   Open your browser and navigate to: http://localhost:3000
   
3. **Live reload enabled:**
   Changes to your source code will automatically refresh the browser

#### Option 3: Build Only
```bash
docker-compose -f docker-compose.dev.yml up build
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

## GitHub Pages Deployment

This project is configured with GitHub Actions to automatically deploy to GitHub Pages on every push to the main branch.

### Prerequisites

- GitHub repository
- GitHub Pages enabled in repository settings
- GitHub Actions enabled

### Setup Instructions

1. **Enable GitHub Pages:**
   - Go to your repository Settings → Pages
   - Set Source to "GitHub Actions"

2. **Push your code:**
   ```bash
   git add .
   git commit -m "Add GitHub Actions workflow"
   git push origin main
   ```

3. **Monitor deployment:**
   - Check the Actions tab in your repository
   - The workflow will automatically build and deploy your site

### Deployment Details

- **Build Tool:** Vite
- **Output Directory:** `dist/`
- **Deployment:** Automatic on push to main/master branch
- **URL:** `https://yourusername.github.io/your-repo-name`

### Manual Deployment

You can also trigger deployment manually:
- Go to Actions tab in your repository
- Select "Deploy to GitHub Pages" workflow
- Click "Run workflow"
