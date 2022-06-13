import React from "react";
import { Text, BackgroundImage, Center, Button } from "@mantine/core";
import styles from "./styles.module.css";

const Slide = ({ image, title, description, action }) => {
  return (
    <BackgroundImage src={image} radius="sm" className={styles.container}>
      <Center p="md" className={styles.contentContainer}>
        <Text className={styles.title}>{title}</Text>
        <Text className={styles.description}>{description}</Text>
        <Button className={styles.button}>{action}</Button>
      </Center>
    </BackgroundImage>
  );
};

export default Slide;
