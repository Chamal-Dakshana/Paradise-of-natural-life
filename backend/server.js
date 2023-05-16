const express =require ("express");
const mongoose =require("mongoose");
const bodyParser = require("body-parser");
const cors =require("cors");
const dotenv = require("dotenv");

const app = express();

require("dotenv").config();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 8070;

app.get("/",(req,res, next)=>{
  res.send("<h2> Project Owner Api<h2>");
  next();
})

const URL =process.env.MONGODB_URL;

mongoose.connect(URL, {
  useNewUrlParser: true

}).then(() => {
  console.log('Mongodb sucessfully connected!')
},
  error => {
    console.log('Could not connect to database : ' + error)
  }
)

const projectOwnerRouter = require ("./routes/ProjectOwners.js");

app.use ("/projectOwner",projectOwnerRouter);


app.listen(PORT, () => {
  console.log(`Server is up and running on port number: ${PORT}`)
})

