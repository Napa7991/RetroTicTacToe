import "./style.css";
const gameStart = ()=>{
    const content = document.querySelector('.content');
    const gameStartDiv = document.createElement('div');
    gameStartDiv.classList.add('startContainer');

    const playerTurn = document.createElement('div');
    playerTurn.classList.add('playerTurn');
    playerTurn.innerText= `player 1 turn`

   
    gameStartDiv.appendChild(playerTurn)
    content.appendChild(gameStartDiv);
}
export default gameStart;