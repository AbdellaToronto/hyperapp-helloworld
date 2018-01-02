import { app, h } from 'hyperapp';
import { HelloWorld } from './helloWorld';

app({}, {}, () => <HelloWorld name='Della'/>, document.body);