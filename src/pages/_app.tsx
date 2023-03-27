import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Head from "next/head";

import "@/styles/globals.css";
import type { AppProps } from "next/app";
function Box({ children, ...props }) {
  return <div {...props}>{children}</div>
}
function Box2({ children, ...props }) {
  return <div {...props}>{children}</div>
}

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
      <Box
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: '#E2E2E2',
        borderRadius: 50,
        color: '#A2A2A2',
        width: 1800,
        display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center', 
      }}
    >
      Bora Bora<br/>
      Welcome to Bora Bora Living: The Ultimate Island Living Experience.<br/><br/>
      Bora Bora Living is proud to present our latest project - an exclusive housing compplex located on the
      breathtaking island of Bora Bora. With its pristine breaches, crystals-clear waters, and stunning natural
      scenery, Bora Bora is the ultimate island pradise, and now you can make it your home.<br/><br/>

      Our housing complex is currently under construction, offering a unique opportunity to bea a part of this exclusive
      community from the ground up. Desinged by award-winning atchitects, our complex contemporary desing whit local island
      influences, creating a unique and inviting living space.

    </Box>
    
      <Footer></Footer>
    </>
  );
}
