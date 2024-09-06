import { Box, Center, Grid, GridCol, Image, Loader, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React, { useEffect, useState } from "react";
import bgblub from "../assets/blob.svg";
import bgblubtwo from "../assets/blontwo.svg";
import { FaQuestionCircle } from "react-icons/fa";
import { MdCampaign } from "react-icons/md";
import { GiJourney } from "react-icons/gi";
import ReactPlayer from "react-player";

export const AboutUs: React.FC = () => {
  const isLargeScreen = useMediaQuery("(max-width: 760px)");
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [tookLong, setTookLong] = useState(false);

  useEffect(() => {
    const timer = setTimeout(()=> { 
      setTookLong(true);
    }, 60000) 
    return() => clearTimeout(timer)
  }, []);

  const handleVideoReady = () => {
    setIsVideoReady(true);
  };

  const aboutUsContent = {
    sections: [
      {
        id: 1,
        color: "green",
        title: "Our Mission",
        content:
          "CrystalHouse connects talented individuals with opportunities, creating a platform where professionals and artisans achieve their goals.",
        icon: <FaQuestionCircle size={40} />,
      },
      {
        id: 2,
        color: "orange",
        title: "Who We Serve",
        content:
          "We cater to job seekers, artists, and skilled tradespeople, helping them showcase their expertise to the right audience.",
        icon: <MdCampaign size={40} />,
      },
      {
        id: 4,
        color: "yellow",
        title: "Empowering Your Journey",
        content:
          "We support your unique journey by providing resources that help your skills and talents shine in a competitive market.",
        icon: <GiJourney size={40} />,
      },
    ],
  };

  return (
    <Box
      id="about"
      bg={"#AFFCB3"}
      h={isLargeScreen ? "" : "600px"}
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* The blob overlay */}
      <Box
        className="blobOne"
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
        className="blobTwo"
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
        className="blobThree"
        style={{
          position: "absolute",
          left: isLargeScreen ? -200 : 250,
          bottom: isLargeScreen ? -200 : -350,
          zIndex: 1,
        }}
      >
        <Image h={500} width={900} src={bgblubtwo} />
      </Box>

      {/* Main content */}
      <Box
        h={"100%"}
        mx={"5%"}
        style={{
          zIndex: 2,
          position: "relative",
        }}
      >
        <Grid>
          <GridCol h={"600px"} span={isLargeScreen ? 12 : 6}>
            <Box>
              <Text
                my={10}
                variant="gradient"
                gradient={{
                  from: isLargeScreen ? "white" : "green",
                  to: "black",
                }}
                size="30px"
                fw={700}
              >
                About Crystal House
              </Text>

              {aboutUsContent.sections.map((data) => (
                <Box key={data.id} my={30}>
                  <Grid
                    h={isLargeScreen ? "160px" : "150px"}
                    c={data.color}
                    style={{
                      backgroundColor: "white",
                      opacity: 0.8,
                      borderRight: `10px solid` + data.color,
                    }}
                  >
                    <GridCol
                      style={{
                        borderTopRightRadius: "50%",
                      }}
                      bg={data.color}
                      h={"140px"}
                      span={4}
                    >
                      <Center c={"white"} h={"100%"}>
                        {data.icon}
                      </Center>
                    </GridCol>
                    <GridCol span={8}>
                      <Grid px={10}>
                        <GridCol>
                          <Text fw={700}>{data.title}</Text>
                        </GridCol>
                        <GridCol>
                          <Text size={isLargeScreen ? "xs" : "sm"}>
                            {data.content}
                          </Text>
                        </GridCol>
                      </Grid>
                    </GridCol>
                  </Grid>
                </Box>
              ))}
            </Box>
          </GridCol>
          {/* Vide section */}
          <GridCol
            // my={isLargeScreen && "30px"}
            h={isLargeScreen ? "350px" : "600px"}
            span={isLargeScreen ? 12 : 6}
          >
            <Center h={"100%"}>
              {!isVideoReady && (
                <Box
                  style={{
                    width: "100%",
                    height: "300px",
                    backgroundColor: tookLong ? 'rgba(0,0,0,0.8)' :  "black",
                    color: "white",
                  }}
                >
                  <Center h={"100%"}>
                    {tookLong ? (
                      <>
                        <Text style={{
                          textAlign: 'center'
                        }} p={15}>
                          Video took too long to Load. Please throw away that sim card
                          
                        </Text>
                      </>
                    ) : (
                      <>
                        <Loader color="green" />
                        <Text fw={900} mx={5}>
                          Please wait, Loading video...
                        </Text>
                      </>
                    )}
                  </Center>
                </Box>
              )}
              <Box
                style={{
                  width: "100%",
                  height: "300px",
                  display: isVideoReady ? "block" : "none",
                }}
              >
                <ReactPlayer
                  controls={true}
                  width="100%"
                  height="300px"
                  url={"https://www.youtube.com/watch?v=0ZMjIKw2nss"}
                  onReady={handleVideoReady}
                />
              </Box>
            </Center>
          </GridCol>
        </Grid>
      </Box>
    </Box>
  );
};
