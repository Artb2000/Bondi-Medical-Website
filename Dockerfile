FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

ARG PUBLIC_HOTDOC_EMBED_URL
ARG PUBLIC_GA_MEASUREMENT_ID
ARG SITE_URL
ENV PUBLIC_HOTDOC_EMBED_URL=${PUBLIC_HOTDOC_EMBED_URL}
ENV PUBLIC_GA_MEASUREMENT_ID=${PUBLIC_GA_MEASUREMENT_ID}
ENV SITE_URL=${SITE_URL}

RUN npm run build

FROM node:20-alpine
WORKDIR /app
RUN npm i -g serve
COPY --from=build /app/dist /app/dist
EXPOSE 4321
CMD ["serve", "-s", "dist", "-l", "4321"]
