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
    title: `"จ๊ะ คันหู" เฉลย ไปงานวันเกิด "ใบเฟิร์น" ได้ยังไง พร้อมคำถามที่หลายคนอยากรู้`,

    link: "#",
    type: "ต่างประเทศ",
    image:
      "https://static.thairath.co.th/media/dFQROr7oWzulq5Fa6rBlITF9gJCOK8jfu0KYpHZDVaEuMalqghIHM1XMYmDENPRicMC.webp",
    delay: "0",
    date: "7 ต.ค. 15:14",
  },

  {
    title: `“มิ้นชิ” ขึ้นแท่นนางเอกป้ายแดงสองเรื่องติด เมินความรักขอโฟกัสงาน-เรียน เผยสเปกเกาหลีเกาใจ`,

    link: "#",
    type: "ต่างประเทศ",
    image:
      "https://static.thairath.co.th/media/dFQROr7oWzulq5Fa6rBlHoNA0OLSXdtaWh97vA1sYLaatFej4Vg1wWMa9iuQlbLgbXh.webp",
    delay: "0",
    date: "7 ต.ค. 15:30",
  },
];

const listNews2 = [
  {
    title: `“เช็กอินเที่ยวตามรอยน้องหมีเนย” เติมสุข ฮีลใจ กับที่เที่ยว กิน มู ในกรุงเทพฯ ย่านเมืองเก่า`,

    link: "#",
    type: "ต่างประเทศ",
    image:
      "https://static.thairath.co.th/media/dFQROr7oWzulq5Fa6rBrKmIWbK6W1EBdPek2Z3r4mxXKR56zUQ6ogrK6lK2EFKhfYnr.webp",
    delay: "0",
    date: "7 ต.ค. 15:14",
  },

  {
    title: `รีวิว Ocean Park ฮ่องกง 3 วัน 2 คืน แหล่งท่องเที่ยวครอบครัว เกาะสวรรค์ที่เติมฝันให้แก่เด็กทั่วโลก`,

    link: "#",
    type: "ต่างประเทศ",
    image:
      "https://static.thairath.co.th/media/B6FtNKtgSqRqbnNsbQVnUVlU6gTE0LQPy4lJB7UYCowKYK6LTT9MXgkl6LkbEcuZBFxza.webp",
    delay: "0",
    date: "7 ต.ค. 15:30",
  },
];

const FaceNews = () => {
  return (
    <Box id="projects" sx={{ py: 4, backgroundColor: "#f5f5f5" }}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
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
                pt: 1,
                pr: 1,
                pl: 1,
              }}
            >
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
                      บันเทิง
                    </Typography>

                    <Typography
                      sx={{ fontWeight: "bold", cursor: "pointer" }}
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
                      mt: -2,
                    }}
                  >
                    <Box
                      sx={{
                        overflow: "hidden",
                        height: "300px",
                        position: "relative",
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={
                          "https://static.thairath.co.th/media/dFQROr7oWzulq5Fa6rBlITGCXJ8ccVqmTQjHY6kMnwaDLGtRcEFZ3hzLF2lrJvUGTFS.webp"
                        }
                        alt={"ข่าวการเมือง"}
                        sx={{
                          height: "100%",
                          width: "100%",
                          borderRadius: 1,
                          objectFit: "cover",
                          position: "relative",
                          transition: "transform 0.7s ease",
                          "&:hover": {
                            transform: "scale(1.05)",
                          },
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
                          อุ้ม ลักขณา อวดโมเมนต์ฉลองครบรอบรัก 1 ปีกับแฟน
                          แคปชั่นมีบอกใบ้ชื่อ
                        </Typography>
                      </Box>
                    </Box>
                  </Card>
                </Grid>
                {listNews.map((project, index) => (
                  <Grid item xs={6} sm={6} key={index}>
                    <Card
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        borderRadius: 0,
                        overflow: "hidden",
                        // "&:hover": { transform: "scale(1.01)" },
                        // transition: "transform 0.3s",
                        position: "relative",
                        cursor: "pointer",
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="150"
                        image={project.image}
                        alt={project.title}
                        sx={{
                          transition: "transform 0.7s ease",
                          "&:hover": {
                            transform: "scale(1.05)",
                          },
                        }}
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography
                          variant="caption"
                          component="div"
                          sx={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            ml: -1,
                          }}
                        >
                          {project.title}
                        </Typography>
                        <Stack
                          sx={{ position: "absolute", bottom: 3, left: 8 }}
                        >
                          <Typography variant="caption" color="textSecondary">
                            {project.date}
                          </Typography>
                        </Stack>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Card>
          </Grid>

          {/* section 2 */}

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
                pt: 1,
                pr: 1,
                pl: 1,
              }}
            >
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
                      ท่องเที่ยว
                    </Typography>

                    <Typography
                      sx={{ fontWeight: "bold", cursor: "pointer" }}
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
                      mt: -2,
                    }}
                  >
                    <Box
                      sx={{
                        overflow: "hidden",
                        height: "300px",
                        position: "relative",
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={
                          "https://static.thairath.co.th/media/dFQROr7oWzulq5Fa6rBo790vN4nyNa50CsC7H7FK9ihEpdFkGFymAl7JFCJpWEm6MJ4.webp"
                        }
                        alt={"ข่าวการเมือง"}
                        sx={{
                          height: "100%",
                          width: "100%",
                          borderRadius: 1,
                          objectFit: "cover",
                          position: "relative",
                          transition: "transform 0.7s ease",
                          "&:hover": {
                            transform: "scale(1.05)",
                          },
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
                          5 ทริปฮีลใจใกล้กรุงเทพฯ เวลาน้อยก็เที่ยวได้ไม่ง้อวันลา
                        </Typography>
                      </Box>
                    </Box>
                  </Card>
                </Grid>
                {listNews2.map((project, index) => (
                  <Grid item xs={6} sm={6} key={index}>
                    <Card
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        borderRadius: 0,
                        overflow: "hidden",
                        // "&:hover": { transform: "scale(1.01)" },
                        // transition: "transform 0.3s",
                        position: "relative",
                        cursor: "pointer",
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="150"
                        image={project.image}
                        alt={project.title}
                        sx={{
                          transition: "transform 0.7s ease",
                          "&:hover": {
                            transform: "scale(1.05)",
                          },
                        }}
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography
                          variant="caption"
                          component="div"
                          sx={{
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            ml: -1,
                          }}
                        >
                          {project.title}
                        </Typography>
                        <Stack
                          sx={{ position: "absolute", bottom: 3, left: 8 }}
                        >
                          <Typography variant="caption" color="textSecondary">
                            {project.date}
                          </Typography>
                        </Stack>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FaceNews;
