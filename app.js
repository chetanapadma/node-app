var t = require('./utils.js');
var yargs = require('yargs');
var notesJs=require('./notes.js')
var fs=require('fs'); 
//fs.writeFileSync('notes.js', t.getNotes())
//console.log(process.argv);
//console.log(yargs.argv);

yargs.command({
    command: 'add',
    title: 'add title',
    builder: {
        title: {
            describe: 'title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'body',
            demandOption: true,
            type: 'string'
        }

    },
    handler: function (args) {
        notesJs.addNotes(args.title,args.body)
    }
})
yargs.command({
    command: 'read',
    describe: 'read',
    handler: function () {
        console.log(read)
    }
})
yargs.parse();