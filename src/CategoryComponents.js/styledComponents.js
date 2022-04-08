import styled from "styled-components";
import { tablet , mobile , laptop } from "../responsive";

export const Container = styled.div`
padding:20px;
margin:10px auto;
`
export const CategoryTitle = styled.div`
width:70%;
margin: 15px auto;
background-image :linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)) , url(${props => props.src});
height: fit-content;
display:flex;
padding:15px;
`

export const Title = styled.p`
margin:auto;
font-weight:700;
font-size:40px;
color:white;
`

export const Wrapper = styled.div`
width:100%;
min-height : 50vh;
display:flex;
${laptop ({
  flexDirection:'column'

})}
${tablet ({
    flexDirection:'column'
  
  })}
  ${mobile ({
    flexDirection:'column'
  })}
`

export const Filter = styled.div`
flex : 1;
height:fit-content;
padding:10px;
border : rgba(179,179,179,1) 0.5px solid;
`
export const FilterTitle = styled.h3`
margin : 10px 10px;
font-weight:700;

`
export const Products = styled.div`
flex : 5;
height:100%;
`

