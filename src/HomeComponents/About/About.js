import React from 'react';
import styled from 'styled-components';
import { tablet , mobile  } from "../../responsive";
import i18n from "../../i18n"
import { useTranslation } from 'react-i18next';

const Container = styled.div`
width:100%;
margin:10px auto;
`;

const AboutTitle = styled.h1`
text-align:center;
margin-top : 15px;
margin-bottom : 15px;
font-weight : bold;
`;

const Wrapper = styled.div`
width : 100%;
position:relative;
background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.7)) , url(${(props) => props.iurl});
background-attachment: fixed;
background-size: cover;
height : 500px;
display : flex;
`;
const InfoContainer = styled.div`
margin:auto;
padding:5px;
color:white;
width:70%;
`

const Caption = styled.h2`
text-align : center ;
font-wight:lighter;

`

const Paragraph = styled.p`
text-align : center ;
line-height:1.5;
font-size:3em;
width:70%;
margin:auto;
font-family: "Abril Fatface script=latin rev=3";
font-weight: 400;
font-style: normal;
${tablet ({
  fontSize : "20px",
  width:'100%'

})}
${mobile ({
  fontSize : "20px",
  width:'100%'
})}
`

const About = () => {
  const {t} = useTranslation()
  return <Container>
      <AboutTitle>{t("Quote")}</AboutTitle>
        <Wrapper iurl={process.env.PUBLIC_URL+"images/Mockup-stack-of-white-towels-and-houseplant-on-white-table-with-copy-space.jpg"}>
        <InfoContainer>
                    <Paragraph>
                    "{t("TheQuote")}"
                    </Paragraph>
                    <Caption>Ray Goforth</Caption>
                </InfoContainer>
        </Wrapper>
  </Container>;
};

export default About;
