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
import { Link } from "react-router-dom";
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
  //Nav Bar
  const navBarItems = [
    {
      icon: IconHome2,
      label: "Home",
      to: "/",
      des: "Visit our home page",
      index: 0,
    },

    {
      icon: IconInfoSquareRounded,
      label: "About",
      to: "/about",
      des: "Find out more about us.",
      index: 1,
    },
    {
      icon: IconShieldCheckFilled,
      label: "Services",
      to: "/",
      des: "See what problem we are solving.",
      index: 2,
    },
    {
      icon: IconDeviceMobileMessage,
      label: "Contact",
      to: "/",
      des: "Reach out to us. We will be glad to hear form you.",
      index: 3,
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

  //this is for the text
  const NavColor = scrolled ? "rgba(255, 214, 214, 1)" : "green";

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
          backdropFilter: "blur(10px)",
          backgroundColor: scrolled ? "rgba(0, 100, 0, 0.5)" : "transparent",
          transition: "background-color 0.8s ease",
          color: scrolled ? "white" : "black",
        }}
      >
        <Link to={"/"}>
          <img
            className="rotateYInfinite"
            style={{
              borderRadius: "50px",
              // backgroundColor: scrolled ? "" : "transparent",
              width: isLargeScreen ? 60 : 50,
            }}
            src={Logo}
            alt="Logo of Comapny"
          />
        </Link>
        {/* Desktop nav bar */}
        <Box className="sm-hidden">
          <div style={{ gap: "20px" }} className="sm-hidden">
            {navBarItems.map((items, index) => (
              <NavLink
                href={items.to}
                active={index === active}
                label={items.label}
                style={{
                  borderBottom: index === active ? `1px solid ${NavColor}` : "",
                  backgroundColor: "transparent",
                  transition: "border-bottom 2s ease",
                }}
                // leftSection={<items.icon size="1.5rem" stroke={1.5} />}
                onClick={() => setActive(index)}
                color={NavColor}
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
            onClick={() => setActive(69)}
            href="/create-user"
            label="Register"
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
        onClick={toggleMobile}
        style={{
          backdropFilter: "blur(10px)", // Added blur effect
          backgroundColor: "rgba(255, 255, 255, 0.1)", // Added background color with transparency
        }}
      >
        {/* Mobile nav bar */}
        <Box
          style={{
            borderLeft: "5px solid green",
            backgroundColor: "rgba(240, 247, 241, 0.5)",
            height: "95vh",
            width: "60%",
            position: "absolute",
            right: "0px",
            // borderTop: "1px solid green",
          }}
        >
          {navBarItems.map((items) => (
            <NavLink
              py={20}
              px={10}
              href={items.to}
              active={items.index === active}
              label={items.label}
              description={items.des}
              style={{ borderBottom: "1px solid green" }}
              leftSection={<items.icon size="1.5rem" stroke={1.5} />}
              onClick={() => setActive(items.index)}
              color="green"
            />
          ))}

          <Box
            style={{
              position: "absolute",
              bottom: "50px",
              padding: "20px",
              gap: "20px",
              width: "100%",
            }}
          >
            <NavLink
              style={{
                background: "green",
                color: "white",
                borderRadius: "10px",
                width: "100%",
                textAlign: "center",
              }}
              href="/create-user"
              label="Register"
            />
            <NavLink
              style={{
                marginTop: "20px",
                background: "white",
                color: "green",
                borderRadius: "10px",
                width: "100%",
                textAlign: "center",
                border: "0.5px solid green ",
              }}
              href="/login"
              label="Login"
            />
          </Box>
        </Box>
      </AppShell.Aside>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
};
