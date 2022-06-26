import Head from "next/head";
import { useRouter } from "next/router";

export default function SuitsDetails() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>Ahmed Taiyab | Suits | Details Page </title>raf
        <meta name="description" content="Suits Details Descriptions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>Suits: {slug}</p>
    </div>
  );
}
