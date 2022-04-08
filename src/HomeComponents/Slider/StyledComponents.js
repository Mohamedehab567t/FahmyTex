import styled, { keyframes } from "styled-components";
import { tablet , mobile , laptop } from "../../responsive";


export const Container = styled.div`
width 100%;
margin:auto;
`
export const PhaseContainer = styled.div`
display : flex;
align-items:center;
justify-content:center;
flex-direction : column;
padding:8px;
transition: all .7s ease-in-out;
${laptop ({
  width : "80%",
  textAlign : "center"

})}
${tablet ({
  width : "80%",
  textAlign : "center"

})}
${mobile ({
  width : "80%",
  textAlign : "center"
})}
`

export const SliderContainer = styled.div`
width: 100%;
height: 100vh;
padding-bottom:10px;
position: relative;
overflow: hidden;
background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)) , url(${(props) => props.iurl});
background-size: cover;
&:hover ${PhaseContainer}{
  transform:scale(1.06)
}
${tablet ({
  backgroundSize : "100% 100%",
  backgroundRepeat:"no-repeat"

})}
${mobile ({
  backgroundSize : "100% 100",
  backgroundRepeat:"no-repeat"
})}
`;
export const Wrapper = styled.div`
width:100%;
height:100%;
display : flex;
align-items:center;
justify-content:center;
`



export const Phase = styled.p`
font-size:65px;
color:white;
font-weight:700;
${laptop ({
  fontSize : "40px",

})}
${tablet ({
  fontSize : "20px",

})}
${mobile ({
  fontSize : "20px",
})}
`

export const Button = styled.button`
background-color:transparent;
border: white 0.5px solid;
padding : 10px;
border-radius : 0px;
color:white;
font-size:20px;
transition : all .4s ease-in-out;
cursor : pointer;
&:hover{
    background-color:white;
    color:black;
    border-radius : 10px;
}
`

export const Arrow = styled.div`
width:50px;
height:50px;
border-radius : 50%;
display:flex;
align-items:center;
justify-content:center;
position:absolute;
top :0;
bottom:0;
margin:auto;
left : ${props => props.dir === "left" ? "10px" : 'unset'};
right : ${props => props.dir === "right" ? "10px" : 'unset'};
cursor:pointer;
opacity:0.5;
z-index:2;
&:before{
    font-size: 30px;
}
`