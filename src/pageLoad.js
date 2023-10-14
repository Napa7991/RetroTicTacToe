import background from "./background";
import title from "./title";
import optionGame from "./optionGame";
import choosePlayer from "./choosePlayer";
const pageLoad = ()=>{
    title();
    // optionGame();\
    choosePlayer();
    background();
}
export default pageLoad;