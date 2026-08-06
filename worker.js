const { Worker } = require("bullmq");
const IORedis = require("ioredis");

const connection = new IORedis({
    maxRetriesPerRequest: null,
});

const worker = new Worker(
    "aiQueue",
    async (job) => {

        console.log(`Processing Job ${job.id}`);

        // Simulate slow task
        await new Promise(resolve => setTimeout(resolve, 10000));

        return `AI Result: ${job.data.text}`;
    },
    {
        connection
    }
);

console.log("Worker is running...");