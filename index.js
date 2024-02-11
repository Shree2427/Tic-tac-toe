let playerText = document.getElementById("playerText")
let restartBtn = document.getElementById("restartBtn")
let boxes = Array.from(document.getElementsByClassName("box"))
let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winningBlocks')

let O_Text = "O";
let X_Text = "X"

let currentPlayer = X_Text;
let spaces = Array(9).fill(null)


let startGame = () => {

    boxes.forEach(box => box.addEventListener("click", boxClicked))
}

let boxClicked = (e) => {
    const id = e.target.id
    //    console.log(id)
    if (!spaces[id]) {
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;

        if (playerHasWon() !== false) {
            playerText.innerText = `${currentPlayer} has Won`;
            let winning_blocks = playerHasWon();

            winning_blocks.map(box => boxes[box].style.backgroundColor = winnerIndicator)
            return




        }
        currentPlayer = currentPlayer == X_Text ? O_Text : X_Text;
    }
}

let winning_combos = [

    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

]

let playerHasWon = () => {

    for (let condition of winning_combos) {
        let [a, b, c] = condition
        if (spaces[a] && spaces[a] == spaces[b] && spaces[a] == spaces[c]) {

            return [a, b, c]

        }

    }
    return false
}

let reStart = () => {

    spaces.fill(null)
    boxes.forEach(box => {
        box.innerText = "";
        box.style.backgroundColor = "";
    })
    playerText.innerText == "Tic Toc Toe";
    currentPlayer = X_Text;

}

restartBtn.addEventListener("click", reStart);
startGame()