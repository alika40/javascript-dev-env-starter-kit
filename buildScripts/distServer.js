import express from 'express';
import path from 'path';
import open from 'open';
import compressiom from 'compression';

/* eslint-disable no-console */

const port = 4000;
const app = express();


app.use(compressiom());
app.use(express.static('dist'));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});


app.get('/users', (req, res) => {
  res.json(
    [
      {"id": 1, "firstName": "John", "lastName": "Doe", "email": "johndoe@example.com"},
      {"id": 2, "firstName": "Anthony", "lastName": "Alika", "email": "anthonyalika@example.com"},
      {"id": 3, "firstName": "Godfrey", "lastName": "Bubu", "email": "godfrybubu@example.com"},
      {"id": 4, "firstName": "Michael", "lastName": "Bolton", "email": "michaelbolton@example.com"},
    ]
  );
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  else {
    open(`http://localhost:${port}`);
  }
});
