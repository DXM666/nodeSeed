#!/usr/bin/env node


const program = require('commander');

 program
  .command('new')
  .alias('n')
  .description('create new component')
  .option('--name [value]', 'Module name')
  .action(moduleName=>{
      require('./createModule').createModule(moduleName.name)
  });

program.parse(process.argv);
