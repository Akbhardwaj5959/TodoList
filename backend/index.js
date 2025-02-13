const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();


const routes = require("./routes/ToDoRoutes");

const cors = require("cors");


const app = express();
const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(cors({origin:"https://elegant-shortbread-66147c.netlify.app", methods:["GET", "POST","DELETE","PUT"]}));
app.use(express.urlencoded({
    extended: true
}))
mongoose
.connect(process.env.MONGO_URI)
.then(() => console.log("MongoDB connected..."))
.catch((err) => console.log(err));

app.use("/api", routes);
  
app.listen(PORT, () => console.log(`Listening at ${PORT}...`));