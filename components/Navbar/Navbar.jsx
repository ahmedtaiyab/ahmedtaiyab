import React, { useState } from "react";
import Link from "next/link";
import {
  createStyles,
  Navbar,
  Group,
  ScrollArea,
  Stack,
  Text,
} from "@mantine/core";

const useStyles = createStyles((theme, _params, getRef) => {
  const icon = getRef("icon");
  return {
    header: {
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
      borderBottom: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[4]
          : theme.colors.gray[2]
      }`,
    },

    links: {
      height: "70vh",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
  };
});

const data = [
  { link: "/fabrics", label: "Plain Fabrics" },
  { link: "/lace", label: "Laces" },
  { link: "/suits", label: "Suits" },
  { link: "/accessories", label: "Accessories" },
];

export function NavbarComponent() {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState("Billing");

  return (
    <Navbar p="md">
      <Navbar.Section grow component={ScrollArea}>
        <Stack className={classes.links} spacing={0}>
          {data?.map((item) => (
            <Link key={item?.link} href={item?.link}>
              <Text>{item.label}</Text>
            </Link>
          ))}
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
}
