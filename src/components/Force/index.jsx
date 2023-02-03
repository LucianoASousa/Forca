import Img1 from "../../assets/Init.png";
import Img2 from "../../assets/One-Erro.png";
import Img3 from "../../assets/Two-Erro.png";
import Img4 from "../../assets/Three-Erro.png";
import Img5 from "../../assets/Four-Erro.png";
import Img6 from "../../assets/Five-Erro.png";
import Img7 from "../../assets/Six-Erro.png";
import { useContext } from "react";
import { wordContext } from "../../context/context";


import { ForceContainer } from "./style";
 
function Force(){
  const imgs = [Img1, Img2, Img3, Img4, Img5, Img6, Img7]

  const { lives } = useContext(wordContext);

  return(
    <ForceContainer>
  <img src={imgs[6 - lives] ?? imgs[0]} alt="Forca"/>
    </ForceContainer>
  )
}

export default Force