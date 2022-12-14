import React, { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout/Layout";
import AnimatedSlider from "../components/AnimatedSlider/AnimatedSlider";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
import WholeSalePatch from "../components/WholeSalePatch/WholeSalePatch";
import DiscountPatch from "../components/DiscountPatch/DiscountPatch";
import { fetchFilesFromDirectory } from "../utility/helpers";

export default function Home({
  categories = [],
  newArrivalsProducts = [],
  lacesProducts = [],
}) {
  const [featuredProducts, setFeaturedProducts] = useState(null);
  const [salesProducts, setSalesProducts] = useState(null);

  useEffect(() => {
    const filterArrivalsByFeatured = newArrivalsProducts?.filter((item) => {
      if (item.featured) {
        return item;
      } else {
        return 0;
      }
    });

    const filterLacesByFeatured = lacesProducts?.filter((item) => {
      if (item.featured) {
        return item;
      } else {
        return 0;
      }
    });

    const filterArrivalsBySales = newArrivalsProducts?.filter((item) => {
      if (item.sale) {
        return item;
      } else {
        return 0;
      }
    });

    const filterLacesBySales = lacesProducts?.filter((item) => {
      if (item.sale) {
        return item;
      } else {
        return 0;
      }
    });

    const featuredProducts = [
      ...filterArrivalsByFeatured,
      ...filterLacesByFeatured,
    ]
      ?.sort((a, b) => new Date(b?.date) - new Date(a?.date))
      ?.slice(0, 8);

    const salesProducts = [...filterArrivalsBySales, ...filterLacesBySales]
      ?.sort((a, b) => new Date(b?.date) - new Date(a?.date))
      ?.slice(0, 8);

    setFeaturedProducts(featuredProducts);
    setSalesProducts(salesProducts);
  }, []);

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
        <Products
          heading={"FEATURED PRODUCTS"}
          type="featured"
          products={featuredProducts}
          breakpoints={{ lg: 3, md: 4, sm: 4, xs: 4 }}
        />
        <Categories categories={categories} />
        <WholeSalePatch />
        <Products
          heading={"NEW ARRIVALS"}
          type="newArrivals"
          products={newArrivalsProducts?.reverse()}
          breakpoints={{ lg: 3, md: 4, sm: 4, xs: 4 }}
        />
        <Products
          heading={"WHAT'S ON SALE"}
          type="onSale"
          products={salesProducts}
          breakpoints={{ lg: 3, md: 4, sm: 4, xs: 4 }}
        />
        <DiscountPatch />
      </Layout>
    </div>
  );
}

export const getStaticProps = async () => {
  const categories = fetchFilesFromDirectory("./content/categoryTypes");
  const newArrivalsProducts = fetchFilesFromDirectory("./content/newArrivals");
  const lacesProducts = fetchFilesFromDirectory("./content/laceProducts");

  return {
    props: {
      categories,
      newArrivalsProducts: JSON.parse(JSON.stringify(newArrivalsProducts)),
      lacesProducts: JSON.parse(JSON.stringify(lacesProducts)),
    },
    revalidate: 20,
  };
};
