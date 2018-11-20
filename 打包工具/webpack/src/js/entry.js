import {foo,bar} from './math';
import data from '../data/test.json';

import '../css/test.css'

document.write(foo(3) + '<br/>');
document.write(bar(3) + '<br/>');
document.write(JSON.stringify(data) + '<br/>');