# RobotHub — zero-dependency Node.js + SQLite robot directory
FROM node:22-bookworm-slim

WORKDIR /app

# Copy app (no npm install needed — uses only node:sqlite + node:http)
COPY package.json ./
COPY server.js ./
COPY db/ ./db/
COPY data/ ./data/
COPY public/ ./public/

# Runtime config
ENV PORT=3000
ENV ADMIN_TOKEN=changeme-in-prod
EXPOSE 3000

# Persist the SQLite database across restarts
VOLUME ["/app/db"]

CMD ["node", "--experimental-sqlite", "server.js"]
