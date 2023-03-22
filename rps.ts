const player1Name: string = "Jake";
const player2Name: string = "Dane";
let player1Choice: string;
let player2Choice: string;

const tools: Array<string> = ["rock", "paper", "scissors"];

function setPlayerChoice(tools: Array<string>): string {
  return tools[Math.floor(Math.random() * tools.length)];
}
