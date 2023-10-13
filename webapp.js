const express = require("express");
const app = express();

const dotenv = require("dotenv").config()
const PORT = process.env.PORT || 8002;






app.get('/', (req, res) => {
    res.send('<h1>Welcome to our nodejs website</h1>');
  });

  app.get('/contact', (req, res) => {
    res.send('<h3>My name is Beulah Joel Singari and i am a student Here is my email Singar01@email.franklin.edu</h3>');
  });

  app.get('/bio', (req, res) => {
    res.send('<h1>Name: Beulah joel singari</h1>  <h1>occupation: student</h1> <h1>school: franklin uni</h1>');
  });


app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
})