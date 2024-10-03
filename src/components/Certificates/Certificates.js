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
    title: "Get started with programming",
    issuer: "Future Skill",
    date: "2022",
    link: "#",
    delay: "0",
  },
  {
    title: "The complete guide to Kubernetes",
    issuer: "Future Skill",
    date: "2022",
    link: "#",
    delay: "300",
  },
  {
    title: "Up Skill Python programming to developer",
    issuer: "Future Skill",
    date: "2022",
    link: "#",
    delay: "600",
  },
  {
    title: "React basic until build Chat Application",
    issuer: "Future Skill",
    date: "2022",
    link: "#",
    delay: "0",
  },
  {
    title: "Build Web Application basic with Python",
    issuer: "Future Skill",
    date: "2022",
    link: "#",
    delay: "300",
  },
  {
    title: "Develop Microservices, understand to be applied and ready to use",
    issuer: "Future Skill",
    date: "2023",
    link: "#",
    delay: "600",
  },
  {
    title: "Build Web with WordPress Page Builder",
    issuer: "Future Skill",
    date: "2022",
    link: "#",
    delay: "0",
  },
  {
    title: "Build Website with HTML5/CSS3/JavaScript",
    issuer: "Future Skill",
    date: "2022",
    link: "#",
    delay: "300",
  },
  {
    title: "Communication with Office English",
    issuer: "Future Skill",
    date: "2023",
    link: "#",
    delay: "600",
  },
  {
    title: "Seminar Cyber Security Solution",
    issuer: "Internet Thailand (INET)",
    date: "2022",
    link: "#",
    delay: "0",
  },
  {
    title: "Seminar Ransomware",
    issuer: "Internet Thailand (INET)",
    date: "2022",
    link: "#",
    delay: "300",
  },
  {
    title: "Seminar Strategy manage Database to Big Data on Cloud",
    issuer: "Internet Thailand (INET)",
    date: "2023",
    link: "#",
    delay: "600",
  },
  {
    title: "Seminar Cyber Security Solution",
    issuer: "Internet Thailand (INET)",
    date: "2022",
    link: "#",
    delay: "0",
  },
  {
    title: "Seminar Ransomware",
    issuer: "Internet Thailand (INET)",
    date: "2022",
    link: "#",
    delay: "300",
  },
  {
    title: "Seminar Strategy manage Database to Big Data on Cloud",
    issuer: "Internet Thailand (INET)",
    date: "2023",
    link: "#",
    delay: "600",
  },
  {
    title:
      "Seminar Drive your business to be outstanding before anyone else with Big Data",
    issuer: "Internet Thailand (INET)",
    date: "2022",
    link: "#",
    delay: "0",
  },
  {
    title: "Getting Started with Kubernetes Workshop",
    issuer: "Internet Thailand (INET)",
    date: "2022",
    link: "#",
    delay: "300",
  },
  {
    title: "Microsoft Power BI",
    issuer: "Thai MOOC",
    date: "2022",
    link: "#",
    delay: "600",
  },
  {
    title: "Microsoft Power Point",
    issuer: "Thai MOOC",
    date: "2022",
    link: "#",
    delay: "0",
  },
  {
    title: "Microsoft Excel",
    issuer: "Thai MOOC",
    date: "2022",
    link: "#",
    delay: "300",
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
