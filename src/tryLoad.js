import createTry from "./try";
import './try.css'
const tryLoad = ()=>{
    const content = document.querySelector(".content")
    const gameboard = document.createElement("div");
    gameboard.classList.add("gameboard");

    const startCells = [
        "","","","","","","","",""
    ]

    function createBoard(){
        startCells.forEach((cell,index)=>{
            const cellElement = document.createElement("div");
            cellElement.classList.add('square');
            gameboard.append(cellElement)

        })

    }
    createBoard();
    content.appendChild(gameboard);
  
}
export default tryLoad;