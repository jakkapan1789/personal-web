import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
} from "@mui/material";

const certificates = [
  {
    title: "Full Stack Web Development",
    issuer: "Udacity",
    date: "2022",
    link: "#",
    delay: "300",
  },
  {
    title: "Full Stack Web Development",
    issuer: "Udacity",
    date: "2022",
    link: "#",
    delay: "600",
  },
  {
    title: "React Native Specialization",
    issuer: "Coursera",
    date: "2021",
    link: "#",
    delay: "900",
  },
  {
    title: "React Native Specialization",
    issuer: "Coursera",
    date: "2021",
    link: "#",
    delay: "300",
  },
  {
    title: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    date: "2023",
    link: "#",
    delay: "600",
  },
  {
    title: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    date: "2023",
    link: "#",
    delay: "900",
  },
];

const Certificates = () => {
  return (
    <Box id="certificates" sx={{ py: 8, backgroundColor: "white" }}>
      <Container maxWidth="xl">
        <Typography
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", mb: 6, mt: { xs: 0, sm: 3 } }}
          data-aos="fade-up"
          data-aos-duration="1200"
          //   data-aos-delay=
        >
          Certificates
        </Typography>
        <Grid container spacing={4}>
          {certificates.map((cert, index) => (
            <Grid
              item
              xs={12}
              md={4}
              sm={4}
              xl={4}
              key={index}
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay={cert.delay}
            >
              <Card
                sx={{
                  p: 2,
                  transition: "box-shadow 0.3s",
                  "&:hover": { boxShadow: 3 },
                }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    component="h3"
                    sx={{ fontWeight: "bold", mb: 2 }}
                  >
                    {cert.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="textSecondary"
                    sx={{ mb: 2 }}
                  >
                    Issued by {cert.issuer} - {cert.date}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    href={cert.link}
                    sx={{ textTransform: "none", borderRadius: 50 }}
                  >
                    View Certificate
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Certificates;
