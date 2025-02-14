const { initializeGame, checkGameOver } = require("./initGame");
const { movePlayer, calculateScore } = require("./move_player");

initializeGame()
    .then(() => movePlayer("right"))
    .then(() => movePlayer("up"))
    .then(() => calculateScore(["jump", "hit", "collect"]))
    .then(score => checkGameOver(score))
    .then(result => console.log(`Final Status: ${result}`))
    .catch(error => console.error(error));
