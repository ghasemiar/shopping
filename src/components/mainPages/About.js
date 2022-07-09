import { Box, Container, Typography } from "@mui/material";
import React from "react";
export default function About() {
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
                    About me ?
                </Typography>
            </Box>
            <Box
                sx={{
                    width: "100%",
                    mt : 10,
                    bgcolor: "background.default",
                    color: "text.primary",
                    borderRadius: 1,
                }}>
                <Typography component={"h2"} variant={"h2"}>
                    Name : Amir Reza ghasemi
                </Typography>
                <Typography component={"h2"} variant={"h2"}>
                    job : University student
                </Typography>
                <Typography component={"h3"} variant={"h4"} sx={{
                    mt : 5
                }}>
                <b>Biography :</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.                </Typography>
            </Box>
            
        </Container>
    );
}
