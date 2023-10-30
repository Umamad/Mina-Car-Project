import Head from "next/head";
import Link from "next/link";

import HomePageView from "@/src/views/HomePage.view";

import api from "@/utils/api";

export default function Home({ cars }) {
  return (
    <>
      <Head>
        <title>Mina's car shop</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePageView cars={cars} />
      
    </>
  );
}

export async function getStaticProps() {
  const cars = await api();

  return {
    props: {
      cars,
    },
  };
}
