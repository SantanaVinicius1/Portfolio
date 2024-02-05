FROM node:18-alpine
WORKDIR /Portfolio/
COPY public/ ./public
Copy src/ ./src
COPY package.json /Portfolio/
RUN npm install --legacy-peer-deps
CMD ["npm","start"]