import Head from "next/head";

import Layout from "../../components/Layout/Layout";
import plainFabricHeroImage from "../../assets/plainFabrics.jpg"; //Needs to change this
import HeroImageComponent from "../../components/HeroImageComponent/HeroImageComponent";

export default function Fabrics() {
  return (
    <div>
      <Head>
        <title>Ahmed Taiyab | Plain Fabrics</title>
        <meta name="description" content="Plain Fabrics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <HeroImageComponent
          image={plainFabricHeroImage.src}
          title={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem."
          }
        />
      </Layout>
    </div>
  );
}
