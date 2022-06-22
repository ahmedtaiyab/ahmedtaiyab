import React from "react";
import {
  createStyles,
  Text,
  Container,
  ActionIcon,
  Group,
} from "@mantine/core";
import Image from "next/image";
import { BrandTwitter, BrandYoutube, BrandInstagram } from "tabler-icons-react";
import Logo from "../../assets/logo.png";

const useStyles = createStyles((theme) => ({
  footer: {
    paddingTop: theme.spacing.xl * 2,
    paddingBottom: theme.spacing.xl * 2,
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan("xs")]: {
      paddingTop: theme.spacing.xl,
    },
  },

  logo: {
    maxWidth: 200,

    [theme.fn.smallerThan("sm")]: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  },

  description: {
    marginTop: 15,

    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
      textAlign: "center",
    },
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
      alignItems: "center",
    },
  },

  groups: {
    display: "flex",
    flexWrap: "wrap",

    [theme.fn.smallerThan("sm")]: {
      textAlign: "center",
    },

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
      textAlign: "center",
    },
  },

  wrapper: {
    width: 180,

    [theme.fn.smallerThan("xs")]: {
      margin: "20px 0",
    },
  },

  link: {
    display: "block",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[6],
    fontSize: theme.fontSizes.sm,
    paddingTop: 3,
    paddingBottom: 3,

    "&:hover": {
      textDecoration: "underline",
    },

    [theme.fn.smallerThan("sm")]: {
      textAlign: "center",
      fontSize: 12,
    },

    [theme.fn.smallerThan("xs")]: {
      textAlign: "center",
    },
  },

  title: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    marginBottom: theme.spacing.xs / 2,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,

    [theme.fn.smallerThan("sm")]: {
      textAlign: "center",
      fontSize: 15,
    },

    [theme.fn.smallerThan("xs")]: {
      textAlign: "center",
    },
  },

  afterFooter: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,
    borderTop: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[2]
    }`,

    [theme.fn.smallerThan("sm")]: {
      flexDirection: "column",
    },
  },

  social: {
    [theme.fn.smallerThan("sm")]: {
      marginTop: theme.spacing.xs,
    },
  },

  logoWrapper: {
    width: 200,
    height: "auto",

    [theme.fn.smallerThan("sm")]: {
      width: 200,
      marginBottom: "40px",
    },

    [theme.fn.smallerThan("xs")]: {
      width: 180,
      marginBottom: "10px",
    },
  },
}));

const data = [
  {
    title: "Quick Links",
    links: [
      {
        link: "/lace",
        label: "Laces",
      },
      {
        link: "/suits",
        label: "Suits",
      },
      {
        link: "/accessories",
        label: "Accessories",
      },
      {
        link: "/fabrics",
        label: "Plain Fabrics",
      },
    ],
  },
  {
    title: "Find By",
    links: [
      {
        link: "/sales",
        label: "Top Sales",
      },
      {
        link: "/featured",
        label: "Top Featured",
      },
      {
        link: "/arrivals",
        label: "Top New Arrivals",
      },
    ],
  },
  {
    title: "Other",
    links: [
      {
        link: "/contact",
        label: "Contact Us",
      },
    ],
  },
];

export function Footer() {
  const { classes } = useStyles();

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logoWrapper}>
          <Image
            src={Logo}
            alt="website-logo"
            quality={100}
            layout="responsive"
          />
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color="dimmed" size="xs">
          © 2022 Ahmed Taiyyab. All rights reserved.
        </Text>

        <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon size="lg">
            <BrandTwitter size={18} />
          </ActionIcon>
          <ActionIcon size="lg">
            <BrandYoutube size={18} />
          </ActionIcon>
          <ActionIcon size="lg">
            <BrandInstagram size={18} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
