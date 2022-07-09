import { Box, Container, Typography } from "@mui/material";
import React from "react";
export default function Contact() {
  return (
    <Container maxWidth="lg">
            <Box
                sx={{
                    mt : 10,
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    bgcolor: "background.default",
                    color: "text.primary",
                    borderRadius: 1,
                    height: "250px",
                }}>
                <Typography component={"h1"} variant={"h1"}>
                How can you contact us?
                </Typography>
            </Box>
            <Box
                sx={{
                    width: "100%",
                    
                    bgcolor: "background.default",
                    color: "text.primary",
                    borderRadius: 1,
                }}>
                  <Typography component={"h2"} variant={"h2"} sx={{mt : 5}}>
                    Email : example@gmail.com
                </Typography>
                <Typography component={"h2"} variant={"h2"} sx={{mt : 5}}>
                    Phone : 0913XXXXXXX
                </Typography>
                <Typography component={"h2"} variant={"h2"} sx={{mt : 5}}>
                    Instagram : @example
                </Typography>
                <Typography component={"h2"} variant={"h2"} sx={{mt : 5}}>
                    LinkedIn : @example
                </Typography>
                <Typography component={"h2"} variant={"h2"} sx={{mt : 5}}>
                    Telegram : @example
                </Typography>
                <Typography component={"h2"} variant={"h2"} sx={{mt : 5}}>
                    Discord : @example
                </Typography>
                <Typography component={"h2"} variant={"h2"} sx={{mt : 5}}>
                    Twitter : @example
                </Typography>
                <Typography component={"h2"} variant={"h2"} sx={{mt : 5}}>
                    Facebook : @example
                </Typography>
                </Box>
            
        </Container>
  );
}
