# Use nginx alpine image for serving static files
FROM nginx:alpine

# Copy the built React app to nginx's serve directory
COPY dist/ /usr/share/nginx/html/

# Copy custom nginx configuration if needed
# COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
