import React from "react";
import {
  Box,
  Container,
  Typography,
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

const About = () => {
  return (
    <Box id="about" sx={{ py: 8, backgroundColor: "gray.100" }}>
      <Container maxWidth="lg">
        <Typography
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="900"
          variant="h3"
          component="h2"
          align="center"
          sx={{ fontWeight: "bold", mb: 6, mt: { xs: 0, sm: 3 } }}
        >
          About Me
        </Typography>
        <Grid
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="1200"
          container
          spacing={4}
          justifyContent="center"
          alignItems="center"
          sx={{ backgroundColor: "white", p: 4, borderRadius: 8 }}
        >
          <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
            <Avatar
              src="https://avatars.githubusercontent.com/u/109788212?v=4"
              alt="Profile Picture"
              sx={{ width: 300, height: 300, mx: "auto", boxShadow: 2 }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography
              variant="body1"
              paragraph
              sx={{ color: "gray.700", mb: 4 }}
            >
              {`Hello! I'm Jakkapan Pakeerat, a passionate and creative web
              developer With 6 years of experience in the field, I've had the
              pleasure of working on a diverse range of projects that have honed
              my skills and fueled my enthusiasm for web development.`}
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ color: "gray.700", mb: 4 }}
            >
              {`My journey in technology started from a young age until I grew up
              and decided to study technology. Today, I am skilled in creating
              responsive and user-friendly websites that work smoothly across
              all devices.`}
            </Typography>
            <Typography
              variant="h5"
              component="h3"
              sx={{ fontWeight: "bold", mb: 4 }}
            >
              My Expertise
            </Typography>
            <List>
              {[
                "Front-end Development",
                "Responsive Web Design",
                "React.js, Vue.js & Angular.js",
                "Back-end Development",
                "Node.js, Express & .NET",
                "Database Management",
              ].map((skill, index) => (
                <ListItem key={index} disableGutters>
                  <ListItemIcon>
                    <CheckIcon color="success" />
                  </ListItemIcon>
                  <ListItemText
                    primary={skill}
                    primaryTypographyProps={{ color: "gray.700" }}
                  />
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
