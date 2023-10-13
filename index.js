const express = require("express");
const app = express();

const dotenv = require("dotenv").config()
const PORT = process.env.PORT || 4000;






app.get('/', (req, res) => {
    res.send('Hello, Express.js!');
  });

  app.get('/about-us', (req, res) => {
    res.send('about us page!');
  });

  app.get('/contact-us', (req, res) => {
    res.send('contact us page!');
  });


app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})