const title = ()=>{
    const content = document.querySelector('.content');

    const titleDiv = document.createElement("div");
    titleDiv.classList.add('title');
    const h1 = document.createElement("h1");
    h1.innerText = `Tic-Tac-Toe`;
    
    titleDiv.appendChild(h1);
    content.appendChild(titleDiv);
}
export default title;