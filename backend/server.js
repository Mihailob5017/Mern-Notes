const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const notesRoute = require("./routes/notesRoute");
require("dotenv/config");
const dbKey = process.env.DB_KEY;
const port = process.env.PORT || 5000;

const app = express();
//middleware
app.use(cors());
app.use(express.urlencoded());
app.use(express.json());
app.use("/notes", notesRoute);

//connecting mongoodb
mongoose.connect(dbKey, { useNewUrlParser: true, useCreateIndex: true }, () => {
  console.log("mongooDb connected");
});

//listening on the server
app.listen(port, () => {
  console.log("server started");
});
