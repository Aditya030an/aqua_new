import express from "express";
import cors from "cors";
import 'dotenv/config'
import connectDb from "./config/mongodb.js";
import userRouter from "./routes/userRoute.js";
import bookingRouter from "./routes/bookingRoute.js";
import blogRoutes from "./routes/blogRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRouter from "./routes/orderRoutes.js";

//App config
const app = express();
const port = process.env.PORT || 4000;

//middewares

app.use(express.json());
app.use(cors());

// Ensure the DB is connected before handling any request (serverless-safe)
app.use(async (req, res, next) => {
    try {
        await connectDb();
        next();
    } catch (error) {
        console.log("DB connection failed:", error);
        res.status(500).json({ success: false, message: "Database connection failed" });
    }
});

//api end points
app.use("/api/user" , userRouter);
app.use("/api/booking" , bookingRouter);
app.use("/api/blogs", blogRoutes);
app.use("/api/product" , productRoutes);
app.use("/api/payment" , orderRouter);


app.get("/" ,(req , res)=>{
    res.send("API working")
})

app.listen(port , ()=>{
    console.log("server started on PORT:" + port)
})