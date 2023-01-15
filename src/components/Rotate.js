import React from "react";

export default function Rotate(props) {

    return(
        <div>
            <img  id="rotateButton" src={props.icons[props.icon]}  alt="imagem" onClick={props.handleClick}></img>
        </div>
    )

}