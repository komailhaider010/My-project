const express = require("express");
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const db = require('./db/connection');
const cors = require('cors');
const path = require('path');

 // Replace with the path to your router file
const userRoutes = require('./routes/userRoutes');
const blogRoutes = require('./routes/blogRoutes');

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Use the Routes
app.use(userRoutes);
app.use(blogRoutes);

app.listen(PORT,()=>{
  console.log(`app is running on ${PORT}`);
})