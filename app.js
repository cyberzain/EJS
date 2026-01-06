const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));




app.get('/', (req, res) => {
  res.send("server is running");
});

app.get('/home', (req, res) => {
  res.render('home');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

