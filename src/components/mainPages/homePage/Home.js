import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Products from "./Products";
import { Box } from "@mui/material";
import HeaderSection from "./../../header/HeaderSection";

const Home = () => {
  return (
    <>
      {" "}
      <HeaderSection />
      <Box sx={{ m: 3 }}>
        <Products />
      </Box>
    </>
  );
};
export default Home;
