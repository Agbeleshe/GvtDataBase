import { Box, Container, Image, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";
import bgblub from "../assets/blob.svg";
import bgblubtwo from "../assets/blontwo.svg";

export const AboutUs: React.FC = () => {
  const isLargeScreen = useMediaQuery("(max-width: 760px)");
  return (
    <Box
      bg={"#AFFCB3"}
      h={"100vh"}
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* The blob overlay */}
      <Box
        style={{
          position: "absolute",
          left: -100,
          top: -10,
          zIndex: 1,
        }}
      >
        <Image h={300} width={400} src={bgblub} />
      </Box>
      <Box
        style={{
          position: "absolute",
          right: -200,
          top: 200,
          zIndex: 1,
        }}
      >
        <Image h={500} width={900} src={bgblubtwo} />
      </Box>
      <Box
        style={{
          position: "absolute",
          left: isLargeScreen ? -200: 250,
          bottom: isLargeScreen ? -200 : -350,
          zIndex: 1,
        }}
      >
        <Image h={500} width={900} src={bgblubtwo} />
      </Box>

      {/* Main content */}
      <Container
        style={{
          zIndex: 2,
          position: "relative",
        }}
      >
        <Box
          style={{
            textAlign: "center",
          }}
          mt={50}
        >
          <Text
            size="30px"
            fw={900}
            variant="gradient"
            gradient={{
              from: "green",
              to: "orange",
              deg: 90,
            }}
            
          >
            About Crystal House
          </Text>
        </Box>
      </Container>
    </Box>
  );
};
