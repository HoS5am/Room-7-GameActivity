function initializeGame() {
    return new Promise((resolve) => {
        console.log("Starting game...");
        setTimeout(() => {
            console.log("Game Started!");
            resolve();
        }, 2000);
    });
}


function checkGameOver(score) {
    return new Promise((resolve) => {
        console.log("Checking game over....");
        setTimeout(() => {
            if (score >= 50) {
                console.log("Game over!");
                resolve("Game Over");
            } else {
                console.log("Continue playing.");
                resolve("Continue");
            }
        }, 1000);
    });
}

module.exports = { initializeGame, checkGameOver };