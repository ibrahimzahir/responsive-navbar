import Head from "next/head";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { Navbar } from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Responsive Navbar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
