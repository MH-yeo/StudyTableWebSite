FROM node:14

WORKDIR /mhyeo/
COPY . /mhyeo/

RUN yarn add -D @types/react@18.0.1
RUN yarn install --network-concurrency 1
RUN yarn build
CMD yarn start