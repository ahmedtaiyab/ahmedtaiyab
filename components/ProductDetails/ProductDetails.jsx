import React, { useState } from "react";
import Image from "next/image";
import { Grid, Text, Box, Stack, Group } from "@mantine/core";

import styles from "./styles.module.css";
import BlurImage from "../../assets/blurImage.png";

const ProductDetails = ({ postData }) => {
  const [selectedImg, setSelectedImg] = useState(postData?.images?.[0]);

  return (
    <Grid className={styles.container}>
      <Grid.Col lg={6} md={6} sm={6} xs={12}>
        <Stack>
          <Box component="div" className={styles.imgContainer}>
            {selectedImg && (
              <Image
                src={selectedImg}
                alt={"thumbnail"}
                quality={100}
                layout="fill"
                blurDataURL={BlurImage}
                placeholder="blur"
                style={{ borderRadius: 5 }}
              />
            )}
          </Box>
          {postData?.images.length > 1 && (
            <Group style={{ justifyContent: "center" }} spacing={30}>
              {postData?.images?.map((img) => (
                <Box
                  key={img}
                  component="a"
                  className={[
                    styles.smallImgContainer,
                    selectedImg === img && styles.activeImg,
                  ]}
                >
                  <Image
                    src={img}
                    alt={img}
                    quality={100}
                    layout="fill"
                    blurDataURL={BlurImage}
                    placeholder="blur"
                    style={{ borderRadius: 5 }}
                    onClick={() => setSelectedImg(img)}
                  />
                </Box>
              ))}
            </Group>
          )}
        </Stack>
      </Grid.Col>
      <Grid.Col lg={6} md={6} sm={6} xs={12}>
        <Stack spacing={2}>
          <Text className={styles.title}>{postData?.title}</Text>
          <Group>
            {postData?.discountPrice && (
              <Text className={styles.discountPrice}>
                ₹{postData?.discountPrice}
              </Text>
            )}
            <Text
              style={{
                textDecorationLine: postData?.sale ? "line-through" : "none",
                textDecorationColor: "red",
                textDecorationThickness: 2,
                opacity: postData?.sale ? 0.8 : 1,
              }}
              className={styles.price}
            >
              ₹{postData?.price}
            </Text>
          </Group>
          <Text className={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum numquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentium optio, eaque rerum! Provident
            similique accusantium nemo autem. Veritatis obcaecati tenetur iure
            eius earum ut molestias architecto voluptate aliquam nihil, eveniet
            aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur
            error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
            quia.
            <br />
            <br />
            {postData?.description}
          </Text>
        </Stack>
      </Grid.Col>
    </Grid>
  );
};

export default ProductDetails;
