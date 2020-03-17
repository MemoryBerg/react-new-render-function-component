import React from "react";

let array = [
    <div>div</div>,
    <p>p</p>,
    <h3>h3</h3>,
    <h2>h2</h2>,
    <span>span</span>,
];
let element;

const DomElement = (props) => {
    const newElement = () => {
        element = array[Math.floor(Math.random() * array.length)];
    };
    newElement();

    return element;
};

export default DomElement
