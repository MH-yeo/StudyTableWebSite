FROM node:14

WORKDIR /mhyeo/
COPY . /mhyeo/

RUN yarn add @types/react@17.0.2
RUN yarn install
RUN yarn build
CMD yarn start