const readlineSync = require('readline-sync');
let mas = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let k = 0;
for(let i = 9; i >= 0; i--) {
    let randomNumber = `${Math.floor(Math.random() * i)}` ;
    k = mas[randomNumber];
    mas[randomNumber] = mas[i];
    mas[i] = k;
}
if(mas[0]===0) {
    mas[0] = mas[5];
}
let randomNumber = [mas[0], mas[1], mas[2], mas[3]].join('');


let userTry = readlineSync.question('Start\nTry:');

let tryCounter = 1;
while (userTry != randomNumber) {
    let bulls = 0,
        cows = 0;
        for (let i = 0; i < userTry.length; i++){
            if (userTry[i] == randomNumber[i]) {
                bulls++;
            } else {
                for (let j = 0; j < randomNumber.length; j++) {
                    if (userTry[i] == randomNumber[j]) {
                        cows++;
                    }
                }
            }
            
        }
        console.log(`Bulls:${bulls}, Cows:${cows}.`);
        userTry = readlineSync.question('Try:');
        tryCounter++;
}
console.log(`It's correct number!\nNumber of tries:${tryCounter}`);