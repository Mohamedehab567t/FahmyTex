import styled from "styled-components";
import { tablet , mobile  } from "../../responsive";

export const Container = styled.div`
padding:20px;
margin:10px auto;
`;

export const PromiseTitle = styled.h1`
text-align:center;
margin-top : 15px;
margin-bottom : 15px;
font-weight : bold;
`

export const Wrapper = styled.div`
width : 100%;
display grid;
grid-template-columns:repeat(3,25%);
align-items:center;
justify-content:center;
gap:15px;
margin:auto;
  ${tablet ({
    display : "grid",
    gridTemplateColumns : "repeat(2,50%)",
    gap:'20px',
    width:"90%"
  })}

  ${mobile ({
    display : "flex",
    flexDirection : "column",
    gap:'20px',
    width:"90%"
  })}
`

export const Infromation = styled.p`
font-weight : normal;
color:#3e4245;
opacity : 0;
transform:translate(0,10px);
transition: all .5s ease-in-out;
text-align:center;
`

export const CenterStat = styled.div`
margin:auto;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
transform:translate(0,30px);
transition: all .5s ease-in-out;
`

export const Item = styled.div`
padding:10px;
display:flex;
background-color:white;
box-shadow: 0 0 12px rgb(0 0 0 / 10%);
height:150px;
&:hover ${Infromation} {
    opacity : 1;
    transform:translate(0,0px);
}
&:hover ${CenterStat} {
    transform:translate(0,0px);
} 
${tablet ({
  width:"100%"
})}

${mobile ({
  width:"100%"
})}
`


export const Num = styled.p`
font-weight : bold;
color:#3b5998;
font-size:25px;
`

export const Detail = styled.p`
font-weight : normal;
color:#000000;
`
