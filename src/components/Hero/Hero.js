import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { styled } from "@mui/system";

const Overlay = styled(Box)({
  position: "absolute",
  inset: 0,
  backgroundColor: "black",
  opacity: 0.5,
});

const Hero = () => {
  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        height: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to right, #3b82f6, #0046AD)",
        color: "white",
        overflow: "hidden",
      }}
    >
      <Overlay />
      <Container
        maxWidth="sm"
        sx={{ position: "relative", zIndex: 10, textAlign: "center" }}
      >
        <Typography
          variant="h1"
          data-aos="fade-up"
          data-aos-duration="1200"
          sx={{
            fontWeight: "bold",
            mt: { xs: 4, sm: 0 },
            marginBottom: 4,
            animation: "fadeInDown 1s ease-in-out",
          }}
        >
          Ball.DevZone
        </Typography>
        <Typography
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="300"
          variant="h5"
          sx={{ marginBottom: 8, animation: "fadeInUp 1s ease-in-out" }}
        >
          {`Hi, I’m Nopporn. Welcome to my website! With 10+ years in software development, I’m ready to build something great with you!`}
        </Typography>
        <Typography
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="300"
          variant="h5"
          sx={{ marginBottom: 8, animation: "fadeInUp 1s ease-in-out" }}
        ></Typography>
        <Button
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="600"
          href="#contact"
          variant="contained"
          sx={{
            backgroundColor: "white",
            borderRadius: 50,
            color: "#3b82f6",
            paddingX: 4,
            paddingY: 1.5,
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#e0f2ff" },
            animation: "bounce 2s infinite",
          }}
        >
          Get in Touch
        </Button>
      </Container>

      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          textAlign: "center",
          paddingBottom: 2,
        }}
      ></Box>
    </Box>
  );
};

export default Hero;
