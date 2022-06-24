import { useEffect, useState } from "react";
import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";

import Layout from "../../components/Layout/Layout";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import Products from "../../components/Products/Products";
import { fetchFilesFromDirectory } from "../../utility/helpers";

export default function FabricDetails({ postData, likedFabricProducts }) {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    if (likedFabricProducts) {
      const likedProducts = likedFabricProducts
        .filter(({ title }) => title !== postData?.title)
        .sort(() => 0.5 - Math.random())
        .slice(0, 4);

      setProducts(likedProducts);
    }
  }, [likedFabricProducts, postData]);

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>Ahmed Taiyab | Fabrics | {postData?.title} </title>
        <meta name="description" content="Fabrics Details Descriptions" />
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
  const path = `./content/plainFabrics/${slug}.md`;
  const fileContents = fs.readFileSync(path, "utf8");

  const matterResult = matter(fileContents);
  const postData = {
    slug,
    ...matterResult.data,
  };

  //Fetching You May Also Like Products Listing
  const likedFabricProducts = fetchFilesFromDirectory("./content/plainFabrics");

  return {
    props: {
      postData: JSON.parse(JSON.stringify(postData)),
      likedFabricProducts: JSON.parse(JSON.stringify(likedFabricProducts)),
    },
    revalidate: 20,
  };
}

export async function getStaticPaths() {
  const filesInFabrics = fs.readdirSync("./content/plainFabrics");

  const paths = filesInFabrics
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
