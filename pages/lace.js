import React, { useState, useEffect } from "react";
import Head from "next/head";
import fs from "fs";
import matter from "gray-matter";

import Layout from "../components/Layout/Layout";
import laceHeroImage from "../assets/lace2.jpg"; //Needs to change this
import HeroImageComponent from "../components/HeroImageComponent/HeroImageComponent";
import Paginator from "../components/Paginator/Paginator";
import Products from "../components/Products/Products";

let cacheLacesProducts = [];

export default function Lace({ lacesProducts }) {
  const [activePage, setActivePage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [paginatedData, setPaginatedData] = useState(null);

  const postsPerPage = 3;

  useEffect(() => {
    const pages = Math.ceil(lacesProducts?.length / postsPerPage);
    setPaginatedData(lacesProducts?.slice(0, 3));
    setTotalPages(pages);
  }, []);

  return (
    <div>
      <Head>
        <title>Ahmed Taiyab | Lace</title>
        <meta name="description" content="Lace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <HeroImageComponent
          image={laceHeroImage.src}
          title={"Lorem ipsum dolor sit amet consectetur adipisicing."}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem."
          }
          scrollTo={"/lace/#laceContent"}
        />
        <div id="laceContent">
          <Products
            type="lacesProducts"
            products={paginatedData}
            breakpoints={{ lg: 4, md: 4, sm: 4, xs: 4 }}
          />
          <Paginator
            activePage={activePage}
            onChange={(page) => {
              setActivePage(page);
              setPaginatedData(lacesProducts?.slice((page - 1) * 3, page * 3));
            }}
            totalPages={totalPages}
          />
        </div>
      </Layout>
    </div>
  );
}

export const getStaticProps = async () => {
  if (cacheLacesProducts?.length) {
    return {
      props: {
        lacesProducts: JSON.parse(JSON.stringify(cacheLacesProducts)),
      },
      revalidate: 20,
    };
  }

  const filesInLaces = fs.readdirSync("./content/laceProducts");

  cacheLacesProducts = filesInLaces.map((filename) => {
    const file = fs.readFileSync(`./content/laceProducts/${filename}`, "utf8");
    const matterData = matter(file);

    return {
      ...matterData.data,
      slug: filename.slice(0, filename.indexOf(".")),
    };
  });

  return {
    props: {
      lacesProducts: JSON.parse(JSON.stringify(cacheLacesProducts)),
    },
    revalidate: 20,
  };
};
