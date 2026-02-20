# ─── Stage 1 : Build ──────────────────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Copier les fichiers de dépendances
COPY package.json package-lock.json ./

# Installer les dépendances
RUN npm ci --frozen-lockfile

# Copier le reste du code
COPY . .

# Build de production
RUN npm run build

# ─── Stage 2 : Serve ──────────────────────────────────────────────────────────
FROM nginx:alpine AS production

# Copier la configuration nginx custom
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copier le build depuis le stage 1
COPY --from=builder /app/dist /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Démarrer nginx
CMD ["nginx", "-g", "daemon off;"]
