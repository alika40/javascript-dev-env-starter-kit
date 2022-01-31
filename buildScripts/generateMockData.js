/*
This script generates mock data for development.
this way you don't have to point actual API,
but you can enjoy realist, but randomized data, and a rapid page load due local, static data.
*/


/* eslint-disable no-console */

import { generate, extend } from "json-schema-faker";
import { schema } from "./mockDataSchema";
import fs from "fs";
import chalk from "chalk";



// Extends JSF with fake libs you won't to use
extend('faker', () => require('faker'));
const json = JSON.stringify(generate(schema));

fs.writeFile('./src/api/db.json', json, (err) => {
  if (err) {
    return console.log(chalk.red(err));
  }
  else {
    console.log(chalk.green('Mock data generated!'));
  }
});
