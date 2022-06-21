import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Grid, Text, Box, Stack, Group } from "@mantine/core";

import styles from "./styles.module.css";
import BlurImage from "../../assets/blurImage.png";

const magnifierHeight = 200;
const magnifieWidth = 200;
const zoomLevel = 1.5;

const ProductDetails = ({ postData }) => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [[x, y], setXY] = useState([0, 0]);

  useEffect(() => {
    if (postData?.images) {
      setSelectedImg(postData?.images?.[0]);
    }
  }, [postData]);

  return (
    <Grid className={styles.container}>
      <Grid.Col lg={6} md={6} sm={6} xs={12}>
        <Stack>
          <Box component="div" className={styles.imgContainer}>
            {selectedImg && (
              <>
                <Image
                  src={selectedImg}
                  alt={"thumbnail"}
                  quality={100}
                  layout="fill"
                  blurDataURL={BlurImage}
                  placeholder="blur"
                  style={{ borderRadius: 5 }}
                  onMouseMove={(e) => {
                    // update cursor position
                    const elem = e.currentTarget;
                    const { top, left } = elem.getBoundingClientRect();

                    // calculate cursor position on the image
                    const x = e.pageX - left - window.pageXOffset;
                    const y = e.pageY - top - window.pageYOffset;
                    setXY([x, y]);
                  }}
                  onMouseEnter={(e) => {
                    // update image size and turn-on magnifier
                    const elem = e.currentTarget;
                    const { width, height } = elem.getBoundingClientRect();
                    setSize([width, height]);
                    setShowMagnifier(true);
                  }}
                  onMouseLeave={() => {
                    setShowMagnifier(false);
                  }}
                />
                <Box
                  component="div"
                  style={{
                    display: showMagnifier ? "" : "none",
                    position: "absolute",

                    // prevent magnifier blocks the mousemove event of img
                    pointerEvents: "none",
                    // set size of magnifier
                    height: `${magnifierHeight}px`,
                    width: `${magnifieWidth}px`,
                    // move element center to cursor pos
                    top: `${y - magnifierHeight / 2}px`,
                    left: `${x - magnifieWidth / 2}px`,
                    opacity: "1", // reduce opacity so you can verify position
                    border: "1px solid lightgray",
                    backgroundColor: "white",
                    backgroundImage: `url('${selectedImg}')`,
                    backgroundRepeat: "no-repeat",

                    //calculate zoomed image size
                    backgroundSize: `${imgWidth * zoomLevel}px ${
                      imgHeight * zoomLevel
                    }px`,

                    //calculate position of zoomed image.
                    backgroundPositionX: `${
                      -x * zoomLevel + magnifieWidth / 2
                    }px`,
                    backgroundPositionY: `${
                      -y * zoomLevel + magnifierHeight / 2
                    }px`,
                  }}
                />
              </>
            )}
          </Box>
          {postData?.images.length > 1 && (
            <Group style={{ justifyContent: "center" }} spacing={30}>
              {postData?.images?.map((img) => (
                <Box
                  key={img}
                  component="div"
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
