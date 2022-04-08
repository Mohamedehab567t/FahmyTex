import styled from "styled-components";
import { tablet , mobile  } from "../../responsive";

export const Container = styled.div`
height : calc(100vh - ${props => props.number});
${tablet ({
    height : "fit-content",
  
  })}
  ${mobile ({
    height : "fit-content",
  })}
`

export const Wrapper = styled.div`
width:100%;
height:100%;
background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)) , url(${(props) => props.iurl});
display:flex;
background-repeat:no-repeat;
background-size:cover;
background-position: center;
`


export const InfoContainer = styled.div`
margin:auto;
padding:5px;
color:white;
`

export const Title = styled.h2`
text-align : center ;
`

export const Paragraph = styled.p`
text-align : center ;
line-height:1.5;
font-size:25px;
width:40%;
margin:auto;
${tablet ({
    fontSize : "20px",
    width:'100%'
  
  })}
  ${mobile ({
    fontSize : "20px",
    width:'100%'
  })}
`