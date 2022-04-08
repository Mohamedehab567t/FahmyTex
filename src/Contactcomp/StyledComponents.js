import styled from "styled-components";
import { tablet , mobile  } from "../responsive";


export const Container = styled.div`
width:90%;
margin:10px auto;
${tablet ({
  width:'100%'

})}
${mobile ({
  width:'100%'
})}
`;

export const ContactTitle = styled.h1`
text-align:center;
margin-top : 15px;
margin-bottom : 15px;
font-weight : bold;
`;

export const Wrapper = styled.div`
width : 100%;
padding-top : 15px;
display:flex;
flex-direction:column;
`;

export const SendCOntainer = styled.div`
flex:1;
display : flex;
flex-wrap:wrap;
height:100%;
border-rigth:.5px gray solid;
gap:10px;
width:60%;
margin : 5px auto;
padding: 15px;
${tablet ({
  width:'100%'

})}
${mobile ({
  width:'100%'
})}
`
;



export const Form = styled.form`
width:100%;
`

export const Row = styled.div`
display:flex;
justify-content:space-around;
align-items:center;
margin-bottom:19px;
gap:10px;
`

export const Input = styled.input`
width : ${props => props.width};
padding: 15px;
border : black 1px solid;
`
export const TextArea = styled.textarea`
  width:100%;
  padding: 15px;
border : black 1px solid;
  resize:none;
`;

export const WhyCOntainer = styled.div`
flex : 1;
display:flex;
`;

export const InsideWhy = styled.div`
margin : auto;
width:fit-content;
padding:15px;
`;

export const SectionTitle = styled.h1`
text-align:center;
font-size:40px;
`;

export const List = styled.ul`
display : flex;
flex-direction:column;
align-items:start;
justify-content:space-around;
`;

export const ListItem = styled.li`
font-size:20px;
font-weight:700;
margin-bottom:5px;
`;

export const Span = styled.span`
margin-left:5px;
color:orange;
font-weight:900;
font-size:20px;
`


export const ButtonConatiner = styled.div`
display:flex;
padding : 10px;
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
margin:auto;
&:hover{
    background-color:black;
    color:white;
}
`;
