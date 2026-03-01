# ─── Stage 1 : Build ──────────────────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Installer les dépendances en premier (cache Docker optimal)
COPY package*.json ./
RUN npm ci --frozen-lockfile

# Copier le reste du projet
COPY . .

# Build de production
RUN npm run build

# ─── Stage 2 : Serve ──────────────────────────────────────────────────────────
FROM nginx:1.27-alpine

# Config Nginx personnalisée
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copier les fichiers buildés depuis le stage 1
COPY --from=builder /app/dist /usr/share/nginx/html

# Nginx écoute sur le port 80 (Traefik s'en charge pour HTTPS)
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
