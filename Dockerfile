FROM node:14

WORKDIR /mhyeo/
COPY . /mhyeo/

RUN yarn install --network-concurrency 1
RUN yarn build
CMD yarn start