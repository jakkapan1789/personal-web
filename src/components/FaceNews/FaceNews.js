import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Stack,
  Chip,
} from "@mui/material";

const projects = [
  {
    title: "ตอบโจทย์พลังงานสะอาด ส่งต่อความสุขให้คนไทย",
    link: "#",
    type: "ภาคเหนือ",
    image:
      "https://static.thairath.co.th/media/dFQROr7oWzulq5Fa6rBlHoEJj4iC98QskYetVlhfnuTeNmcsZxrKZzU0iHcsbM1mvrI.webp",
    delay: "0",
  },

  {
    title: `TOKAMAK เทคโนโลยีฟิวชัน ประตูสู่พลังงานสะอาดโลกอนาคต`,

    link: "#",
    type: "ทั่วไป",
    image:
      "https://static.thairath.co.th/media/B6FtNKtgSqRqbnNsbQVoofHoStaw0YdAAV5203mSFv6l42QYUEKHip8h34kWewEwnNHe9.webp",
    delay: "300",
  },
  {
    title: `4 ราศี ปังสุดหยุดไม่อยู่ โอกาสมาถึง โชคลาภมาทัก เตรียมตัวยิ้มรับทรัพย์`,

    link: "#",
    type: "ภาคเหนือ",
    image:
      "https://static.thairath.co.th/media/B6FtNKtgSqRqbnNsbQVooT3ghwU4Hya79lsgfEhXfwhAXkrbqfts7S3RPqZINCMBwSqrJ.webp",
    delay: "600",
  },
  {
    title: `Meta เปิดตัว Movie Gen เครื่องมือสร้างวิดีโอที่ขับเคลื่อนด้วย AI`,

    link: "#",
    type: "ต่างประเทศ",
    image:
      "https://static.thairath.co.th/media/dFQROr7oWzulq5Fa6rBj2wMtohwLXSnK1B4pXKZx0dOaJZ4N6xl2bic58CwWYEGZxVy.webp",
    delay: "0",
  },

  {
    title: `20 เมนูอาหารคลีนลดน้ำหนักง่ายๆ สุขภาพดี อร่อย ถูกปากคนไทย`,

    link: "#",
    type: "ต่างประเทศ",
    image:
      "https://static.thairath.co.th/media/dFQROr7oWzulq5Fa6rBj2c4nQBTNPlbLICld38z7vpjgWE35akBglpA4ETfMr3P9QnQ.webp",
    delay: "0",
  },
  {
    title: `YouTube Shorts เพิ่มความยาวของวิดีโอสั้น จากเดิม 1 นาที เป็นสูงสุด 3 นาที`,

    link: "#",
    type: "ต่างประเทศ",
    image:
      "https://static.thairath.co.th/media/dFQROr7oWzulq5Fa6rBj2d3RFt1TyrLioqd0H0U4tpHS2yYZ5BGiWs3iKReE6Uj4gNy.webp",
    delay: "0",
  },
  {
    title: `PS5 กับ PS5 Pro ต่างกันยังไง เช็กสเปก ราคา และช่องทางพรีออเดอร์ที่นี่`,

    link: "#",
    type: "ต่างประเทศ",
    image:
      "https://static.thairath.co.th/media/dFQROr7oWzulq5Fa6rBj2du4A1RoDniEVqnHpAemtcto9OSdTYlAZIHGifqCeKSmY2Q.webp",
    delay: "0",
  },
  {
    title: `Thailand Craft Beer Week 2024 ชวนนักท่องเที่ยวดื่มด่ำประสบการณ์ และรสชาติท้องถิ่นด้วยสปิริตชุมชน`,

    link: "#",
    type: "ต่างประเทศ",
    image:
      "https://static.thairath.co.th/media/dFQROr7oWzulq5Fa6rBj2p6BIeWSJ2oQAklqUJIcuJoHs4zb05LIP2dVKp4tK7rAaXn.webp",
    delay: "0",
  },

  {
    title: `อัปเดต "เงินเดือนครู 2567" เท่าไร ตั้งแต่ขั้นต่ำ-ขั้นสูง ครบทั้ง 6 ระดับ`,

    link: "#",
    type: "ต่างประเทศ",
    image:
      "https://static.thairath.co.th/media/dFQROr7oWzulq5Fa6rBlISfUgkjz3ZoPkjbqAKT4wB53Ger20sVlnGxFK9qmAAfbdBg.webp",
    delay: "0",
  },
  {
    title: `OnePlus ถูกสั่งห้ามวางจำหน่ายอีกครั้งในประเทศเยอรมนี`,

    link: "#",
    type: "ต่างประเทศ",
    image:
      "https://static.thairath.co.th/media/dFQROr7oWzulq5Fa6rBlISUbQZlK6lxiK2ovXlPsXLM4hR3T9rhaTEK99Bk9hq85xB6.webp",
    delay: "0",
  },
  {
    title: `"การท่องเที่ยวเชิงการแพทย์" โอกาสใหม่ฟื้นท่องเที่ยวไทย`,

    link: "#",
    type: "ต่างประเทศ",
    image:
      "https://static.thairath.co.th/media/dFQROr7oWzulq5Fa6rBlHnd7LmeZMeQ3ezlUXhCI9GEmbH955nwuzhKLML8tvknG0ma.webp",
    delay: "0",
  },
  {
    title: `10 เครื่องหนีบผม ยี่ห้อไหนดี 2024 ผมตรงสวย ไม่ชี้ฟู`,

    link: "#",
    type: "ต่างประเทศ",
    image:
      "https://static.thairath.co.th/media/dFQROr7oWzulq5Fa5K33GZRnlfdTQoW4l9eY0YdiqUsQJTh7f3dmdaTjL4F3MqlQTLe.webp",
    delay: "0",
  },
];

