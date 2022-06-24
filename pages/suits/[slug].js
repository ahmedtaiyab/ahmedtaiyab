import { useEffect, useState } from "react";
import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";

import Layout from "../../components/Layout/Layout";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import Products from "../../components/Products/Products";
import { fetchFilesFromDirectory } from "../../utility/helpers";

export default function AccessoryDetails({ postData, likedSuitsProducts }) {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    if (likedSuitsProducts) {
      const likedProducts = likedSuitsProducts
        .filter(({ title }) => title !== postData?.title)
        .sort(() => 0.5 - Math.random())
        .slice(0, 4);

      setProducts(likedProducts);
    }
  }, [likedSuitsProducts, postData]);

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>Ahmed Taiyab | Suits | {postData?.title} </title>
        <meta name="description" content="Suits Details Descriptions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <ProductDetails postData={postData} />
        <Products
          heading={"YOU MAY ALSO LIKE"}
          type="likedProducts"
          products={products}
          breakpoints={{ lg: 3, md: 4, sm: 4, xs: 4 }}
        />
      </Layout>
    </div>
  );
}

export async function getStaticProps({ params: { slug } }) {
  const path = `./content/suitProducts/${slug}.md`;
  const fileContents = fs.readFileSync(path, "utf8");

  const matterResult = matter(fileContents);
  const postData = {
    slug,
    ...matterResult.data,
  };

  //Fetching You May Also Like Products Listing
  const likedSuitsProducts = fetchFilesFromDirectory("./content/suitProducts");

  return {
    props: {
      postData: JSON.parse(JSON.stringify(postData)),
      likedSuitsProducts: JSON.parse(JSON.stringify(likedSuitsProducts)),
    },
    revalidate: 20,
  };
}

export async function getStaticPaths() {
  const filesInSuits = fs.readdirSync("./content/suitProducts");

  const paths = filesInSuits
    .reverse()
    .slice(0, 3)
    .map((fileName) => ({
      params: {
        slug: fileName.replace(".md", ""),
      },
    }));

  return {
    paths,
    fallback: true,
  };
}
