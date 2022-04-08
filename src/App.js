import React from "react"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Export from "./pages/Export"
import Category from "./pages/Category"
import Product from "./pages/Product"
import Top from "./Top"
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom'
const lang = localStorage.getItem("i18nextLng");
  if (lang == "ar"){
    document.querySelector("body").style.direction = "rtl"
  }else {
    document.querySelector("body").style.direction = "ltr"
  }
function App() {
  return (
    <Router>
      <Top />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/exports" element={<Export />} />
        <Route path="/category" element={<Category />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
