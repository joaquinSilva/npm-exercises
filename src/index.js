"use strict";
const $ = require('jquery');
// import mode:
// import {niceMessage} from "./say-hello";
// niceMessage();

// require mode:
const niceMessage = require('./say-hello');

const sayHello = () => console.log('hello');

sayHello();

niceMessage();

$("h3").html('Have a great day!');



