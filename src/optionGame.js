const optionGame = ()=>{
    const content = document.querySelector('.content');
    const GameOption = document.createElement('div');
    GameOption.classList.add('chooseOption')
    const h2 = document.createElement('h2');
    h2.classList.add('cVp');
    h2.innerText = `Player Vs Computer`;
    const p = document.createElement('p');
    p.innerText = `Or`
    const h3 = document.createElement('h2');
    h3.classList.add(`pVp`)
    h3.innerText = `Player Vs Player`;

    GameOption.appendChild(h2);
    GameOption.appendChild(p);
    GameOption.appendChild(h3);

    content.appendChild(GameOption);
    
}
export default optionGame;