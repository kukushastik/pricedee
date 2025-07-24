FROM node:18
WORKDIR /workspace
COPY . .
RUN npm install
CMD ["npm", "run", "dev"]