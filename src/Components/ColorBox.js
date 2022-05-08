import React, { Fragment, useState } from "react";

const ColorBox = ({color}) => {
    const [currTheme, setCurrTheme] = useState("white");

    return (
        <div 
        className={`color-box color-${color}`} >
        </div>
    );
}

export default ColorBox;