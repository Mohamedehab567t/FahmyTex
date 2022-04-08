import React from 'react'
import styled from 'styled-components'
import { Room , Phone , MailOutline} from '@material-ui/icons';
import {FooterContiner , FooterLeft , FooterCenter ,  FooterLeftS ,FooterRight} from '../../all-styled'
import { Link } from 'react-router-dom'
import { tablet , mobile , laptop } from "../../responsive";
import i18n from "../../i18n"
import { useTranslation } from 'react-i18next';



const Title = styled.h3`
  margin-bottom: 30px;
`;

const ImageUrl = styled.a`
display : flex;
align-items: center;
justify-content : center;

`
const Image = styled.img`
width 190px;
${mobile ({
  display:"none"
})}

${tablet ({
  display:"none"
})}
`

const ImageIso = styled.img`
width 190px;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;


const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;


const Footer = (props) => {
  const {t} = useTranslation()
    return (
        <FooterContiner>
            <FooterLeft>
            <ImageUrl href='#'>
                        <Image src={process.env.PUBLIC_URL+"images/ed45d05c-5032-484f-a139-78fba10b8d1f-removebg-preview-1.png"}/>
              </ImageUrl>
            </FooterLeft>
            <FooterCenter>
            <Title>{t("Useful Links")}</Title>
        <List>
            <ListItem> <Link to="/" style={{color:'white' , textDecoration : 'none'}}>{t("Navbar.Home")}</Link> </ListItem>
            <ListItem> <Link to="/about" style={{color:'white' , textDecoration : 'none'}}>{t("Navbar.About")}</Link> </ListItem>
            <ListItem> <Link to="/contact" style={{color:'white' , textDecoration : 'none'}}>{t("Navbar.Contact")}</Link> </ListItem>
            <ListItem> <Link to="/exports" style={{color:'white' , textDecoration : 'none'}}>{t("Navbar.Exports")}</Link> </ListItem>
            <ListItem> <Link to="/category?key=type&value=bath towel&order=1" style={{color:'white' , textDecoration : 'none'}}>{t("Navbar.Bath")}</Link> </ListItem>
            <ListItem> <Link to="/category?key=type&value=hand towel&order=1" style={{color:'white' , textDecoration : 'none'}}>{t("Navbar.Hand")}</Link> </ListItem>
            <ListItem> <Link to="/category?key=type&value=geust towel&order=1" style={{color:'white' , textDecoration : 'none'}}>{t("Navbar.Geust")}l</Link> </ListItem>
        </List>
            </FooterCenter>
            <FooterRight>
            <Title>{t("Footer.contact")}</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/>{t("Behind the elctrical mangement - Teraat Elsahel - Elgharbia - Samanoud - Egypt")} 
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +20127422700
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> info@fahmytex.com
        </ContactItem>
            </FooterRight>
            <FooterLeft>
            <ImageUrl href='#'>
                        <ImageIso src={process.env.PUBLIC_URL+"images/iso-9001-certified-logo-AC594-FAD01-seeklogo-com.png"}/>
              </ImageUrl>
            </FooterLeft>
        </FooterContiner>
    )
}

export default Footer
