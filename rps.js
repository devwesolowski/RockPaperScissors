var player1Name = "Jake";
var player2Name = "Dane";
var player1Choice;
var player2Choice;
var tools = ["rock", "paper", "scissors"];
function setPlayerChoice(tools) {
    return tools[Math.floor(Math.random() * tools.length)];
}
