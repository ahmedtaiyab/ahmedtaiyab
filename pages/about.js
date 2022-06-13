import Head from "next/head";
import Link from "next/link";
import { Button } from "@mantine/core";

export default function About() {
  return (
    <div>
      <Head>
        <title>Ahmed Taiyab | About</title>
        <meta
          name="description"
          content="Ahmed taiyab is the Online Shopping Platform"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Link href="/" passHref>
          <Button component="a">Home</Button>
        </Link>
      </div>
    </div>
  );
}
