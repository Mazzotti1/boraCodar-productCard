import React from "react";

export default function Product (props){



    return(
        <div>

            <img className="product" alt="produto" src={props.productImgs[props.productImg]}></img>
        </div>
    )
}