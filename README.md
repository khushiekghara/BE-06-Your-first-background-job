# BE-06 Background Job

## Tech Stack
- Node.js
- Express.js
- BullMQ
- Redis
- Docker

## Endpoints

POST /analyze
Returns 202 Accepted and queues the job.

GET /status/:id
Returns current job status and final result.

## Run

npm install

docker run -d --name redis-server -p 6379:6379 redis

node server.js

node worker.js