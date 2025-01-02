# Stage 1: Build Stage
FROM node:18 AS build
WORKDIR /TaskManagerFrontend
COPY TaskManagerFrontend/package.json TaskManagerFrontend/package-lock.json ./
RUN npm install
COPY TaskManagerFrontend/ /TaskManagerFrontend/
RUN npm run build

# Stage 2: Production Stage
FROM nginx:alpine
COPY --from=build /TaskManagerFrontend/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
