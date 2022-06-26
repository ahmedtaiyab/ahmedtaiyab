import React from "react";
import Link from "next/link";
import { Grid, Text, BackgroundImage, Center, Box } from "@mantine/core";

import styles from "./styles.module.css";

const Categories = ({ categories }) => {
  return (
    <>
      <Center mt={50}>
        <Text className={styles.heading}>FEATURED CATEGORIES</Text>
      </Center>
      <Grid justify="space-evenly" className={styles.container}>
        {categories?.map(({ title, categoryImages, slug }, index) => (
          <Grid.Col span={6} md={4} sm={4} xs={4} lg={3} key={slug}>
            <div
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-delay={index * 100}
              data-aos-mirror="true"
              data-aos-offset="50"
            >
              <Link href={slug === "plain-fabrics" ? "/fabrics" : slug}>
                <BackgroundImage
                  className={styles.backgroundImage}
                  src={categoryImages[0]}
                >
                  <Box className={styles.overlay} />
                  <Center className={styles.center} p={"xl"}>
                    <Text className={styles.title}>{title}</Text>
                  </Center>
                </BackgroundImage>
              </Link>
            </div>
          </Grid.Col>
        ))}
      </Grid>
    </>
  );
};

export default Categories;
