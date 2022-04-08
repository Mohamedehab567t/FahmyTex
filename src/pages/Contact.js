import React from 'react'
import Announcement from '../HomeComponents/Annoucment/Annoucment'
import Navbar from '../HomeComponents/Navbar/Navbar'
import Footer from '../HomeComponents/Footer/Footer'
import ContactContainer from '../ContactComponents/ContactContainer'
import {Helmet} from "react-helmet";
const Contact = () => {
    return (
        <div>
    <Helmet>
        <title>Fahmytex contact</title>
        <meta name="description" content="email : info@fahmy.com | phone : 00201015000032" />
    </Helmet>
            <Announcement />
            <Navbar pos='unset' background={true} navbarWork={false}/>
            <ContactContainer />
            <Footer />
        </div>
    )
}

export default Contact
