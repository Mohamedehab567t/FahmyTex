import React from 'react'
import { Container , Wrapper , InfoContainer , Title , Paragraph} from './StyledComponents'
import i18n from "../../i18n"
import { useTranslation } from 'react-i18next';

const ContainerAbout = () => {
    const {t} = useTranslation()
    return (
        <Container number = "400px">
            <Wrapper iurl="https://i.ibb.co/pLFV9q5/Mockup-stack-of-white-towels-and-houseplant-on-white-table-with-copy-space.jpg">
                <InfoContainer>
                    <Title>{t("About.title")}</Title>
                    <Paragraph>
                        {t("OUR PROMISE – At fahmy younes we believe the customer comes first, quality is the focal point of our products. With in-depth quality control processes, we are able to ensure that all of our products have a premium finish that is second to none. Through our wide range of products consisting of various sizes, designs and colors, we believe that fahmy younes has something for everyone.")}
                    </Paragraph>
                </InfoContainer>
            </Wrapper>
        </Container>
    )
}

export default ContainerAbout
