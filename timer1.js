const argv = process.argv.slice(2).sort().map(x => x * 1000).sort((a,b) => a - b).filter(x => x > 0).filter(x => typeof x === 'number');


const beeper = function(arr) {
  if (arr.length === 0) {
    return 'no arguments in array';
  } else {
    for (let second of argv) {
    setTimeout(() => {process.stdout.write('\x07')}, second);
    }
    return argv;
  }
}


console.log(beeper(argv));
