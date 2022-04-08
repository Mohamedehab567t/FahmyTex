import React , {useState} from 'react'
import styled from 'styled-components';
import { ArrowLeft , FileCopy , FavoriteBorderOutlined , HelpOutline} from '@material-ui/icons';
import { tablet , mobile , laptop } from "../responsive";
import i18n from "../i18n"
import { useTranslation } from 'react-i18next';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const Container = styled.div`
width:100%;
overflow:hidden;
${laptop ({
  marginBottom : "100px",

})}
`;

const Wrapper = styled.div`
  display: flex;
  ${tablet ({
    flexDirection : "column",
  
  })}
  ${mobile ({
    flexDirection : "column",
  })}
`;

const ImgsContainer = styled.div`
  flex: 1;
  display:flex;
  flex-direction:column;
`;
const InfoContainer = styled.div`
  flex: 1;
  ${tablet ({
    marginBottom : "100px",
  
  })}
  ${mobile ({
    marginBottom : "100px",
  })}
`;


const ImgContainer = styled.div`
padding:20px;
background-color:#e3e3e3;
position:relative;
overflow:hidden;
flex : 5;
`

const ImgSliderContainer = styled.div`
padding:20px;
background-color:#e3e3e3;
position:relative;
overflow:hidden;
width:1000px;
${tablet ({
  width : "unset",
  flex : "5"

})}
${mobile ({
  width : "unset",
  flex : "5"
})}
`

const SliderContainer = styled.div`
flex:1;
padding:5px;
overflow-x:auto;
overflow-y:hidden;
display:grid;
grid-template-columns:repeat(${props => props.len},${props => props.per}%);
gap:10px;
background-color:${props => props.bg};
&::-webkit-scrollbar {
    -webkit-appearance: none;
    width: 15px;
    height: 15px;
 }
`

const Image = styled.img`
  width: 100%;
  object-fit: cover;
  margin:auto;
`;

const ImageSlide = styled.img`
  width: 50%;
  margin:auto;
  object-fit: cover;
  cursor:pointer;
  transition:all .5s ease-int-out;
`;

const SliderItem = styled.div`
display:flex;
&:hover ${ImageSlide}{
    tranform:translate(0,10px);
}
`

const GoBackLink = styled.a`
display:flex;
width:100%;
text-decoration:none;
color:#000B49;
font-weight:bold;
align-items:center;
cursor:pointer;
`
const GoBack = styled.div`
width:100%;
padding:5px;
margin-bottom:8px;
`
const Details = styled.div`
width:100%;
padding:15px;
display:flex;
flex-direction:column;
gap:-10px;
`

const Material = styled.small`
display:block;
color:#9d9d9d;
`
const Weight = styled.h2`
color:navy;
font-weight:bold;
margin:0;
`

const DescriptionDiv = styled.div`
padding:15px;
width:50%;
${tablet ({
  width : "100%",

})}
${mobile ({
  width : "100%",
})}
`

const Description = styled.p`
color:#9d9d9d;
margin-left:5px;

`
const OperationDiv = styled.div`
display:flex;
`

