import React from "react";
import { Text, Grid } from "@mantine/core";

import styles from "./styles.module.css";

const DiscountPatch = () => {
  return (
    <Grid className={styles.container}>
      <Grid.Col lg={12} md={12} sm={12} xs={12}>
        <Text className={styles.text}>
          THANKS FOR STOPPING BY - TAKE 20% OFF WITH CODE <b>AHMED20</b>
        </Text>
      </Grid.Col>
    </Grid>
  );
};

export default DiscountPatch;
