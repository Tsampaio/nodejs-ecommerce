const express = require("express");
const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

dotenv.config({ path: './.env'});

const app = express();

const connectDB = async () => {
  try {
      await mongoose.connect(process.env.DB_URL, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          useCreateIndex: true,
          useFindAndModify: false
      });
      console.log("MongoDB is Connected");
  } catch (error) {
      console.log(error);
  }
}

//connect Database
connectDB();

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(cookieParser());

app.set('view engine', 'hbs');

//Define Routes
app.use('/', require('./routes/pages'));
// app.use('/auth', require('./routes/auth'));

app.listen(5000, () => {
  console.log("Server started on Port 5001");
})