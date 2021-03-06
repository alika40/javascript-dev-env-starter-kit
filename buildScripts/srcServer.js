import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 4000;
const app = express();
const compiler = webpack(config);


app.use( require('webpack-dev-middleware') (compiler, { publicPath: config.output.publicPath }) );


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});


app.get('/users', (req, res) => {
  // Hardcoded production api for simplicity
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
