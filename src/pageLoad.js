import "./style.css"
import GameImage from "./GameImage.jpg";
import HomePage from "./HomeaPage";
const pageLoad = ()=>{
    const container = document.querySelector(".container");
    container.classList.add('container');
    const img = new Image();
    img.classList.add('gameImage')
    img.src = GameImage;
    container.appendChild(img);
    container.appendChild(HomePage())




   
}
export default pageLoad;