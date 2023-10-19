import background from "./background";
import title from "./title";
import optionGame from "./optionGame";
import choosePlayer from "./choosePlayer";
import startGame from "./startGame";
const pageLoad = ()=>{
    title();
    // optionGame();
    // choosePlayer();
    startGame();
    background();
}
export default pageLoad;