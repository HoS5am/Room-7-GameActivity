# JavaScript Game Simulation 🎮

This project is a JavaScript-based game simulation that demonstrates asynchronous operations using **Promises**. The game includes functionalities for initializing the game, handling player movement, calculating scores, and checking game-over conditions.

## 🚀 Features
- 🎮 **Game Initialization**: Sets up the game environment asynchronously.
- 🏃 **Player Movement**: Moves the player in different directions.
- 🏆 **Score Calculation**: Computes the player's score based on game events.
- ⚠️ **Game Over Check**: Determines whether the game should end based on predefined conditions.

## 🛠 Technologies Used
- ✅ JavaScript (ES6+)
- ✅ Node.js (for modularity and testing)
- ✅ Git for version control

## 📂 Project Structure
```
├── initGame.js       # Contains game initialization and game-over functions
├── move_player.js         # Handles player movement and score calculation
├── game.js           # Orchestrates execution of all game functionalities
├── README.md         # Project documentation
```

## 📥 Installation and Setup
1. 📥 Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd <repo-name>
   ```
2. ⚙️ Install dependencies (if any):
   ```sh
   npm install
   ```
3. ▶️ Run the game simulation:
   ```sh
   node main.js
   ```

## 🌿 Branching Strategy
- `feature/init_game`: Implements `initializeGame()` and `checkGameOver()`.
- `feature/move_player`: Implements `movePlayer()` and `calculateScore()`.

## 📝 Example Usage
```javascript
const { initializeGame, checkGameOver } = require("./initGame");
const { movePlayer, calculateScore } = require("./move_player");

initializeGame()
    .then(() => movePlayer("right"))
    .then(() => movePlayer("up"))
    .then(() => calculateScore(["jump", "hit", "collect"]))
    .then(score => checkGameOver(score))
    .then(result => console.log(`Final Status: ${result}`))
    .catch(error => console.error(error));
```

## 🤝 Contributing
- 🔄 **Fork** the repository.
- 🌱 **Create a feature branch** (`git checkout -b feature-branch`).
- 💾 **Commit changes** (`git commit -m "Added new feature"`).
- 📤 **Push to the branch** (`git push origin feature-branch`).
- 🔁 **Open a pull request**.

## 📜 License
This project is licensed under the **MIT License**.

