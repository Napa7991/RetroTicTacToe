import img from './Img.jpg';
import './style.css'

const background = ()=>{
    const content = document.querySelector('.content');
      // for image
     const myImage = new Image();
     myImage.src = img;
     myImage.height= '400';
     myImage.width = '400';

      content.appendChild(myImage);

}
export default background;