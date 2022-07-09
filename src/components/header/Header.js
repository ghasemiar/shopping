import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import PrimarySearchAppBar from "./Search.js";
import Container from "@mui/material/Container";
import MenuAppBar from "./CartIco.js";
import ResponsiveAppBar from "./Pages.js";
import Grid from "@mui/material/Grid";

const Header = () => {
  return (
    <>
      <AppBar position="fixed" color="inherit" elevation={1}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Grid container>
              <Grid item xs={4} md={4} sm={4}>
                <ResponsiveAppBar />
              </Grid>
              <Grid item xs={4} md={4} sm={4} sx={{ textAlign: "center" }}>
                <PrimarySearchAppBar />
              </Grid>
              <Grid item xs={4} md={4} sm={4}>
                <MenuAppBar />
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};
export default Header;
