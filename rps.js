var player1Name = "Jake";
var player2Name = "Dane";
var player1Choice;
var player2Choice;
var tools = ["rock", "paper", "scissors"];
function setPlayerChoice(tools) {
    return tools[Math.floor(Math.random() * tools.length)];
}
player1Choice = setPlayerChoice(tools);
player2Choice = setPlayerChoice(tools);
console.log("".concat(player1Name, " played ").concat(player1Choice));
console.log("".concat(player2Name, " played ").concat(player2Choice));
