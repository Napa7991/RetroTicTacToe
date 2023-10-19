import './style.css';
const startGame = ()=>{
    const content = document.querySelector('.content');

    // creating array for storing element

    const elements=[
        "","","","","","","","",""
    ]
    const gameboard = document.createElement('div');
    gameboard.classList.add('gameboard');

    // iterating each loop and giving it a class gameboard;
    elements.forEach((data,index)=>{
        const cellElement = document.createElement('div');
        cellElement.classList.add('square');
        gameboard.append(cellElement);

    })

    content.appendChild(gameboard);

    gameboard.style.border = 'none';



    
}
export default startGame;