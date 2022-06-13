import Head from "next/head";
import Layout from "../components/Layout/Layout";
import AnimatedSlider from "../components/AnimatedSlider/AnimatedSlider";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ahmed Taiyab | Home</title>
        <meta
          name="description"
          content="Ahmed taiyab is the Online Shopping Platform"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <AnimatedSlider />
      </Layout>
    </div>
  );
}
