const {exec} = require('child_process');
let args = process.argv;
args.splice(0,2);
let str = args.join(" ");

console.log(str);
exec("git add .", cbAdd);

function cbAdd(err, sdrOut, sdrIn) {
    if(err) {
        console.log(err);
        return;
    }
    exec('git commit -m "${str}"', cbCommit);
}

function cbCommit(err, sdrOut, sdrIn) {
    if(err) {
        console.log(err);
        return;
    }
   console.log('done');
}