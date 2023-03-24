import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Head from "next/head";

import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Brokery</title>
        <meta name="description" content="Brokery App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Page */}
      <Header></Header>
      <main style={{ minHeight: "90vh" }}>
        <Component {...pageProps} />
      </main>
      <Footer></Footer>
    </>
  );
}
