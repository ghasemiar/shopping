import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React,{useEffect, useState} from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";
//set footer absolutly
const socialIcons = [
  { id: 1, icon: <FacebookIcon /> },
  { id: 2, icon: <InstagramIcon /> },
  { id: 3, icon: <TwitterIcon /> },
  { id: 4, icon: <TelegramIcon /> },
  { id: 5, icon: <LinkedInIcon /> },
  { id: 6, icon: <GitHubIcon /> },
];
const Footer = () => {

  return (
    
    <Paper
    
      color="inherit"
      sx={{
        position : "fixed",
        bottom : "0",
        width: "100%",
        
        textAlign: "center",
        height: "auto",
      }}
      elevation={10}>
      <Box sx={{ width: "50%", height: "auto", display: "inline-block", }}>


        {socialIcons.map((icon, idx) => (
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
            key={icon.id}>
            {icon.icon}
          </IconButton>
        ))}
      </Box>
    </Paper>
  );
};

export default Footer;
