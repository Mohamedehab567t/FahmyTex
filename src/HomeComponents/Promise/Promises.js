import React from 'react'
import { Container , PromiseTitle  , Wrapper , Item , CenterStat , Num , Detail , Infromation} from './StyledComponent'
import { PromisesList } from '../../data'
import i18n from "../../i18n"
import { useTranslation } from 'react-i18next';

const Promises = () => {

    const {t} = useTranslation()
    
    return (
        <Container>
            <PromiseTitle>{t("Promises.title")}</PromiseTitle>
            <Wrapper>
                {PromisesList.map(item => {
                    return (
                        <Item key={item.id}>
                        <CenterStat>
                            <Num className={item.num}></Num>
                            <Detail>{t(item.detail)}</Detail>
                            <Infromation>
                            {t(item.info)}
                            </Infromation>
                        </CenterStat>
                    </Item>
                    )
                })}
            </Wrapper>
        </Container>
    )
}

export default Promises
