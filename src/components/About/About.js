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

import ballPic from "../../../public/assets/images/ball.jpeg";
const About = () => {
  return (
    <Box id="about" sx={{ py: 8, backgroundColor: "gray.100" }}>
      <Container maxWidth="lg">
        <Typography
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="300"
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
          data-aos-delay="300"
          container
          spacing={4}
          justifyContent="center"
          alignItems="center"
          sx={{ backgroundColor: "white", p: 4, borderRadius: 8 }}
        >
          <Grid item xs={12} md={4} sx={{ textAlign: "center" }}>
            <Avatar
              // src="https://avatars.githubusercontent.com/u/109788212?v=4"
              src={"https://avatars.githubusercontent.com/u/161267880?v=4"}
              alt="Profile Picture"
              sx={{ width: 250, height: 250, mx: "auto", boxShadow: 2 }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography
              variant="body1"
              paragraph
              sx={{ color: "gray.700", mb: 4 }}
            >
              {`With over a 10 year of experience in software development, I bring a strong technical background, coupled with a for continuous learning. Skilled in coding, project management, and maintaining software applications, I excel in creating documentation, including flow diagrams, and devising project plans encompassing Proof of Concept (POC), User Acceptance Testing (UAT), and Production (PRD) phases. My expertise extends to crafting comprehensive test cases to ensure software quality for team efficiency.`}
            </Typography>
            <Typography
              variant="body1"
              paragraph
              sx={{ color: "gray.700", mb: 2 }}
            >
              {` am adept at budget planning and control, ensuring projects stay within financial parameters while meeting objectives. I collaborate effectively with teams in South Asia to oversee software maintenance tasks. With a knack for solving complex problems with precision and clarity, I am committed to driving successful outcomes in every project.`}
            </Typography>
            <Typography
              variant="h5"
              component="h3"
              sx={{ fontWeight: "bold", mb: 2 }}
            >
              My Expertise
            </Typography>
            <List>
              {[
                "FullStack Developer",
                "Advance Data Analyst",
                "Project coordination",
                "Manufacturing System",
                "Project planing / Management",
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
                  <Typography
              variant="h5"
              component="h3"
              sx={{ fontWeight: "bold", mb: 2 }}
            >
              My Skills Frontend Tectnologies & Languages
            </Typography>
            <List>
              {[
                "ASP.NET CORE (MVC), React, Javascript, HTML, PHP, CSS, MUI, Bootstrap",
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

                    <Typography
              variant="h5"
              component="h3"
              sx={{ fontWeight: "bold", mb: 2 }}
            >
              My Skills Banktend Tectnologies & Languages
            </Typography>
            <List>
              {[
                "C#, Websocket, RESTful API, Javascript ASP.NET ASP.NET CORE",
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
                     <Typography
              variant="h5"
              component="h3"
              sx={{ fontWeight: "bold", mb: 2 }}
            >
              My Skills Database Tectnologies
            </Typography>
            <List>
              {[
                "DB2, Oracle, SQL, PostgreSQL, MySQL, SQLlite",
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
                  <Typography
              variant="h5"
              component="h3"
              sx={{ fontWeight: "bold", mb: 2 }}
            >
             Other
            </Typography>
            <List>
              {[
                "AS/400 Power BI Handy Terminal Server (AD, DNS, File Share, IIS)",
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
