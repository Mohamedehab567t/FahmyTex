import React from 'react'
import Announcement from '../HomeComponents/Annoucment/Annoucment'
import Navbar from '../HomeComponents/Navbar/Navbar'
import Footer from '../HomeComponents/Footer/Footer'
import ContainerAbout from '../AboutComponents/Container/ContainerAbout'
import {Helmet} from "react-helmet";
const About = () => {
    return (
        <>
    <Helmet>
        <title>Fahmytex about</title>
        <meta name="description" content="Fahmy Younes for Textile Manufacturer we have more than 47 years of experience and serving a lot of companeis around the world" />
    </Helmet>
            <Announcement />
            <Navbar pos='unset' background={true} navbarWork={false}/>
            <ContainerAbout />
            <Footer />
        </>
    )
}

export default About
