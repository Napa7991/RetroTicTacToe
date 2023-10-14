const choosePlayer = ()=>{
    const content = document.querySelector('.content');
    const choosePlayerDiv = document.createElement('div');
    choosePlayerDiv.classList.add('chosePlayer');

    const div1 = document.createElement('div');
    div1.classList.add('p1inpDiv');
    const player1 = document.createElement('Label');
    player1.innerText = `Player1 : `;
    const inp1 = document.createElement('input');
    inp1.classList.add('inputField1')
    inp1.type= `text`;


    
    const div2 = document.createElement('div');
    div1.classList.add('p2inpDiv');
    const player2 = document.createElement('Label');
    player2.innerText = `Player2 : `;
    const inp2 = document.createElement('input');
    inp2.classList.add('inputField2')
    inp2.type=`text`;

    const start = document.createElement('button');
    start.classList.add('startBtn');
    start.innerText = `Start`;



    div1.appendChild(player1);
    div1.appendChild(inp1);
 
    div2.appendChild(player2);
    div2.appendChild(inp2);

    choosePlayerDiv.appendChild(div1);
    choosePlayerDiv.appendChild(div2);

    content.appendChild(choosePlayerDiv);
    content.appendChild(start);

    window.addEventListener('load',function(){

        this.document.querySelector('.inputField1').focus();

    })
}
export default choosePlayer;