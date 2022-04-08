import React from 'react'
import { AnnoucmentContainer , IconsContainer , Propyrty , Span  } from "./StyledComponent";
import {  EmojiEvents , HighQuality , PeopleAlt} from '@material-ui/icons';
import i18n from "../../i18n"
import { useTranslation } from 'react-i18next';


const Announcement = () => {

    const {t} = useTranslation()
  return (
     <AnnoucmentContainer>
        <IconsContainer>
            <Propyrty>
                <EmojiEvents />
                <Span>{t("Annoucment.extensive")}</Span>
            </Propyrty>
            <Propyrty>
                <HighQuality />
                <Span>{t("Annoucment.high")}</Span>
            </Propyrty>
            <Propyrty>
                <PeopleAlt />
                <Span>{t("Annoucment.clients")}</Span>
            </Propyrty>
        </IconsContainer>
    </AnnoucmentContainer>
  );
};

export default Announcement;
