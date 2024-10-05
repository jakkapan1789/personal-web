import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
  Box,
  Container,
} from "@mui/material";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import BusinessIcon from "@mui/icons-material/Business";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import FavoriteIcon from "@mui/icons-material/Favorite";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import MovieIcon from "@mui/icons-material/Movie";

const iconMap = {
  ทั่วไป: <NewspaperIcon sx={{ fontSize: 40 }} />,
  ธุระกิจ: <BusinessIcon sx={{ fontSize: 40 }} />,
  เกมส์: <SportsEsportsIcon sx={{ fontSize: 40 }} />,
  สุขภาพ: <FavoriteIcon sx={{ fontSize: 40 }} />,
  อาหาร: <RestaurantIcon sx={{ fontSize: 40 }} />,
  บันทเทิง: <MovieIcon sx={{ fontSize: 40 }} />,
};

const MUIIconButton = ({ category, onClick }) => {
  const Icon = iconMap[category] || <NewspaperIcon sx={{ fontSize: 40 }} />;

  return (
    <Grid
      item
      xs={6}
      sm={3}
      md={2}
      //   sx={{ display: "flex", justifyContent: "center" }}
    >
      <Card
        sx={{
          maxWidth: 150,
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.05)",
          },
          alignContent: "center",
        }}
      >
        <CardActionArea onClick={() => onClick(category)}>
          <Box
            sx={{
              pl: 1,
              pt: 1,
              pr: 1,
            }}
          >
            {Icon}
          </Box>
          <CardContent>
            <Typography
              variant="subtitle1"
              align="center"
              sx={{
                textTransform: "capitalize",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {category}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

const NewsCategoryList = () => {
  const categories = [
    "ทั่วไป",
    "ธุระกิจ",
    "เกมส์",
    "สุขภาพ",
    "อาหาร",
    "บันทเทิง",
  ];

  const handleCategoryClick = (category) => {
    console.log(`Selected category: ${category}`);
  };

  return (
    <Box id="projects" sx={{ py: 4, backgroundColor: "#f5f5f5" }}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={1}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          {categories.map((category) => (
            <MUIIconButton
              key={category}
              category={category}
              onClick={handleCategoryClick}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default NewsCategoryList;
