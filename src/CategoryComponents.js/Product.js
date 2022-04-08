  import styled from "styled-components";
  import { useNavigate} from "react-router-dom"; 
  import { tablet , mobile  } from "../responsive";
  import { useEffect, useState } from "react";
import { API } from "../data";
import axios from "axios";
import i18n from "../i18n"
import { useTranslation } from 'react-i18next';

  const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
    ${tablet ({
      opacity : "1",
    
    })}
    ${mobile ({
      opacity : "1",
    })}
  `;

const Information = styled.div`
width :100%;
text-align:center;
opacity 0 ;
transform:translate(0,-10px);
transition : all .5s ease-in-out;
${tablet ({
  opacity : "1",

})}
${mobile ({
  opacity : "1",
})}
`

  const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
    &:hover ${Info}{
      opacity: 1;
    }
    &:hover ${Information}{
      opacity: 1;
      transform:translate(0,0px);
    }
  `;
  
  const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
  `;
  
  const Image = styled.img`
    width: 100%;
    z-index: 2;
  `;
  


const InfoText = styled.p`
color:white;
margin-bottom:5px;
font-size:20px;
font-weight:700;
`

const Button = styled.button`
background-color:transparent;
border: black 0.5px solid;
padding : 10px;
border-radius : 0px;
color:white;
font-size:20px;
transition : all .4s ease-in-out;
`;
  
const getMyImg = async id => {
  const res = await axios.get(API+"/img",{
    params : {
      id : id
    },
    headers:{
      "If-None-Match" : "jkolid125365djmcnhd895452"
    }
  })
  return res.data
}

  const Product = ({ item , color }) => {
    const {t} = useTranslation()
    let navigate = useNavigate();
    let [CurrentImage , setCurrentImage] = useState("https://i.ibb.co/M16MV8z/65ba488626025cff82f091336fbf94bb.gif")
    let imgToApper = ''
    if(color != ''){
      item.ci.forEach(e => {
        if (e['color'] == color || e['color'] == color.toUpperCase() || e['color'] == color.toLowerCase() || e['color'].includes(color)){
          imgToApper = e.image
        }
      })
    }
    useEffect(() => {
      getMyImg(item._id).then(pay => {
        setCurrentImage("data:;base64,"+pay.img)
      })
    },[])
    return (
      <Container onClick={() => navigate("/product/"+item._id)}>
        <Circle />
        <Image src={imgToApper == '' ? CurrentImage : "data:;base64,"+imgToApper} />
        <Info>
          <Information>
            {window.screen.width > 1080 ? <><InfoText>{item.category}</InfoText>
              <InfoText>{item.type}</InfoText>
              <InfoText>{item.size}</InfoText></> : <div style={{"display" : "flex" , "flexDirection" : "column" , "padding" : "50px" , "margin" : "auto" , "justifyContent" : "center"}}>
              <Button>{t("Click Here")}</Button>
              <InfoText style={{"marginTop" : "5px"}}>{item.size}</InfoText>
              </div> }

          </Information>
        </Info>
      </Container>
    );
  };
  
  export default Product;