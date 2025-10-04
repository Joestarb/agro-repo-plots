# ./apps/agro-repo-plots/Dockerfile
FROM node:18
WORKDIR /app   

# Instalar pnpm globalmente y TypeScript
RUN npm install -g pnpm typescript ts-node

# Copiar configuración del workspace desde la raíz
COPY pnpm-workspace.yaml ./
COPY package.json ./
COPY pnpm-lock.yaml ./
COPY package*.json tsconfig.json ./

# Copiar configuración base de TypeScript
COPY tsconfig.json ./


# Copiar los archivos de configuración del agro-repo-plots
COPY apps/agro-repo-plots/package.json apps/agro-repo-plots/

# Instalar dependencias (esto instalará todo el workspace)
RUN pnpm install --no-frozen-lockfile

RUN pnpm install --frozen-lockfile

# Construir el paquete común primero
RUN pnpm --filter @agro-project/common build

# Copiar el código fuente del agro-repo-plots
COPY apps/agro-repo-plots apps/agro-repo-plots

# Cambiar al directorio del agro-repo-plots
WORKDIR /app/apps/agro-repo-plots

# Exponer el puerto
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["pnpm", "run", "dev"]
