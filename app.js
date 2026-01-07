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
  res.render('home',{name : "Vijay D"});
});

app.get('/dashboard', (req, res) => {
  res.render('dashboard', {
    totalPatients: 130,
    admittedPatients: 45,
  });
}
);

const students = [
  { name: 'Alice', age: 20, marks: 85 },
  { name: 'Bob', age: 22, marks: 34 },
  { name: 'Charlie', age: 21, marks: 78 },
  { name: 'David', age: 23, marks: 88 },
  { name: 'Eve', age: 20, marks: 32 },
]

app.get('/students', (req, res) => {
res.render('students', {students});
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
