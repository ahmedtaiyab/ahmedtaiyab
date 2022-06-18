import React from "react";
import {
  createStyles,
  Header,
  Group,
  Burger,
  Container,
  Text,
} from "@mantine/core";
import Link from "next/link";

import Image from "next/image";
import { useBooleanToggle } from "@mantine/hooks";

import Logo from "../../assets/logo.png";

const useStyles = createStyles((theme) => ({
  header: {
    borderBottom: 0,
  },

  inner: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: 280,

    [theme.fn.smallerThan("md")]: {
      flexDirection: "row",
      justifyContent: "space-between",
      height: 150,
    },
  },

  links: {
    marginTop: 40,
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: theme.colors.textColor,
    fontSize: theme.fontSizes.lg,
    fontWeight: 600,
    "&:hover": {
      textDecorationLine: "underline",
      color: theme.colors.hoverTextColor,
    },
  },

  linkLabel: {
    marginRight: 5,
  },

  logoWrapper: {
    width: 300,
    height: "auto",

    [theme.fn.smallerThan("sm")]: {
      width: 150,
    },
  },
}));

const links = [
  {
    label: "Plain Fabrics",
    link: "/fabrics",
  },
  {
    label: "Lace",
    link: "/lace",
  },
  {
    label: "Suits",
    link: "/suits",
  },
  {
    label: "Accessories",
    link: "/accessories",
  },
  {
    label: "About",
    link: "About Us",
  },
  {
    label: "Contact",
    link: "Contact ",
  },
];

export function HeaderComponent({ handleToggle }) {
  const [opened, toggleOpened] = useBooleanToggle(false);

  const { classes } = useStyles();

  const items = links.map((link) => {
    return (
      <Link key={link} href={link.link}>
        <a key={link.label} href={link.link} className={classes.link}>
          {link.label}
        </a>
      </Link>
    );
  });

  return (
    <Header className={classes.header}>
      <Container>
        <div className={classes.inner}>
          <div className={classes.logoWrapper}>
            <Link href="/">
              <Image
                src={Logo}
                alt="website-logo"
                quality={100}
                layout="responsive"
              />
            </Link>
          </div>
          <Group spacing={40} className={classes.links}>
            {items}
          </Group>
          <Burger
            opened={opened}
            onClick={() => {
              toggleOpened();
              handleToggle(!opened);
            }}
            className={classes.burger}
            size="lg"
            color={"black"}
          />
        </div>
      </Container>
    </Header>
  );
}
