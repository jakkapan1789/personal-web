import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Container,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";

const NewsLayout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (href, mobile) => {
    router.push(href);
    if (mobile) {
      toggleMenu();
    }
  };

  const menuItems = [
    { text: "หน้าหลัก", href: "/" },
    { text: "เกี่ยวกับเรา", href: "/#about" },
    { text: "เข้าสู่ระบบ", href: "/#projects" },
    // { text: "Certificates", href: "/#certificates" },
  ];

  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f7fafc" }}>
      <AppBar
        position="fixed"
        color="inherit"
        elevation={1}
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Container
            maxWidth="lg"
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography
              variant="h6"
              to="/"
              sx={{
                flexGrow: 1,
                textDecoration: "none",
                color: "#0046AD",
                fontWeight: "bold",
              }}
            >
              Today News
            </Typography>

            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
              {menuItems.map((item) => (
                <Typography
                  key={item.text}
                  onClick={() => handleNavigation(item.href)}
                  sx={{
                    color: "#4b5563",
                    textDecoration: "none",
                    "&:hover": { color: "#3b82f6" },
                    transition: "color 0.3s",
                    cursor: "pointer",
                  }}
                >
                  {item.text}
                </Typography>
              ))}
            </Box>
            <IconButton
              edge="end"
              color="inherit"
              sx={{ display: { md: "none" } }}
              onClick={toggleMenu}
            >
              <MenuIcon />
            </IconButton>
          </Container>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={isMenuOpen}
        onClose={toggleMenu}
        sx={{ display: { md: "none" }, zIndex: 9999 }}
      >
        <List sx={{ width: 250 }}>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => handleNavigation(item.href, true)}
            >
              <ListItemText
                primary={
                  <Typography
                    sx={{
                      color: "#4b5563",
                      textDecoration: "none", // Ensure no underline here
                    }}
                  >
                    {item.text}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box component="main">{children}</Box>

      <Box
        component="footer"
        sx={{ backgroundColor: "#1f2937", color: "white", py: 4 }}
      >
        <Container maxWidth="lg" sx={{ textAlign: "center" }}>
          <Typography variant="body2" sx={{ mb: 2 }}>
            © 2024 JP.DevZone. All rights reserved.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <IconButton color="inherit" href="#">
              <FacebookIcon />
            </IconButton>
            <IconButton color="inherit" href="#">
              <TwitterIcon />
            </IconButton>
            <IconButton color="inherit" href="#">
              <GitHubIcon />
            </IconButton>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default NewsLayout;
