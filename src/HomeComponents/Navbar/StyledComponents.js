import styled from "styled-components";
import { tablet , mobile , laptop } from "../../responsive";


export const MenuDivToShow = styled.div`
position:fixed;
width:100%;
height:${props => props.h};
visibility:${props => props.v};
background-color : black;
z-index:999;
bottom:0;
transition : all .8s ease-in-out;
box-shadow: -1px 7px 19px 0px rgba(168,168,168,1);
`

export const Container = styled.div`
    height : 140px;;
    display : flex;
    align-items: center;
    justify-content : center;
    background-color: ${props => props.bg};
    top : ${props => props.top} ;
    position: ${props => props.position};
    z-index: 100;
    width: 100%;
    transition: all .4s ease-in-out;
    ${mobile ({
      display:"block",
      height:"120px",
      width:"100vw"
    })}
    
    ${tablet ({
      display:"block",
      height:"120px"
    })}
`

export const Wrapper = styled.div`
    padding : 10px 20px;
    width : 80%;
    display : flex;
    align-items: center;
    justify-content : space-between;
    heigth : 100%;
    ${mobile ({
      width:"100%"
    })}
    
    ${tablet ({
      width:"100%"
    })}
`

export const LogoContainer = styled.div`
display : flex;
align-items: center;
justify-content : center;
`
export const ImageUrl = styled.a`
display : flex;
align-items: center;
justify-content : center;

`
export const Image = styled.img`
width 140px;
${mobile ({
  width:"100px"
})}

${tablet ({
  width:"100px"
})}
`

export const Left   = styled.div`flex:1;  align-items: center; display:flex;`

export const Center = styled.div`
flex:3; 
display:flex;
text-align:center;
align-items: center;
flex-direction : column;
padding:8px;
${mobile ({
  display : "none"
})}
${tablet ({
  display : "none"
})}
`
export const SearchContainer = styled.form`
border: 0.5px solid white;
background-color:white;
display: flex;
align-items: center;
width:fit-content;
padding:8px;
border-radius:15px;
margin-bottom:20px;
width:100%;
`;

export const Input = styled.input`
  border: none;
  outline : none;
  width:100%;
  font-weight:700;
`;

export const UrlContainer = styled.div`
display: flex;
align-items: center;
justify-content : space-between;
width : 100%;
gap : "15px";
${mobile ({
  flexDirection : "column",
  gap : "14px",
  padding:"5px"
})}

${tablet ({
  flexDirection : "column",
  gap : "14px",
  padding:"5px"
})}
`
export const Url = styled.div`
text-decoration:none;
color:white;
font-weight:600;
opacity : 1;
transition : all 0.4s ease-in-out;
position:relative;
transform-style: preserve-3d;
cursor:pointer;
&:hover {
transform : translate(0px , 10px);
${mobile ({
  color : "black",
})}

${tablet ({
  color : "black",
})}
}
`

export const MenuDiv = styled.div`
display:none;
color:${props => props.color};
${mobile ({
  display : "block"
})}
${tablet ({
  display : "block"
})}
`
export const Right  = styled.div`
flex:1;
display : flex;
justify-content: flex-end;
${mobile ({
  flexDirection : "column",
  alignItems:"flex-end"
})}
${tablet ({
  flexDirection : "column",
  alignItems:"flex-end"
})}
`
export const WhatsappDiv = styled.a`
position : fixed; 
bottom : 5px;
left : 10px; 
width : 50px;
height : 50px;
color : #25d366;
z-index:2000
`

export const LangDiv = styled.a`
position : fixed; 
bottom : 20px;
left : 10px; 
width : 50px;
height : 50px;
backgroun-color:white;
color : black;
z-index:2000
`