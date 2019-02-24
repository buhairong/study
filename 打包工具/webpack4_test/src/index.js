import _ from 'lodash';
import './css/index.css';

function createDomElement() {
    let dom = document.createElement('div');
    dom.innerHTML = _.join(['aicoder', '.com', ' wow'], '');
    dom.className = 'box';
    return dom;
}

document.body.appendChild(createDomElement());