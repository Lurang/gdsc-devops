FROM node:18

WORKDIR /opt/gdsc
ENV TINI_VERSION v0.19.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini-amd64 /tini
RUN chmod +x /tini
COPY ./frontend .

RUN npm install
RUN npm run build

ENTRYPOINT ["/tini", "--"]
CMD ["node", "./server/index.js"]