const listNews = [
  {
    title: `Meta เปิดตัว Movie Gen เครื่องมือสร้างวิดีโอที่ขับเคลื่อนด้วย AI`,

    link: "#",
    type: "ต่างประเทศ",
    image:
      "https://static.thairath.co.th/media/dFQROr7oWzulq5Fa6rBj2wMtohwLXSnK1B4pXKZx0dOaJZ4N6xl2bic58CwWYEGZxVy.webp",
    delay: "0",
  },

  {
    title: `20 เมนูอาหารคลีนลดน้ำหนักง่ายๆ สุขภาพดี อร่อย ถูกปากคนไทย`,

    link: "#",
    type: "ต่างประเทศ",
    image:
      "https://static.thairath.co.th/media/dFQROr7oWzulq5Fa6rBj2c4nQBTNPlbLICld38z7vpjgWE35akBglpA4ETfMr3P9QnQ.webp",
    delay: "0",
  },
];

const FaceNews = () => {
  return (
    <Box id="projects" sx={{ py: 4 }}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Stack
              direction={"row"}
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              <Typography
                sx={{ fontWeight: "bold" }}
                variant="h6"
                component="div"
              >
                เรื่องอัพเดตล่าสุด
              </Typography>

              <Typography
                sx={{ fontWeight: "bold", cursor: "pointer" }}
                variant="h7"
                component="div"
              >
                ดูทั้งหมด
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card
              sx={{
                height: "100%",
                borderRadius: 2,
                display: "flex",
                flexDirection: "column",
                transition: "transform 0.3s",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <Stack
                    direction={"row"}
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography
                      sx={{ fontWeight: "bold", p: 1 }}
                      variant="h6"
                      component="div"
                    >
                      ข่าวบันเทิง
                    </Typography>

                    <Typography
                      sx={{ fontWeight: "bold", cursor: "pointer", p: 1 }}
                      variant="body1"
                      component="div"
                    >
                      ดูทั้งหมด
                    </Typography>
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Card
                    sx={{
                      height: "100%",
                      borderRadius: 0,
                      border: "none",
                      cursor: "pointer",
                      position: "relative",
                      overflow: "hidden",
                      pl: 1,
                      pr: 1,
                      pb: 2,
                    }}
                  >
                    <Box
                      sx={{
                        overflow: "hidden",
                        height: "300px",
                        position: "relative",
                      }}
                    >
                      <Stack
                        sx={{
                          position: "absolute",
                          top: 8,
                          left: 8,
                          zIndex: 2,
                        }}
                      >
                        <Chip color="primary" size="small" label="การเมือง" />
                      </Stack>

                      <CardMedia
                        component="img"
                        image={
                          "https://static.thairath.co.th/media/dFQROr7oWzulq5Fa6rBj3L8rUxeZUZibbJtkPk8XEZYRxGHRqftySc9lWYlrm786JN2.webp"
                        }
                        alt={"ข่าวการเมือง"}
                        sx={{
                          height: "100%",
                          width: "100%",
                          borderRadius: 1,
                          objectFit: "cover",
                          position: "relative",
                        }}
                      />

                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          right: 0,
                          backgroundColor: "rgba(0, 0, 0, 0.6)",
                          padding: "16px",
                          zIndex: 2,
                          borderRadius: "0px 0px 3px 3px",
                        }}
                      >
                        <Typography
                          variant="h5"
                          sx={{
                            color: "white",
                            fontWeight: "bold",
                            lineHeight: 1.2,
                          }}
                        >
                          ศปช. จ่อชง ครม. ปรับเงินช่วยเหลือน้ำท่วมเป็นอัตราเดียว
                          9,000 บาทต่อครัวเรือน
                        </Typography>
                      </Box>
                    </Box>
                  </Card>
                </Grid>
                {listNews.map((project, index) => (
                  <Grid item xs={6} sm={6} key={index}>
                    <Card
                      sx={{
                        height: "100%",
                        borderRadius: 0,
                        border: "none",
                        cursor: "pointer",
                        position: "relative",
                        overflow: "hidden",
                        // pl: 1,
                        // pr: 1,
                        pb: 2,
                      }}
                    >
                      <Box
                        sx={{
                          overflow: "hidden",
                          height: "150px",
                          position: "relative",
                        }}
                      >
                        <Stack
                          sx={{
                            position: "absolute",
                            top: 8,
                            left: 8,
                            zIndex: 2,
                          }}
                        >
                          <Chip color="primary" size="small" label="การเมือง" />
                        </Stack>

                        <CardMedia
                          component="img"
                          image={
                            "https://static.thairath.co.th/media/dFQROr7oWzulq5Fa6rBj3L8rUxeZUZibbJtkPk8XEZYRxGHRqftySc9lWYlrm786JN2.webp"
                          }
                          alt={"ข่าวการเมือง"}
                          sx={{
                            height: "100%",
                            width: "100%",
                            borderRadius: 1,
                            objectFit: "cover",
                            position: "relative",
                          }}
                        />

                        <Box
                          sx={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            backgroundColor: "rgba(0, 0, 0, 0.6)",
                            padding: "16px",
                            zIndex: 2,
                            borderRadius: "0px 0px 3px 3px",
                          }}
                        >
                          <Typography
                            variant="h5"
                            sx={{
                              color: "white",
                              fontWeight: "bold",
                              lineHeight: 1.2,
                            }}
                          >
                            ศปช. จ่อชง ครม.
                            ปรับเงินช่วยเหลือน้ำท่วมเป็นอัตราเดียว 9,000
                            บาทต่อครัวเรือน
                          </Typography>
                        </Box>
                      </Box>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Card>
          </Grid>

          {/* {projects.map((project, index) => (
            <Grid item xs={6} sm={6} md={3} lg={3} key={index}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 0,
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s",
                  cursor: "pointer",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Stack
                  sx={{ position: "absolute", top: 4, left: 4, zIndex: 1 }}
                >
                  <Chip color="error" size="small" label={project.type} />
                </Stack>

                <Box
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    height: "200px",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      transition: "transform 0.7s ease",
                      "&:hover": {
                        transform: "scale(1.1)",
                      },
                    }}
                  />
                </Box>

                <CardContent sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ fontWeight: "bold", ml: -1 }}
                  >
                    {project.title}
                  </Typography>

                  <Stack
                    direction={"row"}
                    sx={{
                      position: "absolute",
                      bottom: 8,
                      left: 8,
                    }}
                  >
                    <Typography variant="body2" color="textSecondary">
                      6 Oct, 2024 22:13
                    </Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))} */}
        </Grid>
      </Container>
    </Box>
  );
};

export default FaceNews;
