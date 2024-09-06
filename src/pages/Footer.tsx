import { Box, Center, Stack, Image, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Logo from "../assets/Logoo.svg";
import { FaXTwitter, FaLinkedin, FaFacebook } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";
import { SiDailydotdev } from "react-icons/si";

const Footer = () => {
  const isLargeScreen = useMediaQuery("(max-width: 760px)");

  return (
    <Box bg={"#006400"} h={isLargeScreen ? "250px" : "300px"}>
      <Box h={"100%"}>
        <Center h={"100%"}>
          <Stack
            style={{
              textAlign: "center",
            }}
            c={"white"}
          >
            <img style={{
              alignSelf: 'center'

            }} width={ isLargeScreen ? 60 : 100} src={Logo} alt="Conpany Logo" />

            <Text>Our socials:</Text>
            <Box
              style={{
                display: "flex",
                gap: 20,
                alignSelf: 'center'
              }}
            >
              <FaXTwitter />
              <FaFacebook />
              <FaLinkedin />
              <SiDailydotdev />
              <BsDiscord />
            </Box>
            <Box
              style={{
                display: "flex",
                gap: 10,
          
                alignItems: 'center',
              }}
            >
              <FaPhone /> <Text> Contact: 080 000 00 000</Text>{" "}
            </Box>
          </Stack>
        </Center>
      </Box>
    </Box>
  );
};
export default Footer;
