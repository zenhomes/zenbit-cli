#!/usr/bin/env node


/*!
 * zenbit-cli
 * Copyright(c) 2020 Zenhomes
 * MIT Licensed
 */

const { Command } = require('commander');
const path = require('path');

const { initializeWorkspace } = require('./src/commands/init');
const { addComponent } = require('./src/commands/add');
const { versionComponent } = require('./src/commands/version');

const pkg = require(path.join(__dirname, 'package.json'));
const Program = new Command();

// set package meta data
Program
    .version(pkg.version)
    .description(pkg.description);


/*!
 * zenbit-cli - commands
 */

 // init
Program
    .command('init')
    .description('Initialize @bit and perform other housekeeping chores')
    .option('-f, --framework <frameworkType>', 'Specifies the compiler to use for building components', 'react')
    .option('-cd, --componentsDirectory <componentsDirectory>', 'Specifies the default directory for components', 'src/components/')
    .action(initializeWorkspace);


// add
Program
    .command('add <componentFolder>')
    .description('Add a component for tracking')
    .option('-id, --componentId <componentId>', 'Optional id to use for component identifaction')
    .action(addComponent);


// version
Program
    .command('version <componentId> [versionVariant]')
    .description('Add version to component')
    .action(versionComponent);


// --skip-auto-tag

Program.parse(process.argv);
