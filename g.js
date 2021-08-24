const {exec} = require('child_process');
let args = process.argv;
args.splice(0,2);
let str = args.join(" ");

console.log(str);
exec("git add .", cb);
exec('git commit -m "${str}"', cb);

function cb(err, sdrOut, sdrIn) {
    if(err) {
        console.log(err);
        return;
    }
}