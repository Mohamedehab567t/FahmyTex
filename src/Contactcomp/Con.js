import React , {useState} from 'react'
import { Form , Input , Row , TextArea ,  Button} from './StyledComponents'
import PhoneInput , {isValidPhoneNumber} from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
import {Alert ,Snackbar} from '@mui/material';
import axios from 'axios'
import { API } from '../data';
import i18n from "../i18n"
import { useTranslation } from 'react-i18next';

const sendEmail = async (json) => {
    const response = await axios.post(API+'/send_email',json);
    return response.data
  }

const Con = () => {
    const {t} = useTranslation()
    const [value, setValue] = useState()
    const [open, setOpen] = useState(false)
    const [serv, setServe] = useState({ser : "error" , msg : "Please complete your message datails!"})
    const handleClick = ser => {
        if(ser != ""){
            setServe(ser);
        }
        setOpen(true);
      };
    
      const handleClose = (event, reason) => {
        setOpen(false);
      };
    const handSubmit = e => {
        e.preventDefault()
        const childs = Array.from(document.querySelectorAll("input[data-class=connet]"))
        const textArae = document.querySelectorAll("textarea")[0]
        childs.push(textArae)
        const json = {}
        childs.forEach(element => {
            if(element.value != ''){
                json[element.dataset.key] = element.value
            }
        });
        if(Object.keys(json).length < 5){
            handleClick("")
        }else{
            if (isValidPhoneNumber(json["phone"])){
                sendEmail(json).then(pay => {
                    if(pay = '200'){
                        handleClick({ser : "success" , msg : "We have received your message and we will respond as soon as possible"})
                    }else{
                        handleClick({ser : "error" , msg : "an error occured while sending please try agin"})
                    }
                })

            }else{
                handleClick({ser : "error" , msg : "not valid phone number"})
            }

            
        }
    }

  return (
    <Form onSubmit={handSubmit}>
    <Row>
        <Input type="text" data-key="fname" data-class="connet" placeholder={t("Contact.First name")} width="50%"/>
        <Input type="text" data-key="lname" data-class="connet" placeholder={t("Contact.Last name")} width="50%"/>
    </Row>
    <Row>
        <Input type="email" data-key="email" data-class="connet" placeholder={t("Contact.email address")} width="100%"/>
    </Row>

    <Row>
    <PhoneInput
                    international
                    countryCallingCodeEditable={false}
                    defaultCountry="EG"
                    value={value}
                    onChange={setValue} style={{"width" : "100%" , "marginBottom" : "19px"}}
                    data-class="connet"
                    data-key="phone"
                    />
    </Row>
    <Row>
        <TextArea id="connet" data-key="message" placeholder={t("Contact.Your message here")} rows="8"/>
    </Row>
    <Row>
        <Button>{t("Contact.send")}</Button>
    </Row>
    <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={serv.ser} sx={{ width: '100%' }}>
          {serv.msg}
        </Alert>
    </Snackbar>
</Form>
  );
};

export default Con;
