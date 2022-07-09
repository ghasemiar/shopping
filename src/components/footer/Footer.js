import { Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
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
        width: "100%",
        mt : 10,
        textAlign: "center",
        height: "auto",
      }}
      elevation={10}>
      <Box sx={{ width: "50%", height: "auto", display: "inline-block", }}>
        <Typography variant="h3"  sx={{ mt: 4 }}>
          lorem impusm
        </Typography>
        <Typography variant="p" component="div"  sx={{ mt: 4 }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Typography>

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
