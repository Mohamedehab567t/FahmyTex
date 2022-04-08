import React from "react";
import Slider from "react-slick";
import { SliderContainer , Arrow , Container , Wrapper , PhaseContainer , Phase , Button} from "./StyledComponents";
import { Link } from 'react-router-dom'
import i18n from "../../i18n"
import { useTranslation } from 'react-i18next';

export default function SimpleSlider(props) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay : true,
    autoplaySpeed : 5000,
    nextArrow: <Arrow dir="right"/>,
    prevArrow: <Arrow dir="left"/>
  };
  const {t} = useTranslation()
  return (
      <Container>
    <Slider {...settings} style={{position:"relative"}}> 
        <SliderContainer iurl={process.env.PUBLIC_URL+"/images/wp3065549.jpg"}>
            <Wrapper>
                <PhaseContainer>
                    <Phase>{t("Slider.fr.title")}</Phase>
                    <a href="#cat">   <Button>{t("Slider.fr.button")}</Button>   </a>
                </PhaseContainer>
            </Wrapper>
        </SliderContainer>
        <SliderContainer iurl={process.env.PUBLIC_URL+"/images/photo-1523471826770-c437b4636fe6.jpg"}>
        <Wrapper>
                <PhaseContainer>
                    <Phase>{t("Slider.tw.title")}</Phase>
                  <Link to="about">  <Button>{t("Slider.tw.button")}</Button> </Link>
                </PhaseContainer>
            </Wrapper>
            </SliderContainer>
            <SliderContainer iurl={process.env.PUBLIC_URL+"/images/5134591.jpg"}>
            <Wrapper>
                <PhaseContainer>
                    <Phase>{t("Slider.th.title")}</Phase>
                 <Link to="exports">   <Button>{t("Slider.th.button")}</Button>   </Link>
                </PhaseContainer>
            </Wrapper>
            </SliderContainer>
    </Slider>
    </Container>
  );
}