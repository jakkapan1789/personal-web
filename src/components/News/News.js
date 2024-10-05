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
    title:
      "ถนนช้างคลาน จ.เชียงใหม่ น้ำท่วมเกือบมิดรถทั้งคัน คาดเจ้าของไม่รู้เส้นทาง",
    link: "#",
    type: "ภาคเหนือ",
    image:
      "https://static.thairath.co.th/media/dFQROr7oWzulq5Fa6rBj3L8wdYl1ZMTGdAI85xJKpmLlHUVhc7QBN6mrkelvrGrf46v.webp",
    delay: "0",
  },

  {
    title: `"แพท - แจ็ก แปปโฮ" เข้าพบตำรวจแสดงความบริสุทธิ์ใจ หลังเคยไลฟ์สดกับแม่ตั๊ก`,

    link: "#",
    type: "ทั่วไป",
    image:
      "https://static.thairath.co.th/media/dFQROr7oWzulq5Fa6rBj3L0nuin5BzFXJpPLoTzQgtHBn6UPQjsJbaII8i7eNxjVPUW.webp",
    delay: "300",
  },
  {
    title: `เชียงใหม่วิกฤติหนัก ระดับน้ำแม่ปิง "สะพานนวรัฐ" เพิ่มสูงสุดในรอบ 50 ปี`,

    link: "#",
    type: "ภาคเหนือ",
    image:
      "https://static.thairath.co.th/media/dFQROr7oWzulq5Fa6rBj3MiXpQdXXC7YCJX2ftu4uClFanAOegyyohJ1X07u0HIVMyo.webp",
    delay: "600",
  },
  {
    title: `อิสราเอลโจมตีทางอากาศถล่มพื้นที่ตอนใต้ของเลบานอน ปิดเส้นทางฮิซบอลเลาะห์ขนส่งอาวุธข้ามแดนซีเรีย`,

    link: "#",
    type: "ต่างประเทศ",
    image:
      "https://static.thairath.co.th/media/dFQROr7oWzulq5Fa6rBj3MiU3pSopYSkSKXJbufL9hVI1dXdjpL4EDfJF65jpGpG89B.webp",
    delay: "0",
  },
];

const News = () => {
  return (
    <Box id="projects" sx={{ py: 4, mt: 6, backgroundColor: "#f5f5f5" }}>
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          <Grid item xs={12} md={6}>
            <Card
              // data-aos="fade-up"
              // data-aos-duration="1200"
              sx={{
                height: "100%",
                borderRadius: 0,
                // transition: "transform 0.3s",
                // "&:hover": { transform: "scale(1.1)" },
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Stack sx={{ position: "absolute", top: 4, left: 4, zIndex: 1 }}>
                <Chip color="primary" size="small" label="การเมือง" />
              </Stack>

              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  height: { xs: "300px", sm: "500px" },
                }}
              >
                <CardMedia
                  component="img"
                  image={
                    "https://static.thairath.co.th/media/dFQROr7oWzulq5Fa6rBj2wU8UO7e4n3MnFmPbrxRH4rG8rZEvR4pzR4HOEN94P8sFDl.webp"
                  }
                  alt={"project.title"}
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
                  variant="h5"
                  component="div"
                  sx={{
                    fontWeight: "bold",
                    ml: -1,
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                  }}
                >
                  “อิ๊งค์” เตรียมนำไทย ผงาดเวทีอาเซียน สปป.ลาว-ปลื้ม Time
                  ยกให้เป็นผู้ทรงอิทธิพลแห่งอนาคต
                </Typography>

                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    ml: -1,
                  }}
                >
                  “จิรายุ” เผย นายกฯ ปลื้ม Time จัดให้เป็น 1
                  ในผู้นำทรงอิทธิพลแห่งอนาคต สร้างประวัติศาสตร์เป็นนายกฯ
                  หญิงที่อายุน้อยที่สุดในเอเชีย
                  อังคารนี้ขอนำชื่อประเทศไทยผงาดบนเวทีสุดยอดผู้นำอาเซียนที่
                  สปป.ลาว วันที่ 5 ต.ค. 2567 นายจิรายุ ห่วงทรัพย์
                  ที่ปรึกษาของนายกรัฐมนตรี เปิดเผยว่า
                  การประชุมสุดยอดผู้นำอาเซียนที่จะจัดขึ้นที่นครเวียงจันทน์ในสัปดาห์นี้
                  คึกคักเป็นพิเศษหลังจากสื่อมวลชนต่างประเทศให้ความสนใจน.ส.แพทองธาร
                  ชินวัตร นายกรัฐมนตรีของไทย ซึ่งได้รับการจัดอันดับจากนิตยสาร
                  TIME ให้เป็นหนึ่งในผู้ทรงอิทธิพลแห่งอนาคต (Time 100 Next)
                  ประจำปีนี้ โดยการจัดอันดับครั้งนี้แบ่งออกเป็น 5 ประเภท ได้แก่
                  ผู้นำ (Leaders), ศิลปิน (Artists), ผู้สร้างปรากฏการณ์
                  (Phenoms), ผู้สร้างนวัตกรรม (Innovators) และผู้ให้การสนับสนุน
                  (Advocates) ซึ่งนายกรัฐมนตรีไทยติดอันดับในหมวด “ผู้นำ”
                  โดยน.ส.แพทองธารถือเป็นนายกรัฐมนตรีหญิงที่อายุน้อยที่สุดในเอเชีย
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

          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              {projects.map((project, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  key={index}
                  // data-aos="fade-up"
                  // data-aos-duration="1200"
                  // data-aos-delay="200"
                >
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

                    <CardContent
                      sx={{ display: "flex", flexDirection: "column" }}
                    >
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
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default News;
