const express=require("express");
const app=express();
const mongoose=require("mongoose");
const morgan=require("morgan");
const bodyParser=require("body-parser");
require("dotenv").config();
const cors=require("cors");
const port=process.env.PORT||8000
const cookieParser=require("cookie-parser");
const errorHandler = require("./middleware/error");
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const jobRoute=require('./routes/jobsRoutes')
const jobTypeRoute=require("./routes/jobsTypeRoutes")
// database connection
mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "MERN_JOB_SEEKING_WEBAPP",
    })
    .then(() => {
      console.log("Connected to database.");
    })
    .catch((err) => {
      console.log(`Some Error occured. ${err}`);
    });

// Middleware

app.use(morgan('dev'));
app.use(bodyParser.json({limit:"5mb"}));
app.use(bodyParser.urlencoded({
    limit:"5mb",
    extended:true,
}));
app.use(cookieParser());
app.use(cors());

// routes middleware
app.use('/api',authRoutes);
app.use('/api', userRoutes);
app.use('/api', jobTypeRoute);
app.use('/api', jobRoute);

// error middleware
app.use(errorHandler);


// port calling
app.listen(port,()=>{
    console.log(`Listening at port ${port}`)
})