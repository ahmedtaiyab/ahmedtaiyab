import React from "react";
import Image from "next/image";
import { Grid, Text, Center, Stack, Group } from "@mantine/core";

import styles from "./styles.module.css";
import BlurImage from "../../assets/blurImage.png";

const Products = ({ products, type, heading, breakpoints }) => {
  return (
    <>
      {heading && (
        <Center mt={80}>
          <Text className={styles.heading}>{heading}</Text>
        </Center>
      )}
      <Grid justify="space-evenly" gutter={60} className={styles.container}>
        {products?.map(
          ({ title, price, images, slug, sale, discountPrice, date }) => (
            <Grid.Col
              lg={breakpoints?.lg}
              md={breakpoints?.md}
              sm={breakpoints?.sm}
              xs={breakpoints?.xs}
              key={slug}
            >
              <Image
                src={images[0]}
                alt={slug}
                quality={100}
                layout="responsive"
                width={"100%"}
                height={"100%"}
                sizes={"50vw"}
                className={styles.image}
                blurDataURL={BlurImage}
                placeholder="blur"
              />
              <Center>
                <Stack spacing={"xs"} mt={10}>
                  <Text className={styles.title}>{title}</Text>
                  <Group>
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
              </Center>
            </Grid.Col>
          )
        )}
      </Grid>
    </>
  );
};

export default Products;
