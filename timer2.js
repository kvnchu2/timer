const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

//set variable for capturing time required before beep
let beepTimer = '';

readline.setPrompt('Press b to get instant beep or a number from 1 to 9 to get a beep after that number of seconds. ')

readline.prompt();

//on keypress, if key is b, set beepTimer to b and if key is number 1-9, set beepTimer to number
process.stdin.on('keypress', (data, key) => {
  if (key.name === 'b') {
      beepTimer = 'b';
  } else if (key.name === '1' || key.name === '2'|| key.name === '3' || key.name === '4' || key.name === '5' || key.name === '6' || key.name === '7' || key.name === '8' || key.name === '9') {
      beepTimer = key.name;
  }
});

//when pressing ctrl + c, user asked to confirm and displays message upon confirming
readline.on('SIGINT', () => {
  readline.question('Are you sure you want to exit? Press Y to confirm. ', (answer) => {
    if (answer === 'Y') {
      console.log("Thanks for using me, ciao!");
      readline.close();
    }
  });
});

//creates output when pressing enter
readline.on('line', () => {
  if(beepTimer === 'b') {
    process.stdout.write('\x07');
    readline.prompt();
  } else if (typeof Number(beepTimer) === 'number') {
    console.log(`\nSetting timer for ${beepTimer} seconds...`);
    setTimeout(() => {process.stdout.write('\x07')}, Number(beepTimer) * 1000);
    setTimeout(() => {readline.prompt()}, Number(beepTimer) * 1000);
  }
});

