require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const port=process.env.PORT

// app.use(express.json({ limit: "10mb" }));
// app.use(express.urlencoded({ limit: "10mb", extended: true }));
// app.use(cors());
// mongoose
//   .connect("mongodb://localhost:27017", { family: 4 })
//   .then(() => app.listen(3004, () => console.log(`Listening at Port 3004`)))
//   .catch((error) => console.log(`${error} did not connect`));
app.use("/api/contacts",require("./routes/contactRoutes"))
app.listen(3004,()=>{
    console.log(`Listining on port ${port}`);
})