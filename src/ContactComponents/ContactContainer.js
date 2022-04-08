import React , {useState} from 'react'
import * as Com from './StyledComponents'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import Con from '../Contactcomp/Con'
import i18n from "../i18n"
import { useTranslation } from 'react-i18next';
const ContactContainer = () => {
    const {t} = useTranslation()
    const lang = localStorage.getItem("i18nextLng");
    return (
        <Com.Container>
            <Com.ContainerTitle>{t("Contact.title")}</Com.ContainerTitle>
            <Com.Wrapper>
                <Com.NumAdd>
                    <Com.NumAddTitle dir={lang == "ar" ? "right" : "left"}>
                        {t("NUMBERS & ADRRESS")}
                    </Com.NumAddTitle>
                    <hr style={{"border" : '.2px white solid' , "width" : "100%" , "margin" : "10px auto"}} />
                    <Com.NumAddWrapper>
                        <Com.Numbers>
                            <Com.Number> <i className='	fas fa-phone-volume'></i> 0020402961300</Com.Number>
                            <Com.Number> <i className='	fas fa-phone-volume'></i> 00201221075666</Com.Number>
                            <Com.Number> <i className='	fas fa-phone-volume'></i> 00201274227000</Com.Number>
                            <Com.Number> <i className='	fas fa-phone-volume'></i> 00201223241195</Com.Number>
                        </Com.Numbers>
                        <Com.Address>
                            <Com.AdressParagraph>
                                {t("Behind the elctrical mangement - Teraat Elsahel - Elgharbia - Samanoud - Egypt")}
                            </Com.AdressParagraph>
                        </Com.Address>
                        <Com.LogoLocation>
                            <Com.Logo className='fas fa-map-marker-alt'/>
                        </Com.LogoLocation>
                    </Com.NumAddWrapper>
                </Com.NumAdd>
                <Com.Splitter>
                    <Com.SocialMedia>
                            <Con />
                    <Com.SocialMediaDiv>
                        <Com.IconMedia href='https://api.whatsapp.com/send/?phone=201274227000&text=start conversation&app_absent=0' target='_blank' className='fab fa-whatsapp-square' color='#25d366'/>
                        <Com.IconMedia href='https://www.facebook.com/mahmoudfahmytex/' target='_blank' className='fab fa-facebook-square' color='#3b5998'/>
                        <Com.IconMedia className='fab fa-instagram	' color='#c32aa3'/>
                    </Com.SocialMediaDiv>
                    </Com.SocialMedia>
                    <div id='spit' style={{"flex" : "1" , "overflow" : "hidden"}}>
                        <iframe width={"100%"} height={"100%"} id="gmap_canvas"
                        src="https://maps.google.com/maps?q=%D9%85%D8%B5%D9%86%D8%B9%20%D9%81%D9%87%D9%85%D9%8A%20%D9%8A%D9%88%D9%86%D8%B3%20%D9%84%D9%84%D9%88%D8%A8%D8%B1%D9%8A%D8%A7%D8%AA,%20%D8%AA%D8%B1%D8%B9%D8%A9%20%D8%A7%D9%84%D8%B3%D8%A7%D8%AD%D9%84%D8%8C%20%D9%85%D8%AF%D9%8A%D9%86%D8%A9%20%D8%B3%D9%85%D9%86%D9%88%D8%AF%D8%8C%20%D8%B3%D9%85%D9%86%D9%88%D8%AF%D8%8C%D8%8C%20%D9%85%D8%AF%D9%8A%D9%86%D8%A9%20%D8%B3%D9%85%D9%86%D9%88%D8%AF%D8%8C%20%D8%B3%D9%85%D9%86%D9%88%D8%AF%D8%8C%20%D8%A7%D9%84%D8%BA%D8%B1%D8%A8%D9%8A%D8%A9%D8%8C%D8%8C%20Samanoud&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    </div>
                </Com.Splitter>
            </Com.Wrapper>
        </Com.Container>
    )
}

export default ContactContainer
