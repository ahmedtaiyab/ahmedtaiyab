import Head from "next/head";

import Layout from "../../components/Layout/Layout";
import suitsHeroImage from "../../assets/suits2.jpg"; //Needs to change this
import HeroImageComponent from "../../components/HeroImageComponent/HeroImageComponent";

export default function Suits() {
  return (
    <div>
      <Head>
        <title>Ahmed Taiyab | Suits</title>
        <meta name="description" content="Suits" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <HeroImageComponent
          image={suitsHeroImage.src}
          title={"Lorem ipsum dolor sit amet consectetur adipisicing elit."}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem."
          }
        />
      </Layout>
    </div>
  );
}
