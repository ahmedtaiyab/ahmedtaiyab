import React from "react";
import { Grid, Text, BackgroundImage, Center, Box } from "@mantine/core";

import styles from "./styles.module.css";

const Categories = ({ categories }) => {
  return (
    <>
      <Center mt={50}>
        <Text className={styles.heading}>FEATURED CATEGORIES</Text>
      </Center>
      <Grid grow gutter={60} className={styles.container}>
        {categories?.map(({ title, categoryImages, slug }) => (
          <Grid.Col md={6} sm={6} xs={12} lg={3} key={slug}>
            <BackgroundImage
              className={styles.backgroundImage}
              src={categoryImages[0]}
            >
              <Box className={styles.overlay} />
              <Center className={styles.center} p={"xl"}>
                <Text className={styles.title}>{title}</Text>
              </Center>
            </BackgroundImage>
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
};

export default Categories;
