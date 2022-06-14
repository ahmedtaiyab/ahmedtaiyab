import React from "react";
import fs from "fs";
import matter from "gray-matter";
import Head from "next/head";
import Layout from "../components/Layout/Layout";
import AnimatedSlider from "../components/AnimatedSlider/AnimatedSlider";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";

export default function Home({
  categories,
  featuredProducts,
  newArrivalsProducts,
}) {
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
        {/* <Products
          heading={"FEATURED PRODUCTS"}
          type="featured"
          products={featuredProducts}
        /> */}
        <Categories categories={categories} />
        <Products
          heading={"NEW ARRIVALS"}
          type="newArrivals"
          products={newArrivalsProducts.reverse()}
        />
      </Layout>
    </div>
  );
}

export const getStaticProps = async () => {
  const filesInCategories = fs.readdirSync("./content/categoryTypes");
  // const filesInFeatured = fs.readdirSync("./content/featured");
  const filesInNewArrivals = fs.readdirSync("./content/newArrivals");

  const categories = filesInCategories.map((filename) => {
    const file = fs.readFileSync(`./content/categoryTypes/${filename}`, "utf8");
    const matterData = matter(file);

    return {
      ...matterData.data,
      slug: filename.slice(0, filename.indexOf(".")),
    };
  });

  // const featuredProducts = filesInFeatured.map((filename) => {
  //   const file = fs.readFileSync(`./content/featured/${filename}`, "utf8");
  //   const matterData = matter(file);

  //   return {
  //     ...matterData.data,
  //     slug: filename.slice(0, filename.indexOf(".")),
  //   };
  // });

  const newArrivalsProducts = filesInNewArrivals.map((filename) => {
    const file = fs.readFileSync(`./content/newArrivals/${filename}`, "utf8");
    const matterData = matter(file);

    return {
      ...matterData.data,
      slug: filename.slice(0, filename.indexOf(".")),
    };
  });

  return {
    props: {
      categories,
      // featuredProducts: JSON.parse(JSON.stringify(featuredProducts)),
      newArrivalsProducts: JSON.parse(JSON.stringify(newArrivalsProducts)),
    },
  };
};
