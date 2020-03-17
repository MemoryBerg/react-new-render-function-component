import React, { useState } from "react";
import StartButton from "./start-button";
import DomElement from "./dom-element";

let array = [];
let startTime;
let endTime;

const RenderDom = (props) => {

    const [rendering, setRendering] = useState(false);
    const onStartRender = () => {
        return setRendering(true);
    };

    let btn =<StartButton
        onStart={onStartRender}/>;
    let totalElsCount = 100000;
    if (rendering) {
        for (let i = 0; i < totalElsCount; i++) {
            array.push(<DomElement
                rendering={rendering}/>);
            if (i === 0) {
                startTime = new Date().getTime();
                 console.log('I am startTime ' + startTime);
            } else if (i === totalElsCount - 1) {
                endTime = new Date().getTime();
                 console.log('I am endTime ' + endTime);
            }

             console.log('I am rendering state ' + rendering)
        }
        return (
            <div>
                {btn}
                {array}
                {console.log('Total time is ' + (endTime - startTime) + 'ms')}
            </div>
        )

    } else {
        return (
            <div>
                {btn}
                <h2>{'Please press Start'}</h2>
            </div>
        )
    }
    // return (
    //     <div>
    //         {btn}
    //         <DomElement/>
    //     </div>
    // );

};

export default RenderDom
