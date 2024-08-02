import React, { useState, useEffect } from "react";
import { AppShell, Box, Burger, NavLink } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import {
  IconBackground,
  IconHome2,
  IconInfoSquareRounded,
  IconShieldCheckFilled,
  IconDeviceMobileMessage,
  IconLogin2,
  IconWorldUpload,
  IconLogout2,
} from "@tabler/icons-react";

import Logo from "../assets/Logoo.svg";
// Extend or use the existing NavbarProps from Mantine
interface NavBarProps {
  children: React.ReactNode;
}

export const NavBar: React.FC<NavBarProps> = ({ children }) => {
  const [mobileOpen, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpen, { toggle: toggleDesktop }] = useDisclosure(true);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(0);
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");

  const navBarItems = [
    { icon: IconHome2, label: "Home", to: "/", des: "Hey, Click me" },

    {
      icon: IconInfoSquareRounded,
      label: "About",
      to: "/",
      des: "Hey, Click me",
    },
    {
      icon: IconShieldCheckFilled,
      label: "Services",
      to: "/",
      des: "Hey, Click me",
    },
    {
      icon: IconDeviceMobileMessage,
      label: "Contact",
      to: "/",
      des: "Hey, Click me",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppShell
      header={{ height: 60 }}
      aside={{
        width: { sm: "", lg: "" },
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpen, desktop: desktopOpen },
      }}
    >
      <AppShell.Header
        withBorder={false}
        px={"5%"}
        style={{
          display: "flex",
          justifyContent: "space-between",
          textAlign: "center",
          alignItems: "center",
          backdropFilter: "blur(2.5px)",
          backgroundColor: scrolled ? "rgba(0, 100, 0, 0.5)" : "transparent",
          transition: "background-color 0.8s ease",
          color: scrolled ? "white" : "black",
        }}
      >
        <img
          className="rotateYInfinite"
          style={{
            borderRadius: "50px",
            backgroundColor: scrolled ? "" : "transparent",
            width: isLargeScreen ? 60 : 50,
          }}
          src={Logo}
          alt="Logo"
        />
        <Box className="sm-hidden">
          <div style={{ gap: "20px" }} className="sm-hidden">
            {navBarItems.map((items, index) => (
              <NavLink
                href={items.to}
                active={index === active}
                label={items.label}
                style={{ backgroundColor: "transparent" }}
                // leftSection={<items.icon size="1.5rem" stroke={1.5} />}
                onClick={() => setActive(index)}
                color="rgba(191, 191, 191, 1)"
              />
            ))}
          </div>
        </Box>

        <div style={{ gap: "20px" }} className="sm-hidden sm-hidden">
          <NavLink
            style={{
              background: "green",
              color: "white",
              borderRadius: "10px",
              width: "100px",
              textAlign: "center",
            }}
            href="/create-user"
            label="Register"
            onClick={() => setActive(20)}
          />
          <NavLink
            style={{
              background: "white",
              color: "green",
              borderRadius: "10px",
              width: "100px",
              textAlign: "center",
              border: "0.5px solid green ",
            }}
            href="/login"
            label="Login"
          />
        </div>

        <Burger
          opened={mobileOpen}
          onClick={toggleMobile}
          hiddenFrom="sm"
          size="sm"
          color={scrolled ? "white" : "black"}
        />
      </AppShell.Header>
      <AppShell.Aside
        hiddenFrom="sm"
        style={{
          backdropFilter: "blur(1.5px)", // Added blur effect
          backgroundColor: "rgba(255, 255, 255, 0.1)", // Added background color with transparency
        }}
      >
        <Box
          style={{
            backgroundColor: "white",
            height: "100vh",
            width: "60%",
            position: "absolute",
            right: "0px",
            borderTop: "1px solid gray",
          }}
        >
          Nav Bar
        </Box>
      </AppShell.Aside>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};
