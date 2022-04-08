import styled from "styled-components";
import { tablet , mobile } from "../../responsive";
export const AnnoucmentContainer = styled.div`
  background-color: #1f3666;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  padding:5px;
  ${mobile ({
    display : "none"
  })}
  ${tablet ({
    display : "none"
  })}
`;

export const IconsContainer = styled.div`
display:flex;
width : 40%;
justify-content: space-between;
`

export const Propyrty = styled.div`
display:flex;
align-items: center;
justify-content: center;
`
export const Span = styled.span`
color : white;
margin-left : 5px;
font-weight : 800;
`