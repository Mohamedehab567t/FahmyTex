import React from 'react'
import { Container , ContactTitle , Wrapper , SendCOntainer ,
    WhyCOntainer , InsideWhy , SectionTitle , List , ListItem } from './StyledComponents'
import 'react-phone-number-input/style.css'
import Con from "../../Contactcomp/Con"
import i18n from "../../i18n"
import { useTranslation } from 'react-i18next';




const Contact = () => {
    const {t} = useTranslation()
    return (
        <Container>
            <ContactTitle>{t("Contact.title")}</ContactTitle>
            <Wrapper>
                <SendCOntainer>
                    <Con />
                </SendCOntainer>
                <WhyCOntainer>
                    <InsideWhy>
                        <SectionTitle>{t("Why would you contact us ?")}</SectionTitle>
                        <List>
                            <ListItem>{t("Inquiries about products")}</ListItem>
                            <ListItem>{t("Inquiries about export availabilty to your country")}</ListItem>
                        </List>
                    </InsideWhy>
                </WhyCOntainer>
            </Wrapper>
        </Container>
    )
}

export default Contact
