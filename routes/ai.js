const express = require("express");
const router = express.Router();

const queue = require("../queue");

// POST /analyze
router.post("/analyze", async (req, res) => {
    const job = await queue.add("analyze", {
        text: req.body.text
    });

    res.status(202).json({
        jobId: job.id,
        status: "queued"
    });
});

// GET /status/:id
router.get("/status/:id", async (req, res) => {
    const job = await queue.getJob(req.params.id);

    if (!job) {
        return res.status(404).json({
            message: "Job not found"
        });
    }

    const state = await job.getState();

    if (state === "completed") {
        return res.json({
            status: "completed",
            result: job.returnvalue
        });
    }

    res.json({
        status: state
    });
});

module.exports = router;