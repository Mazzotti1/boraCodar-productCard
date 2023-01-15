import React, {useState} from "react";
import Product from "./Product";
import Text from "./Text";
import Rotate from "./Rotate";
export default function Card(props) {

  const icons = {
    img1: "./assets/images/360.png" ,
    img2: "./assets/images/X.png",
  }
  const productImgs = {
    static: "./assets/images/sofa.png",
    gif: "./assets/images/sofaGif.gif",
  }


  const [icon, setIcon] = useState('img1')

  const [productImg, setProductImg] = useState ('static')

  const handleClick = (props) => {
    setIcon(state => state === 'img1' ? 'img2': 'img1');
    setProductImg(state => state === 'static' ? 'gif': 'static');
    console.log("clicked")


  }

  return(
    <div className="bg">
      <Text> </Text>
      <Rotate handleClick={handleClick} icon={icon} icons={icons}></Rotate>
      <Product productImg={productImg} productImgs={productImgs}>   </Product>
    </div>
  )

}