import './style.css';
import GameImage from './GameImage.jpg';

const HomePage = () => {
    const container = document.querySelector(".container");
    const h1 = document.createElement('h1');
    h1.classList.add('head1')
    h1.innerText = `Welocme`;
    container.appendChild(h1);


}
export default HomePage;