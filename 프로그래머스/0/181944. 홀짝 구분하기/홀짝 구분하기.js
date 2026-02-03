const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
    result = Number(input)%2 == 1 ? 'odd' : 'even';
    console.log(line, 'is', result);
});