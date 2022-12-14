import React, { useState, useEffect } from "react";
import Head from "next/head";

import Layout from "../../components/Layout/Layout";
import laceHeroImage from "../../assets/lace2.jpg"; //Needs to change this
import HeroImageComponent from "../../components/HeroImageComponent/HeroImageComponent";
import Paginator from "../../components/Paginator/Paginator";
import Products from "../../components/Products/Products";
import { fetchFilesFromDirectory } from "../../utility/helpers";

export default function Index({ lacesProducts }) {
  const [activePage, setActivePage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [paginatedData, setPaginatedData] = useState(null);

  const postsPerPage = 8;

  useEffect(() => {
    const pages = Math.ceil(lacesProducts?.length / postsPerPage);
    setPaginatedData(lacesProducts?.slice(0, 8));
    setTotalPages(pages);
  }, []);

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
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
            breakpoints={{ lg: 3, md: 4, sm: 4, xs: 4 }}
          />
          {totalPages > 1 && (
            <Paginator
              activePage={activePage}
              onChange={(page) => {
                setActivePage(page);
                setPaginatedData(
                  lacesProducts?.slice((page - 1) * 8, page * 8)
                );
              }}
              totalPages={totalPages}
            />
          )}
        </div>
      </Layout>
    </div>
  );
}

export const getStaticProps = async () => {
  const lacesProducts = fetchFilesFromDirectory("./content/laceProducts");

  return {
    props: {
      lacesProducts: JSON.parse(JSON.stringify(lacesProducts)),
    },
    revalidate: 10,
  };
};
