const express = require('express');
const app = express();

const courseRoute = require('./routes/course');
const paymentRoute = require('./routes/payment');
const profileRoute = require('./routes/profile');
const userRoute = require('./routes/user');
const {cloudinaryConnect} = require('./Config/cloudinary');

const connectToMongo = require('./Config/db');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const {uploadImage} = require("./utils/ImageUploader");
const fileUpload = require("express-fileupload");
require("dotenv").config();

const PORT = process.env.PORT || 4000;

connectToMongo();

app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true
    })
)
app.use(
    fileUpload({
        useTempFiles: true,
        tempFileDir:"/tmp"
    })
)

cloudinaryConnect();

app.use("/api/v1/auth", userRoute)
app.use("/api/v1/profile", profileRoute)
app.use("/api/v1/payment", paymentRoute)
app.use("/api/v1/course", courseRoute)

app.get("/", (req, res) => {
    return res.json({
        success: true,
        message: "Your server is running"
    })
})

app.listen(PORT ,() =>{
    console.log(`listening on port: ${PORT}`);
})