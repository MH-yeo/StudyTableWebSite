FROM node:14

WORKDIR /mhyeo/
COPY . /mhyeo/

RUN yarn add --dev @types/react
RUN yarn install
RUN yarn build
CMD yarn start