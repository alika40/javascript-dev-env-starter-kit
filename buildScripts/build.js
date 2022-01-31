/* eslint-disable no-console */

import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import chalk from 'chalk';


process.env.NODE_ENV = 'production';

console.log(
  chalk.magenta.bold('Generating minified bundle for production. ' +
                    chalk.cyan('This might take a moment...'))
  );

webpack(webpackConfig).run((err, stats) => {
  if (err) { // If error occurs, exit execution
    console.log(chalk.red(err));
    return 1;
  }

  const jsonStats = stats.toJson();
  if (jsonStats.hasErrors) {
    return jsonStats.errors.map( (error) => console.log(chalk.red(error)) );
  }
  if (jsonStats.hasWarnings) {
    console.log(chalk.blue('Webpack generated the following warnings:'));
    return jsonStats.warnings.map( (warning) => console.log(chalk.red(warning)) );
  }

  console.log(`Webpack Stats: ${stats}`);

  console.log();
  console.log(chalk.green.bold("***************************************"));
  console.log(chalk.green.bold("    Production build is successful!"));
  console.log(chalk.green.bold("***************************************"));

  return 0;
});
