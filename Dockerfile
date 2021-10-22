FROM node
ENV NODE_ENV production
ENV NEXT_PUBLIC_ASSET_PREFIX "/calendar/"
WORKDIR /app
COPY . .
RUN npm ci --only=production
RUN npm add --dev typescript @types/react
RUN npm run build
CMD ["npm", "start"]
