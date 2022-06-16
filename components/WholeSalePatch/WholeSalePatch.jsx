import React from "react";
import Image from "next/image";
import { Stack, Text, Button, Title, Grid, Box } from "@mantine/core";

import styles from "./styles.module.css";

const WholeSalePatch = () => {
  return (
    <>
      <Grid className={styles.container}>
        <Grid.Col lg={12} md={12} sm={12} xs={12}>
          <Stack spacing={"md"} align="center">
            <Title order={1} className={styles.title}>
              WE WHOLESALE & MANUFACTURE OUR PRODUCTS ACROSS THE CITY
            </Title>
            <Text className={styles.description}>
              Are you interested getting into B2B business with us - we are
              happy to assist
            </Text>
            <Button className={styles.button}>INQUIRE NOW</Button>
          </Stack>
        </Grid.Col>
      </Grid>
      <Grid gutter={0.5} className={styles.imageContainer}>
        <Grid.Col lg={6} md={6} sm={6}>
          <Image
            src={"/uploads/lace.jpg"}
            alt={"image-one"}
            quality={100}
            layout="responsive"
            objectFit="cover"
            width={"100%"}
            height={"50%"}
          />
        </Grid.Col>
        <Grid.Col lg={6} md={6} sm={6}>
          <Image
            src={"/uploads/suits2.jpg"}
            alt={"image-two"}
            quality={100}
            layout="responsive"
            objectFit="cover"
            objectPosition={"100% 10%"}
            width={"100%"}
            height={"50%"}
          />
        </Grid.Col>
      </Grid>
    </>
  );
};

export default WholeSalePatch;
