const commander = require('commander');
const program = new commander.Command();
const api = require('./index.js');

program.option('add <taskName>','add a task into list')
.parse(process.argv)
if(program.add) api.add(program.add);

// commander('-ad, --add<name>','add a task into list')
// api.add();