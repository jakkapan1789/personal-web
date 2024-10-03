import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import getLPTheme from "@/data/getLPTheme";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Projects from "@/components/Projects/Projects";
import Certificates from "@/components/Certificates/Certificates";
import MainLayout from "@/components/Layout/MainLayout";
import Aos from "aos";

export default function Home() {
  const LPtheme = createTheme(getLPTheme("light"));
  React.useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  return (
    <ThemeProvider theme={LPtheme}>
      <MainLayout>
        <Hero />
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="certificates">
          <Certificates />
        </section>
      </MainLayout>
    </ThemeProvider>
  );
}
