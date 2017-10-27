import _ from 'lodash';
import './style.css';
import img from './img.png';
import Data from './index.json';

function component(){
    var element = document.createElement('div');
    var myImg = new Image();
    myImg.src = img;

    element.innerHTML = _.join(['Hello','webpack','NEW'],' ');
    element.classList.add('hello');
    element.appendChild(myImg);
    
    console.log(Data);

    return element;
}

document.body.appendChild(component());