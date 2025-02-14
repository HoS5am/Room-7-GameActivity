function movePlayer(direction) {
    return new Promise((resolve) => {
        console.log(`Player will move ${direction}...`);
        setTimeout(() => {
            console.log(`Player has moved ${direction}`);
            resolve(direction);
        }, 1000);
    });
}

function calculateScore(events) {
    return new Promise((resolve) => {
        console.log("Calculating score...");
        setTimeout(() => {
            let score = events.length * 10
            console.log(`Score calculated: ${score}`);
            resolve(score);
        }, 1500);
    });
}

module.exports = { movePlayer, calculateScore };