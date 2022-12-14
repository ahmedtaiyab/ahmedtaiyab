import { useEffect } from "react";
import Head from "next/head";

import AOS from "aos";
import "aos/dist/aos.css";

import { MantineProvider } from "@mantine/core";
import colors from "../utility/colors";
import "../utility/globals.css";

export default function App(props) {
  const { Component, pageProps } = props;

  useEffect(() => {
    AOS.init({ duration: 1000 });
    AOS.refresh();
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Ahmed Taiyab | Home</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "light",
          fontFamily: "monospace",
          colors: {
            textColor: colors.textColor,
            hoverTextColor: colors.hoverTextColor,
          },
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
