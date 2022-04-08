import React from 'react'
import { ItemContainer , Title , Flag , FlagContainer} from './StyledComponents'
import i18n from "../../i18n"
import { useTranslation } from 'react-i18next';


const ExportItem = ({ item }) => {
    const {t} = useTranslation()
    return (
        <ItemContainer iurl={process.env.PUBLIC_URL+"images/"+item.img}>
            <FlagContainer>
            <Flag className={'flag-icon flag-icon-'+item.code }/>
            </FlagContainer>
            <Title>{t(item.name)}</Title>
        </ItemContainer>
    )
}

export default ExportItem
