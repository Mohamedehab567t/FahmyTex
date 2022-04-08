import React from 'react';
import Announcement from '../HomeComponents/Annoucment/Annoucment'
import Navbar from '../HomeComponents/Navbar/Navbar'
import Promises from '../HomeComponents/Promise/Promises'
import Footer from '../HomeComponents/Footer/Footer'
import CategoryContainer from '../CategoryComponents.js/CategoryContainer'

const Category = () => {
  return <div>
            <Announcement />
            <Navbar pos='unset' background={true} navbarWork={false}/>
            <CategoryContainer />
            <Promises />
            <Footer />
  </div>;
};

export default Category;
