const express = require("express");

const app = express();

app.use(express.json());

// Import Routes
const aiRoutes = require("./routes/ai");

// Use Routes
app.use("/", aiRoutes);

// Start Server
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});