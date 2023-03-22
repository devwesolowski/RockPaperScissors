const player1Name: string = "Jake";
const player2Name: string = "Dane";
let player1Choice: string;
let player2Choice: string;

const tools: Array<string> = ["rock", "paper", "scissors"];

function setPlayerChoice(tools: Array<string>): string {
  return tools[Math.floor(Math.random() * tools.length)];
}

player1Choice = setPlayerChoice(tools);
player2Choice = setPlayerChoice(tools);
console.log(`${player1Name} played ${player1Choice}`);
console.log(`${player2Name} played ${player2Choice}`);

let winner: string;

switch (player1Choice) {
  case "rock":
    player2Choice == "paper"
      ? (winner = player2Name)
      : player2Choice == "scissors"
      ? (winner = player1Name)
      : (winner = "tie");
    break;
  case "paper":
    player2Choice == "scissors"
      ? (winner = player2Name)
      : player2Choice == "rock"
      ? (winner = player1Name)
      : (winner = "tie");
    break;
  case "scissors":
    player2Choice == "rock"
      ? (winner = player2Name)
      : player2Choice == "paper"
      ? (winner = player1Name)
      : (winner = "tie");
    break;
  default:
    winner = "unknown";
}
console.log(`${winner} wins!`);
