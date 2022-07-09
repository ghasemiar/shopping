import React, { useState } from "react";
import { ChangeModeButton } from "../Modes";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {Link} from "react-router-dom";  
export default function MenuAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <div style={{ float: "right" }}>
        
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="inherit">
          <Link style={{ textDecoration: "none"}} to={"cart-ico"}>
          <ShoppingCartIcon />
          
          </Link>
        </IconButton>
        
        

        <ChangeModeButton />
      </div>
    </Box>
  );
}
