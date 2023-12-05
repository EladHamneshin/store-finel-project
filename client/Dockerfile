FROM node:18-alpine as builder

WORKDIR /app

COPY package*.json ./
RUN npm install

ENV VITE_API_URI=http://ade0a9e8c300f48708e5fcdcf95a35a4-507123613.eu-central-1.elb.amazonaws.com/store/api
ENV VITE_PAYPAL_CLIENT_ID=AROacS24yq9vDgax95Suta8Mhb_wLXgy6cVFFsNYfDqzRTc7CTIxWwzQBsfp3OCC_uBYAnwWxxXeFWm_
ENV VITE_API_KEY_LOCATION=AIzaSyBHEyoJZUjdzFaeJUCJMISdnDI0Ngi8siA
ENV VITE_NODE_ENV=production

COPY . .
RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80