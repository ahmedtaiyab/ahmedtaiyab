import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Grid, Text, Center, Stack, Group, Button, Box } from "@mantine/core";

import styles from "./styles.module.css";
import BlurImage from "../../assets/blurImage.png";

const Products = ({ products, heading, breakpoints }) => {
  return (
    <>
      {heading && (
        <Center mt={80}>
          <Text className={styles.heading}>{heading}</Text>
        </Center>
      )}
      <Grid justify="space-evenly" className={styles.container}>
        {products?.map(
          ({ title, price, images, slug, sale, discountPrice, date, type }) => (
            <Grid.Col
              span={6}
              lg={breakpoints?.lg}
              md={breakpoints?.md}
              sm={breakpoints?.sm}
              xs={breakpoints?.xs}
              key={slug}
            >
              <Box className={styles.imgContainer}>
                <Image
                  src={images[0]}
                  alt={slug}
                  quality={100}
                  layout="fill"
                  className={styles.image}
                  blurDataURL={BlurImage}
                  placeholder="blur"
                />
              </Box>
              <Box className={styles.contentContainer}>
                <Stack spacing={"xs"} mt={10}>
                  <Link href={type === "Lace" ? `/lace/${slug}` : "/"}>
                    <Text className={styles.title}>{title}</Text>
                  </Link>
                  <Group className={styles.priceContainer}>
                    {discountPrice && (
                      <Text className={styles.discountPrice}>
                        ₹{discountPrice}
                      </Text>
                    )}
                    <Text
                      style={{
                        textDecorationLine: sale ? "line-through" : "none",
                        textDecorationColor: "red",
                        textDecorationThickness: 2,
                        opacity: sale ? 0.8 : 1,
                      }}
                      className={styles.price}
                    >
                      ₹{price}
                    </Text>
                  </Group>
                  {sale && <Text className={styles.sale}>SALE</Text>}
                </Stack>
              </Box>
            </Grid.Col>
          )
        )}
      </Grid>
    </>
  );
};

export default Products;
