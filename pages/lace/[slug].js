import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Head from "next/head";

import Layout from "../../components/Layout/Layout";
import ProductDetails from "../../components/ProductDetails/ProductDetails";

export default function Post({ postData }) {
  return (
    <div>
      <Head>
        <title>Ahmed Taiyab | Lace | {postData?.title} </title>
        <meta name="description" content="Lace Descriptions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <ProductDetails
          postData={postData}
          // title={postData.title}
          // price={postData.price}
          // discountPrice={postData?.discountPrice}
          // description={postData.description}
          // images={postData?.images}
          // sale={postData.sale}
        />
      </Layout>
    </div>
  );
}

export async function getStaticProps({ params: { slug } }) {
  const path = `./content/laceProducts/${slug}.md`;
  const fileContents = fs.readFileSync(path, "utf8");

  const matterResult = matter(fileContents);

  const postData = {
    slug,
    ...matterResult.data,
  };

  return {
    props: {
      postData: JSON.parse(JSON.stringify(postData)),
    },
  };
}

export async function getStaticPaths() {
  const filesInLaces = fs.readdirSync("./content/laceProducts");

  const paths = filesInLaces.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: true,
  };
}
