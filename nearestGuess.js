function nearestGuess(person1, person2, level, person1Score, person2Score) {
  console.log(gameName);
  console.log('\t\t\t\t\t\t\t', person1, ' :', person1Score, person2, ' :', person2Score);

  let randomNumber = Math.floor(Math.random() * level) + level;

  if (randomNumber > level) {
    randomNumber = randomNumber - level;
  }

  const clueNumber = Math.pow(randomNumber, 2) + Math.floor(Math.random() * level / 2);
  console.log('clue is "Square of that number is lesser than', clueNumber);

  const person1Guess = +prompt(person1 + ' guess a number :');
  const person2Guess = +prompt(person2 + ' guess a number :');

  const p1result = howNear(person1Guess, randomNumber, level);

  const p2result = howNear(person2Guess, randomNumber, level);
  console.clear();
  console.log(gameName);
  person1Score = person1Score + p1result;
  person2Score = person2Score + p2result;
  printResult(person1, p1result, person2, p2result, person1Score, person2Score, randomNumber);

  if (confirm('\n\nYou want to guess again !!!')) {
    console.clear();
    nearestGuess(person1, person2, level, person1Score, person2Score);
  }

  console.clear();

  return 0;
}

console.log(gameName);
console.log("\n\nThere is an number that you dont know ,You have to guess the number using given clue");
const person1 = prompt('enter your name :', 'player1');
const person2 = prompt('enter your name :', 'player2');

console.clear();
console.log(gameName);

console.log("\nEASY MODE (Guess between 0 and 10)---> 1");
console.log("MEDIUM MODE (Guess between 10 and 100)---> 2");
console.log("HARD MODE (Guess between 100 and 1000)---> 3\n");

switch (+prompt('Enter difficulty :', 1)) {
  case 1:
    nearestGuess(person1, person2, 10, 0, 0);
    break;
  case 2:
    nearestGuess(person1, person2, 100, 0, 0);
    break;
  case 3:
    nearestGuess(person1, person2, 1000, 0, 0);
    break;
  default:
    console.log("invalid");
}
