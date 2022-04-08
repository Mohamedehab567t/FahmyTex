import React from 'react'
import {Container , ExportTitle} from './StyledComponents'
import Slider from "react-slick"
import ExportItem from './ExportItem';
import { exports } from '../../data';
import i18n from "../../i18n"
import { useTranslation } from 'react-i18next';
let slidesToShow = window.screen.width < 1550 ? 1 : 4 

const settings = {
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };

const Exports = () => {
    const {t} = useTranslation()
    return (
        <Container id='export'>
            <ExportTitle>{t("Exports.title")}</ExportTitle>
        <Slider {...settings}>
        {exports.map( item => {
                return <ExportItem item={item} key={item.id} />
         } )}
        </Slider>
        </Container>
    )
}

export default Exports
