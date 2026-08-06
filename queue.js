const { Queue } = require("bullmq");
const IORedis = require("ioredis");

const connection = new IORedis({
    maxRetriesPerRequest: null,
});

const queue = new Queue("aiQueue", {
    connection
});

module.exports = queue;