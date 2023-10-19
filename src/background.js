import img from './Img.jpg';
import './style.css'

const background = ()=>{
    const content = document.querySelector('.content');
      // for image
     const myImage = new Image();
     myImage.src = img;
     myImage.height= '500';
     myImage.width = '500';

      content.appendChild(myImage);

}
export default background;