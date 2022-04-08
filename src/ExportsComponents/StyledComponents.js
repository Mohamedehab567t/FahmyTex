import styled from "styled-components";
import { tablet , mobile  } from "../responsive";

export const Container = styled.div`
width:90%;
margin:10px auto;
`;

export const World = styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
height:100%;
`

export const Image = styled.img`
width:250px;
`;

export const Title = styled.h1`
`;

export const Wrapper = styled.div`
display : grid;
grid-template-columns : repeat(4 , 25%);
gap:5px;
width:100;
${tablet ({
    gridTemplateColumns : "repeat(1 , 100%)",
    justifyItems : "center"
  
  })}
  ${mobile ({
    gridTemplateColumns : "repeat(1 , 100%)",
    justifyItems : "center"
  })}
`
export const CountrySpan = styled.span`font-size:150px; transition : all .5s ease-in-out;`

export const CountryName = styled.h3`margin-top:28px;`

export const Country = styled.div`
padding:8px;
border : gray .5px solid; 
width: fit-content;
display : flex;
flex-direction:column;
align-items:center;
justify-content:center;
&: hover ${CountrySpan}{
    transform : scale(1.05)
}
`;

