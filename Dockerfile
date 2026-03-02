# ─── Stage 1 : Build ──────────────────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Installer les dépendances en premier (cache Docker optimal)
COPY package*.json ./
RUN npm ci --frozen-lockfile

# Copier le reste du projet
COPY . .

# Variables EmailJS (injectées au build via docker-compose build args)
ARG VITE_EMAILJS_SERVICE_ID
ARG VITE_EMAILJS_TEMPLATE_ID
ARG VITE_EMAILJS_PUBLIC_KEY
ENV VITE_EMAILJS_SERVICE_ID=${VITE_EMAILJS_SERVICE_ID}
ENV VITE_EMAILJS_TEMPLATE_ID=${VITE_EMAILJS_TEMPLATE_ID}
ENV VITE_EMAILJS_PUBLIC_KEY=${VITE_EMAILJS_PUBLIC_KEY}

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
