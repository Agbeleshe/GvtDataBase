import React from "react";
import Lottie from "lottie-react";
import animationData from "../../assets/fxnzJYBEy5.json";
import imgCircle from "../../assets/circle.png";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";
import { Box, Center, Text} from "@mantine/core";

export const HomeHero: React.FC = () => {
  const md = useMediaQuery("(max-width: 768px)");

  return (
    <Box
      mx={"5%"}
      style={{
        height: md ? "800px" : "550px",
        display: md ? "block" : "flex",
        gap: md ? 50 : 0,
      }}
    >
      <Center
        style={{
          flex: 1,
          justifyContent: "flex-start",
        }}
        className="flex-1 flex items-center justify-start"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            // gap: "1.25rem", // 5 * 0.25rem (the default size for Tailwind's spacing scale)
          }}
          // className="flex-col flex gap-5"
        >
          <h1
            style={{
              textTransform: "capitalize",
              fontSize: "2rem",
              fontWeight: "800px",
            }}
          >
            Looking for a Job? <br />
            welcome to the <br style={{ display: md ? "block" : "none" }} />
            future of
            <span
              style={{
                color: "green",
              }}
            >
              <div
                style={{
                  position: "relative",
                  color: "green",
                }}
                className="relative"
              >
                <img
                  style={{
                    position: "absolute",
                    top: "-83px",
                    left: "-30px",
                    width: "210px",
                  }}
                  src={imgCircle}
                  alt="Nigeria"
                />
                nigeria's
              </div>
            </span>
            employment.
          </h1>

          <Text
            mb={"15px"}
            style={{
              fontWeight: "lighter",
            }}
          >
            Welcome to CrystalHouse, where talent meets opportunity! Whether you
            have professional qualifications or unique skills like singing or
            catering, CrystalHouse connects you with the right audience. Join us
            today and let your talents shine in the spotlight they deserve!
          </Text>
          <Link
            style={{
              border: "2px sold green",
              color: " white",
              backgroundColor: "green",
              textDecoration: "none",
              textAlign: "center",
              padding: "5px",
              borderRadius: "10px",
            }}
            to={"/create-user"}
          >
            Click here to register
          </Link>
        </div>
      </Center>

      <Center
        style={{
          flex: 1,
        }}
      >
        <div>
          <Lottie
          style={{
            height: md ?  '350px' : '450px',
           
          }}
           animationData={animationData} />
        </div>
      </Center>
    </Box>
  );
};
