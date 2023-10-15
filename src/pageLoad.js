import background from "./background";
import title from "./title";
import optionGame from "./optionGame";
import choosePlayer from "./choosePlayer";
import gameStart from "./gameStart";
const pageLoad = ()=>{
    title();
    // optionGame();\
    // choosePlayer();
    gameStart();
    background();
}
export default pageLoad;