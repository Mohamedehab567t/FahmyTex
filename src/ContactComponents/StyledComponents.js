import styled from "styled-components";
import { tablet , mobile  } from "../responsive";

export const Container = styled.div`
padding:20px;
margin:10px auto;
`

export const ContainerTitle = styled.h2`
margin : 10px auto;
text-align:center;
`

export const Wrapper = styled.div`
width:100%;
display:flex;
flex-direction:column;
`

export const NumAdd = styled.div`
width:50%;
padding:10px;
margin:auto;
border : 1px black solid;
background-color:#00303F;
color:white;
${tablet ({
  width : "100%",

})}
${mobile ({
  width : "100%",
})}
`
export const NumAddTitle = styled.h2`
margin : 10px 5px;
text-align:${props => props.dir};
`

export const NumAddWrapper = styled.div`
display:flex;
`

export const Numbers = styled.div`
flex : 1;
display : flex;
flex-wrap:wrap;
margin-left:5px;
`

export const Number = styled.p`
margin:5px;
`


export const Address = styled.div`
flex:1;
`

export const AdressParagraph = styled.p`
text-align:center;
`

export const LogoLocation = styled.div`
flex:1;
display:flex;
align-items:center;
justify-content:center;
${tablet ({
  display : "none",

})}
${mobile ({
  display : "none",
})}
`
export const Logo = styled.span`
font-size:10vw;
`

export const Splitter = styled.div`
display : flex;
padding:20px;
width: 60%;
margin:15px auto;
gap:20px;
${tablet ({
  flexDirection : "column",
  hight:"fit-content",
  width : "100%"

})}
${mobile ({
  flexDirection : "column",
  hight:"fit-content",
  width : "100%"

})}
`

export const SocialMedia = styled.div`
flex:1;
display : flex;
flex-wrap:wrap;
height:100%;
border-rigth:.5px gray solid;
gap:10px;
`

export const form = styled.form`
width:100%;
`

export const rowInput = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
margin-bottom:19px;
gap:10px;
`

export const input = styled.input`
width : ${props => props.width};
padding: 15px;
border : black 1px solid;
`

export const ImageContainer = styled.div`
flex:1;
align-items:center;
justify-content:center;
height:100%;
`

export const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`;
export const TextArea = styled.textarea`
  width:100%;
  padding: 15px;
border : black 1px solid;
  resize:none;
`;

export const Button = styled.button`
background-color:transparent;
border: black 0.5px solid;
padding : 10px;
border-radius : 0px;
color:black;
font-size:20px;
transition : all .4s ease-in-out;
cursor : pointer;
&:hover{
    background-color:black;
    color:white;
}
`;
export const SocialMediaDiv = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
gap:10px;
width:100%;
`

export const IconMedia = styled.a`
font-size:40px;
text-decoration:none;
cursor:pointer;
color : ${props => props.color};
transition: all .5s ease-in-out;
&:hover{
    color : ${props => props.color};
    transform:scale(1.1);
}
`