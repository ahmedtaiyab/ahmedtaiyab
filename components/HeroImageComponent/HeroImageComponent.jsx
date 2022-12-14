import React from "react";
import Link from "next/link";
import { Button, Grid, BackgroundImage, Center, Text } from "@mantine/core";

import styles from "./styles.module.css";

const HeroImageComponent = ({ image, title, description, scrollTo }) => {
  return (
    <Grid grow>
      <Grid.Col lg={12} md={12} sm={12} xs={12}>
        <BackgroundImage
          src={image}
          alt={"heroImage"}
          className={styles.container}
        >
          <Center p="md" className={styles.contentContainer}>
            <Text className={styles.title}>{title}</Text>
            <Text className={styles.description}>{description}</Text>
            <Link href={scrollTo ?? "/"}>
              <Button className={styles.button}>Explore Now</Button>
            </Link>
          </Center>
        </BackgroundImage>
      </Grid.Col>
    </Grid>
  );
};

export default HeroImageComponent;
