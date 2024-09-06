import {
  Container,
  Box,
  Text,
  Stepper,
  Group,
  Center,
  Stack,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import Lottie from "lottie-react";
import animation from "../assets/sign.json";

const steps = [
  {
    label: "Step One",
    description: "Create an account (Sign Up)",
    title: "Sign Up",
    content: (
      <Text style={{ fontWeight: "lighter" }}>
        The first step is to create an account with us. You can{" "}
        <Link
          style={{
            color: "orange",
            marginRight: "5px",
            marginLeft: "5px",
          }}
          to={"/create-user"}
        >
          click here
        </Link>{" "}
        to sign up. Please note that details like your first name, last name,
        and email are required for registration. Once you've completed this
        step, you're all set. Congratulations! 🎉🥳🥂🎊
      </Text>
    ),
  },
  {
    label: "Step Two",
    description: "Email Verification & Sign In",
    title: "Email Verification & Sign In",
    content: (
      <Text style={{ fontWeight: "lighter" }}>
        Secondly, verify your email. After creating an account, you will receive
        a verification email at the address you provided. Click on the
        verification link in the email to confirm your account. Once you click
        the link, you will be redirected to the sign-in page, where you can log
        in using your email and password.
      </Text>
    ),
  },
  {
    label: "Step Three",
    description: "KYC Verification",
    title: "KYC Verification",
    content: (
      <Text style={{ fontWeight: "lighter" }}>
        After signing in, you will be required to complete a few forms. This
        step helps our algorithm authenticate your identity and allows us to
        better understand the types of jobs that suit you. Once your credentials
        have been verified, you can start requesting job opportunities.
      </Text>
    ),
  },
];

const ServiceDetails: React.FC = () => {
  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) =>
      current < steps.length - 1 ? current + 1 : current
    );
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  const isLargeScreen = useMediaQuery("(max-width: 760px)");

  return (
    <Box h={isLargeScreen ? "750px" : "600px"} bg={"white"}>
      <Container style={{ position: "relative" }} pt={30}>
        <Stack gap={0} mb={20} my={10}>
          <Text
            c={"#006400"}
            fw={700}
            style={{ textAlign: "center" }}
            size="25px"
            tt={"capitalize"}
            mb={10}
          >
            How to{" "}
            <span
              style={{ color: "orange", boxShadow: "inset 0 -3px 0 0 orange" }}
            >
              get started
            </span>
          </Text>
          <Text>Get started in just three easy steps... </Text>
        </Stack>

        {/* Steppers */}
        <Box>
          <Stepper
            color="green"
            size={isLargeScreen ? "sm" : "xl"}
            onStepClick={setActive}
            active={active}
            orientation={isLargeScreen ? "vertical" : "horizontal"}
          >
            {steps.map((step, index) => (
              <Stepper.Step
                key={index}
                label={step.label}
                description={step.description}
              >
                <Group
                  style={{
                    borderBottom: isLargeScreen ? "" : "1px solid green",
                  }}
                  justify="space-between"
                >
                  <Box
                    style={{
                      borderBottom: isLargeScreen ? "1px solid green" : "",
                    }}
                    maw={450}
                    h={280}
                    p={5}
                  >
                    <h2
                      style={{
                        backgroundColor: "green",
                        color: "white",
                        padding: "10px",
                        borderTopRightRadius: "15px",
                        fontSize: "20px",
                      }}
                    >
                      {step.title}
                    </h2>
                    {step.content}
                  </Box>
                </Group>
              </Stepper.Step>
            ))}
            <Box
              style={{
                display: isLargeScreen ? "none" : "visible",
                position: "absolute",
                right: 0,
                bottom: 0,
              }}
              w={450}
              h={250}
              p={5}
            >
              <Center h={"100%"}>
                <Lottie
                  style={{
                    height: 250,
                  }}
                  animationData={animation}
                />
              </Center>
            </Box>
          </Stepper>

          {/* Navigation Buttons */}
          <Group
            style={{
              position: "absolute",
              bottom: -75,
              justifyContent: "center",
              right: 0,
              left: 0,
            }}
            justify="center"
            mt={30}
          >
            <Box
              h={45}
              w={45}
              style={{
                borderRadius: "50%",
                alignContent: "center",
                textAlign: "center",
                justifyItems: "center",
                backgroundColor:
                  active === 0 ? "rgba(204, 204, 204, 1)" : "orange",
              }}
              onClick={prevStep}
            >
              <GrFormPreviousLink color="white" size={30} />
            </Box>
            <Box
              h={45}
              w={45}
              style={{
                borderRadius: "50%",
                alignContent: "center",
                textAlign: "center",
                justifyItems: "center",
                backgroundColor:
                  active === steps.length - 1
                    ? "rgba(204, 204, 204, 1)"
                    : "green",
              }}
              onClick={nextStep}
            >
              <GrFormNextLink color="white" size={30} />
            </Box>
          </Group>
        </Box>
      </Container>
    </Box>
  );
};

export default ServiceDetails;
