const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv').config();
const connectDB = require('./db/dbConnection');
const PORT = process.env.PORT || 5000;

//middlewares
const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
}
const app = express();
app.use(cors(corsOptions));
app.use(express.json());



//routes

app.use("/api/v1", require("./mainRoute/index"));

app.get('/', (req, res) => {
   return res.status(200).json(
        {
            success: true,
            message: "Welcome to the server",
        }
    );
});
app.listen(PORT, async () => {
    await connectDB()
    console.log(`Server running on port http://localhost:${PORT}`)});


module.exports = app;