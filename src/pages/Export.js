import React from 'react'
import Announcement from '../HomeComponents/Annoucment/Annoucment'
import Navbar from '../HomeComponents/Navbar/Navbar'
import Footer from '../HomeComponents/Footer/Footer'
import ExportContainer from '../ExportsComponents/ExportContainer'
import {Helmet} from "react-helmet";
const Export = () => {
    return (
        <div>
    <Helmet>
        <title>Fahmytex exports</title>
        <meta name="description" content="Here our countries that we deal with" />
    </Helmet>
            <Announcement />
            <Navbar pos='unset' background={true} navbarWork={false}/>
            <ExportContainer />
            <Footer />
        </div>
    )
}

export default Export
