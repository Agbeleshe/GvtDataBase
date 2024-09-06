import { Box, Center, Container, Grid, GridCol, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Lottie from "lottie-react";
import animationData from "../../assets/Job.json";
import animationData2 from "../../assets/dude.json";
import animationData3 from "../../assets/hands.json";

const Category = () => {
  const isLargeScreen = useMediaQuery("(max-width: 768px)");

  const data = [
    {
      id: 1,
      title: "Personalized Job Opportunities",
      body: "Easily find job fairs, hiring events, and opportunities in your local area with our geo-targeted job listings and event calendars",
      animation: animationData,
      color: "green",
    },
    {
      id: 2,
      title: "Mobile Accessibility",
      body: "Our responsive website ensures you can job hunt anytime, anywhere, on any device.",
      animation: animationData2,
      color: "yellow",
    },
    {
      id: 3,
      title: "Salary and Benefits Information",
      body: "Get a clear overview of the benefits offered by potential employers, so you can make decisions that are right for you and your future",
      animation: animationData3,
      color: "orange",
    },
  ];

  return (
    <Box
      p={isLargeScreen ? "5%" : "3%"}
      style={{
        maxHeight: isLargeScreen ? "1200px" : "500px",
        backgroundColor: "#006400",
        position: "relative",
        zIndex: 2,
      }}
    >
      <Container>
        {/* Title */}
        <Box
          px={10}
          mx={"auto"}
          maw={"550px"}
          style={{
            color: "white",

            position: "relative",
          }}
        >
          <Center
            p={"10"}
            style={{
              backgroundColor: "#006400",
              position: "absolute",
              textAlign: "center",
              display: "grid",
              top: "-90px",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            <Text maw={500} size="xl" fw={700}>
              Empower Your Career, Talent and Other Skill Set
            </Text>
            <Text size="sm">
              From Job Search to Showcasing Your Skill set...{" "}
            </Text>
          </Center>
        </Box>

        {/* Body */}
        <Box
          style={{
            marginTop: "20px",
            height: isLargeScreen ? "1200px" : "70vh",
          }}
        >
    <Center h={'100%'}>


          <Grid>
            {data.map((info) => (
              <GridCol
                style={{
                  justifyContent: "center",
                  display: "flex",
                  alignContent: "center",
                  alignItems: "center",
                }}
                key={info.id}
                h={isLargeScreen ? 350 : 400}
                span={isLargeScreen ? 12 : 4}
              >
                <Box
                  style={{
                    position: "relative",
                  }}
                  display={"grid"}
                  h={"280px"}
                >
                  <Box
                    style={{
                      borderTopLeftRadius: "10px",
                      borderTopRightRadius: "10px",
                    }}
                    bg={info.color}
                    h={"100%"}
                  >
                    <Lottie
                      style={{ width: "100%", height: "180px" }}
                      animationData={info.animation}
                    />
                  </Box>
                  <Box
                    px={20}
                    c={info.color}
                    style={{
                      textAlign: "center",

                      height: "100px",
                      backgroundColor: "white",
                      alignContent: "center",
                    }}
                  >
                    <Text fw={900} size="sm">
                      {info.title}
                    </Text>
                    <Text fw={500} size="13px">
                      {info.body}
                    </Text>
                  </Box>
                </Box>
              </GridCol>
            ))}
          </Grid>
          </Center>
        </Box>
      </Container>
    </Box>
  );
};
export default Category;
