import _ from 'lodash';
import printMe from './print.js';

function component(){
    var element = document.createElement('div');
    var btn = document.createElement('button');
    element.innerHTML = _.join(['foo','baz','bar', 'this is like magic'],' ');
    return element;
}

document.body.appendChild(component());

document.getElementById("myapp").innerHTML = "what's up robby?";