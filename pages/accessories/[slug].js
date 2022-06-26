import Head from "next/head";
import { useRouter } from "next/router";

export default function AccessoriesDetails() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>Ahmed Taiyab | Accessories | Details Page </title>raf
        <meta name="description" content="Accessories Details Descriptions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>Accessorie: {slug}</p>
    </div>
  );
}
