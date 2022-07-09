import * as React from "react";
// Components
import { Routes, Route } from "react-router-dom";
import ToggleColorMode from "./components/Modes";
import Header from "./components/header/Header.js";
import About from "./components/mainPages/About.js";
import Contact from "./components/mainPages/Contact";
import Home from "./components/mainPages/homePage/Home";
import Product from "./components/mainPages/homePage/Product";
import Cart from "./components/mainPages/Cart"
// MUI Imports
import Container from "@mui/material/Container";
import Footer from "./components/footer/Footer";
import { Paper } from "@mui/material";
import { RecoilRoot } from "recoil";
function App() {
  return (
    <RecoilRoot>
      <ToggleColorMode>
        <Paper>
        <Header />

        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/:userId" element={<Product />} />
          <Route path="/cart-ico" element={<Cart />} />
        </Routes>

        <Footer />
        </Paper>
      </ToggleColorMode>
      </RecoilRoot>
  );
}

export default App;
