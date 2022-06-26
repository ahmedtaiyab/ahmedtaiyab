import Head from "next/head";
import { useRouter } from "next/router";

export default function FabricDetails() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>Ahmed Taiyab | Fabrics | Details Page </title>raf
        <meta name="description" content="Fabrics Details Descriptions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>Fabrics: {slug}</p>
    </div>
  );
}
