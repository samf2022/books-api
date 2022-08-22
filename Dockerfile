FROM node:18-alpine3.15

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY api/package*.json .

ARG NODE_ENV

RUN if [ "$NODE_ENV" = "development" ]; \
        then npm install; \
        else npm install --only=production; \
        fi

COPY api .

ENV PORT 3000

EXPOSE $PORT

CMD ["node", "main.js"]
