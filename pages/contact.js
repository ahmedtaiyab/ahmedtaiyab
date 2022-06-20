import React from "react";
import {
  Paper,
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  SimpleGrid,
  createStyles,
  ActionIcon,
  Stack,
} from "@mantine/core";
import Head from "next/head";
import { Phone, CurrentLocation, BrandGmail } from "tabler-icons-react";

import Layout from "../components/Layout/Layout";

const useStyles = createStyles((theme) => {
  const BREAKPOINT = theme.fn.smallerThan("sm");

  return {
    paper: {
      width: "90vw",
      margin: "20px auto",
    },

    wrapper: {
      display: "flex",
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
      borderRadius: theme.radius.lg,
      padding: 4,
      border: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[8]
          : theme.colors.gray[2]
      }`,

      [BREAKPOINT]: {
        flexDirection: "column",
      },
    },

    form: {
      boxSizing: "border-box",
      flex: 1,
      padding: theme.spacing.xl,
      paddingLeft: theme.spacing.xl * 2,
      borderLeft: 0,

      [BREAKPOINT]: {
        padding: theme.spacing.md,
        paddingLeft: theme.spacing.md,
      },
    },

    fields: {
      marginTop: -12,
    },

    fieldInput: {
      flex: 1,

      "& + &": {
        marginLeft: theme.spacing.md,

        [BREAKPOINT]: {
          marginLeft: 0,
          marginTop: theme.spacing.md,
        },
      },
    },

    fieldsGroup: {
      display: "flex",

      [BREAKPOINT]: {
        flexDirection: "column",
      },
    },

    contacts: {
      display: "flex",
      flexDirection: "column",
      borderRadius: theme.radius.lg - 2,
      backgroundColor: "black",
      border: "1px solid transparent",
      padding: theme.spacing.xl,
      flex: "0 0 280px",

      [BREAKPOINT]: {
        marginBottom: theme.spacing.sm,
        paddingLeft: theme.spacing.md,
      },
    },

    title: {
      marginBottom: theme.spacing.xl * 1.5,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,

      [BREAKPOINT]: {
        marginBottom: theme.spacing.xl,
      },
    },

    control: {
      backgroundColor: "rgb(241, 212, 44)",

      "&:hover": {
        backgroundColor: "rgb(206, 177, 17)",
      },

      [BREAKPOINT]: {
        flex: 1,
      },
    },

    actionIcon: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      width: "100%",
    },

    icon: {
      width: 30,
      height: 30,

      [BREAKPOINT]: {
        width: 25,
        height: 25,
      },
    },
  };
});

export default function Contact() {
  const { classes } = useStyles();

  return (
    <div>
      <Head>
        <title>Ahmed Taiyab | Contact Us</title>
        <meta name="description" content="Contact Us" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Paper className={classes.paper} shadow="md" radius={"lg"}>
          <div className={classes.wrapper}>
            <div className={classes.contacts}>
              <Text
                size="lg"
                weight={700}
                className={classes.title}
                sx={{ color: "#fff" }}
              >
                Contact information
              </Text>

              <Stack
                style={{
                  flexGrow: 1,
                  justifyContent: "space-around",
                }}
              >
                <ActionIcon
                  className={classes.actionIcon}
                  variant="transparent"
                  size="lg"
                >
                  <Phone className={classes.icon} color="gold" />
                  <Stack ml={12} spacing={1} align="flex-start">
                    <Text size="xs" color="rgba(255, 255, 255, 0.801)">
                      Phone
                    </Text>
                    <Text size="xs" color="#fff">
                      +91-9867265816
                    </Text>
                  </Stack>
                </ActionIcon>
                <ActionIcon
                  className={classes.actionIcon}
                  variant="transparent"
                  size="lg"
                >
                  <CurrentLocation className={classes.icon} color="gold" />
                  <Stack ml={12} spacing={1} align="flex-start">
                    <Text size="xs" color="rgba(255, 255, 255, 0.801)">
                      Location
                    </Text>
                    <Text size="xs" color="#fff" align="left" lineClamp={2}>
                      lorem ipsum dolor set amit quolezier.
                    </Text>
                  </Stack>
                </ActionIcon>
                <ActionIcon
                  className={classes.actionIcon}
                  variant="transparent"
                  size="lg"
                >
                  <BrandGmail className={classes.icon} color="gold" />
                  <Stack ml={12} spacing={1} align="flex-start">
                    <Text size="xs" color="rgba(255, 255, 255, 0.801)">
                      Email
                    </Text>
                    <Text size="xs" color="#fff">
                      ahmedtaiyab@gmail.com
                    </Text>
                  </Stack>
                </ActionIcon>
              </Stack>
            </div>

            <form
              className={classes.form}
              onSubmit={(event) => alert("Form Submiited")}
            >
              <Text size="lg" weight={700} className={classes.title}>
                Get in touch
              </Text>

              <div className={classes.fields}>
                <SimpleGrid
                  cols={2}
                  breakpoints={[{ maxWidth: "sm", cols: 1 }]}
                >
                  <TextInput label="Your name" placeholder="Your name" />
                  <TextInput
                    label="Your email"
                    placeholder="hello@mantine.dev"
                    required
                  />
                </SimpleGrid>

                <TextInput
                  mt="md"
                  label="Subject"
                  placeholder="Subject"
                  required
                />

                <Textarea
                  mt="md"
                  label="Your message"
                  placeholder="Please include all relevant information"
                  minRows={3}
                />

                <Group position="right" mt="md">
                  <Button type="submit" className={classes.control}>
                    Send message
                  </Button>
                </Group>
              </div>
            </form>
          </div>
        </Paper>
      </Layout>
    </div>
  );
}