const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
transition: all 0.5s ease;
cursor:pointer;
&:hover {
  background-color: #e9f5f5;
  transform: scale(1.1);
}
`;


const ColorDiv = styled.div`
position:fixed;
bottom:10px;
width:70%;
box-shadow: 10px 10px 19px 0px rgba(217,217,217,1);
margin:auto;
height:80px;
padding:5px;
left: 0;
right: 0;
background-color:white;
display:flex;
${tablet ({
  width : "100%",

})}
${mobile ({
  width : "100%",
})}
`

const ColorItemDiv = styled.div`
width:50px;
height:50px;
padding:5px;
display:flex;
margin:auto;
`
const ColorItemCircle = styled.div`
border-radius : 50%;
margin:auto;
width:100%;
height:100%;
padding:2px;
border : .5px solid black;
`

const ColorItem = styled.div`
border-radius : 50%;
margin:auto;
width:100%;
height:100%;
cursor:pointer;
display: flex;
justify-content: center;
align-items: center;
overflow: hidden
`

const ColorImage = styled.img`
flex-shrink: 0;
min-width: 100%;
min-height: 100%`

const ProductContainer = ({ item }) => {
    const {t} = useTranslation() 
    const lang = localStorage.getItem("i18nextLng");
    const [CurrentImage , setCurrentImage] = useState("data:;base64,"+item.img)
    const [CurrentIndex , setCurrentIndex] = useState(0)
  const Slide = (dir) => {
    if(dir == "left"){
      if(CurrentIndex >= 0){
          if(CurrentIndex == item.ci.length){
            setCurrentIndex(prevCurrentIndex => prevCurrentIndex - 2)
          }else{
            setCurrentIndex(prevCurrentIndex => prevCurrentIndex - 1)
          }
          setCurrentImage("data:;base64,"+item.ci[CurrentIndex].image)
      }
    }else{
      if(CurrentIndex <= (item.ci.length-1)){
        setCurrentIndex(prevCurrentIndex => prevCurrentIndex + 1)
        setCurrentImage("data:;base64,"+item.ci[CurrentIndex].image )
    }
    }
  }
    const showPic = (e) => {
        setCurrentImage(e.target.src)
    }
    const Wurl = `https://api.whatsapp.com/send/?phone=201550999778&text=Question about this product ${window.location.href}&app_absent=0`
    const copy = () => {
        const el = document.createElement('input');
        el.value = window.location.href;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
      }
      var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows : false
      };
    return (
        <Container>
            <Wrapper>
        <ImgsContainer>
        <ImgSliderContainer >
        <Slider {...settings}>
          {item.ci.map(item => {
            return(
              <Image src={"data:;base64,"+item.image} />
            )
          })}
        </Slider> 
        </ImgSliderContainer>
        </ImgsContainer>
        <InfoContainer>
            <GoBack>
                <GoBackLink>
                    <ArrowLeft
                        style={{"fontSize" : "40px" , "marginRight" : "15px;" , "order" : lang == 'ar' ? "2" : "1"}}
                    />
                   <a href={'/category?key=weight&value='+item.weight+"&order=1"} style={{"order" : lang == 'ar' ? "1" : "2"}}> {t("Go back to")} {t(item.weight+"!")} </a>
                </GoBackLink>
            </GoBack>
            <Details>
                <Material>{t(item.material)}</Material>
                <Weight>{t(item.weight+"!")}</Weight>
            </Details>
            <DescriptionDiv>
                {t("Product size description")} :
                    <Description>{item.description}</Description>
            </DescriptionDiv>
            <DescriptionDiv>
                {t("Product type")} :
                <Weight>{item.type}</Weight>
            </DescriptionDiv>
            <DescriptionDiv>
                {t("Product size")} :
                <Weight>{item.size}</Weight>
            </DescriptionDiv>
            <DescriptionDiv>
                {t("Product operation")} :
                <OperationDiv>
                    <Icon onClick={() => copy()}>
                        <FileCopy style={{"fontSize" : "18px"}} />
                    </Icon>
                    <Icon>
                        <a href={Wurl} target="_blank" style={{"textDecoration" : "none" , "color" : "black"}}>
                        <HelpOutline style={{"fontSize" : "18px"}} />
                        </a>
                    </Icon>
                </OperationDiv>
            </DescriptionDiv>
        </InfoContainer>
        <ColorDiv>
        <SliderContainer bg="transparent" len={item.ci.length} per="10" style={{"margin" : "auto"}}>
        {item.ci.map( item => {
                return <SliderItem key={item.index}>
                            <ColorItemDiv>  

                            <ColorItemCircle>

                            <ColorItem>
                                <ColorImage src={"data:;base64,"+item.image} data-id={item.index} onClick={showPic}/>
                            </ColorItem>

                            </ColorItemCircle>

                            </ColorItemDiv>  
            </SliderItem>
         } )}

        </SliderContainer>
        </ColorDiv>
      </Wrapper>
        </Container>
    )
};

export default ProductContainer;
