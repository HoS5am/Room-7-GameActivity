function move_player(direction) {
    return new Promise((resolve => {
        console.log(`The player will move ${direction}`)
        setTimeout(() => {
            console.log(`The player has moved ${direction}`);
            resolve(direction);
        }, 1000)
    }))
}

function checkGameOver(score) {
    return new Promise((resolve) => {
        console.log("Checking game over conditions...");
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