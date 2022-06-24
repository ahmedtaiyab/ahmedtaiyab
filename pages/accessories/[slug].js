import { useEffect, useState } from "react";
import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";

import Layout from "../../components/Layout/Layout";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import Products from "../../components/Products/Products";
import { fetchFilesFromDirectory } from "../../utility/helpers";

export default function AccessoryDetails({
  postData,
  likedAccessoriesProducts,
}) {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    if (likedAccessoriesProducts) {
      const likedProducts = likedAccessoriesProducts
        .filter(({ title }) => title !== postData?.title)
        .sort(() => 0.5 - Math.random())
        .slice(0, 4);

      setProducts(likedProducts);
    }
  }, [likedAccessoriesProducts, postData]);

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>Ahmed Taiyab | Accessories | {postData?.title} </title>
        <meta name="description" content="Accessories Details Descriptions" />
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
  const path = `./content/accessoriesProducts/${slug}.md`;
  const fileContents = fs.readFileSync(path, "utf8");

  const matterResult = matter(fileContents);
  const postData = {
    slug,
    ...matterResult.data,
  };

  //Fetching You May Also Like Products Listing
  const likedAccessoriesProducts = fetchFilesFromDirectory(
    "./content/accessoriesProducts"
  );

  return {
    props: {
      postData: JSON.parse(JSON.stringify(postData)),
      likedAccessoriesProducts: JSON.parse(
        JSON.stringify(likedAccessoriesProducts)
      ),
    },
    revalidate: 20,
  };
}

export async function getStaticPaths() {
  const filesInAccessories = fs.readdirSync("./content/accessoriesProducts");

  const paths = filesInAccessories
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
