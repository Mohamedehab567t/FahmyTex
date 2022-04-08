import React from 'react'
import Announcement from '../HomeComponents/Annoucment/Annoucment'
import Navbar from '../HomeComponents/Navbar/Navbar'
import SimpleSlider from '../HomeComponents/Slider/Slider'
import Categories from '../HomeComponents/Categories/Categories'
import Exports from '../HomeComponents/Export/Exports'
import Promises from '../HomeComponents/Promise/Promises'
import Contact from '../HomeComponents/Contact US/Contact'
import Footer from '../HomeComponents/Footer/Footer'
import About from '../HomeComponents/About/About'
import {Helmet} from "react-helmet";

const Home = () => {
    return (
        <>
    <Helmet>
        <title>Fahmytex home</title>
        <meta name="description" content="Fahmy Younes for Textile Manufacturer we have more than 47 years of experience and serving a lot of companeis around the world" />
    </Helmet>

            <Announcement />
            <Navbar pos='fixed' background={false} navbarWork={true}/>
            <SimpleSlider />
            <Exports />
            <Categories />
            <Promises />
            <About />
            <Contact />
            <Footer />
        </>
    )
}

export default Home
