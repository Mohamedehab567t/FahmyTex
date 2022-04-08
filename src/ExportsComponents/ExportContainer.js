import React from 'react'
import {Container , World , Image , Title , Wrapper , Country , CountrySpan , CountryName} from './StyledComponents'
import { exports } from '../data'
import i18n from "../i18n"
import { useTranslation } from 'react-i18next';
const ExportContainer = () => {
    const {t}  = useTranslation()
    return (
        <Container>
            <World>
                <Image src='https://i.ibb.co/p1Bypxv/unnamed-removebg-preview.png' />
                <Title>{t("WE EXPORTED TO")}</Title>
            </World>
            <Wrapper>
                {exports.map(item => {
                    return <Country> <div><CountrySpan className={'flag-icon flag-icon-'+item.code } /></div> <CountryName>{t(item.name)}</CountryName> </Country>
                })}
            </Wrapper>
        </Container>
    )
}

export default ExportContainer
