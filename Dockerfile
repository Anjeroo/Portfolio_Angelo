FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN  npm install

FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . ./

RUN npm run build
RUN npm install -g http-server --yes
RUN npm cache clean --force

FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

COPY --from=builder /app/node_modules /app/node_modules
COPY . .

RUN npm run build --mode=production
RUN chmod +x ./entrypoint.sh

ENTRYPOINT ["./entrypoint.sh"]