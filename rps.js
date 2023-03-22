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
var winner;
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
winner === "tie"
    ? console.log("Tie! No one wins... :(")
    : console.log("".concat(winner, " wins!"));
