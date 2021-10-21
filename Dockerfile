FROM node
ENV NODE_ENV production
WORKDIR /app
COPY . .
RUN npm ci --only=production
RUN npm add --dev typescript @types/react
RUN npm run build
ENV PORT=80
ENV BASE_PATH=/calendar
CMD ["npm", "start"]
