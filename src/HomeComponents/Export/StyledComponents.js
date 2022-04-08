import styled , {keyframes} from "styled-components";
import { tablet , mobile  } from "../../responsive";

export const Container = styled.div`
padding:20px;
margin:10px auto;
${mobile ({
  padding:'0px'
})}
`;

const Fadeinout = keyframes`
  0% {
    opacity : 0;
    transform : scale(0)
  }

  50% {
    opacity : 1;
    transform : scale(1)
  }
  100% {
    opacity : 0;
    transform : scale(0)
  }
`;

export const Flag = styled.p`
font-size:100px;
transition: all .4s ease-in-out;
opacity : 0;
transform : scale(0)
`

export const ItemContainer = styled.div`
background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)) , url(${(props) => props.iurl});
height:40vh;
display : flex;
align-items:center;
justify-content: center;
background-size:cover;
position:relative;
&:hover ${Flag} {
    animation : ${Fadeinout} 1s ease;
}
${mobile ({
  height:'100vh'
})}
`
export const Title = styled.p`
color:white;
font-weight:800;
font-size:50px;
`

export const ExportTitle = styled.h1`
text-align:center;
margin-top : 15px;
margin-bottom : 15px;
font-weight : bold;
`

export const FlagContainer = styled.div`
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
display:flex;
align-items:center;
justify-content:center;
`



