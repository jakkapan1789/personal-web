// import React from "react";
// import { IconButton, Grid, Typography, Box, Container } from "@mui/material";
// import NewspaperIcon from "@mui/icons-material/Newspaper";
// import BusinessIcon from "@mui/icons-material/Business";
// import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import RestaurantIcon from "@mui/icons-material/Restaurant";
// import MovieIcon from "@mui/icons-material/Movie";

// const iconMap = {
//   news: <NewspaperIcon />,
//   business: <BusinessIcon />,
//   gaming: <SportsEsportsIcon />,
//   health: <FavoriteIcon />,
//   food: <RestaurantIcon />,
//   entertainment: <MovieIcon />,
// };

// const MUIIconButton = ({ category, onClick }) => {
//   const Icon = iconMap[category] || <NewspaperIcon />;

//   return (
//     <Grid item xs={4} sm={2} container direction="column" alignItems="center">
//       <IconButton
//         color="primary"
//         size="large"
//         onClick={() => onClick(category)}
//       >
//         {Icon}
//       </IconButton>
//       <Typography variant="caption" className="capitalize">
//         {category}
//       </Typography>
//     </Grid>
//   );
// };

// const NewsCategoryList = () => {
//   const categories = [
//     "ทั่วไป",
//     "ธุระกิจ",
//     "เกมส์",
//     "สุขภาพ",
//     "อาหาร",
//     "บันทเทิง",
//   ];

//   const handleCategoryClick = (category) => {
//     console.log(`Selected category: ${category}`);
//   };

//   return (
//     <Box id="projects" sx={{ py: 4, backgroundColor: "#f5f5f5" }}>
//       <Container maxWidth="lg">
//         <Grid container spacing={3} justifyContent="center">
//           {categories.map((category) => (
//             <MUIIconButton
//               key={category}
//               category={category}
//               onClick={handleCategoryClick}
//             />
//           ))}
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default NewsCategoryList;
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
    <Grid item xs={6} sm={3} md={2}>
      <Card
        sx={{
          maxWidth: 150,
          transition: "transform 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        <CardActionArea onClick={() => onClick(category)}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
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
              sx={{ textTransform: "capitalize" }}
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
        <Grid container spacing={1} justifyContent="center">
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
