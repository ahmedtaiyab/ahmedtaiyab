import { useEffect, useState } from "react";
import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import { useRouter } from "next/router";

import Layout from "../../components/Layout/Layout";
import ProductDetails from "../../components/ProductDetails/ProductDetails";
import Products from "../../components/Products/Products";
import { fetchFilesFromDirectory } from "../../utility/helpers";

export default function LaceDetails({ postData, likedLaceProducts }) {
  const [products, setProducts] = useState(null);
  const router = useRouter();

  useEffect(() => {
    if (likedLaceProducts) {
      const likedProducts = likedLaceProducts
        .filter(({ title }) => title !== postData?.title)
        .sort(() => 0.5 - Math.random())
        .slice(0, 4);

      setProducts(likedProducts);
    }
  }, [likedLaceProducts, postData]);

  if (router.isFallback) {
    return <h1>loading.....</h1>;
  }

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>Ahmed Taiyab | Lace | {postData?.title} </title>
        <meta name="description" content="Lace Descriptions" />
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
  console.log({ slug });

  const path = `./content/laceProducts/${slug}.md`;
  const fileContents = fs.readFileSync(path, "utf8");

  const matterResult = matter(fileContents);
  const postData = {
    slug,
    ...matterResult.data,
  };

  //Fetching You May Also Like Products Listing
  const likedLaceProducts = fetchFilesFromDirectory("./content/laceProducts");

  return {
    props: {
      postData: JSON.parse(JSON.stringify(postData)),
      likedLaceProducts: JSON.parse(JSON.stringify(likedLaceProducts)),
    },
    revalidate: 20,
  };
}

export async function getStaticPaths() {
  const filesInLaces = fs.readdirSync("./content/laceProducts");

  const paths = filesInLaces
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
