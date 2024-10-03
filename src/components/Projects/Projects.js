import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Button,
} from "@mui/material";

const projects = [
  {
    title: "Auction Platform",
    description:
      "A full-stack auction solution with user authentication, pet management and bidding.",
    technologies: ["React", "Next.js", "PostgreSQL", "C#"],
    link: "#",
    image: "https://via.placeholder.com/300x200?text=E-commerce+Platform",
    delay: "300",
  },
  {
    title: "Task Management App",
    description:
      "A responsive web application for managing tasks and projects with real-time updates.",
    technologies: ["Vue.js", "Firebase", "Vuex"],
    link: "#",
    image: "https://via.placeholder.com/300x200?text=Task+Management+App",
    delay: "600",
  },
  {
    title: "SCG Communication Platform",
    description:
      "A custom-designed portfolio website showcasing client's work and achievements.",
    technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"],
    link: "#",
    image: "https://via.placeholder.com/300x200?text=Portfolio+Website",
    delay: "900",
  },
  {
    title: "Bill Of Operation MFG",
    description:
      "A web application for manage bill of material or recipe with the real-time updates to MFG prod.",
    technologies: ["Angular.js", ".NET", "JavaScript", "C#"],
    link: "#",
    image: "https://via.placeholder.com/300x200?text=Portfolio+Website",
    delay: "900",
  },
  {
    title: `'applove' Frontend Package`,
    description:
      "A fully integrated TypeScript project package dialog or notification message with flexible use cases.",
    technologies: ["TypeScript"],
    link: "#",
    image: "https://via.placeholder.com/300x200?text=Portfolio+Website",
    delay: "900",
  },
];

const Projects = () => {
  return (
    <Box id="projects" sx={{ py: 8, backgroundColor: "#f5f5f5" }}>
      <Container maxWidth="lg">
        <Typography
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="300"
          variant="h3"
          component="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: "bold", mb: 6, mt: { xs: 0, sm: 3 } }}
        >
          My Projects
        </Typography>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              //  data-aos="fade-up"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay={project.delay}
            >
              <Card
                sx={{
                  transition: "transform 0.3s",
                  "&:hover": { transform: "scale(1.01)" },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent>
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{ fontWeight: "bold", mb: 2 }}
                  >
                    {project.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    sx={{ mb: 2 }}
                  >
                    {project.description}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    {project.technologies.map((tech, i) => (
                      <Chip
                        key={i}
                        label={tech}
                        variant="outlined"
                        sx={{ marginRight: 1, marginBottom: 1 }}
                      />
                    ))}
                  </Box>
                  <Button
                    variant="contained"
                    color="primary"
                    href={project.link}
                    sx={{ textTransform: "none", borderRadius: 50 }}
                  >
                    View Project
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

export default Projects;
