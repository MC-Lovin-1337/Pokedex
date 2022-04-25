import Head from "next/head";
import Image from "next/image";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-gray-50">
      <Head>
        <title>Pokémon Pokédex</title>
        <link rel="icon" href="/pokemon-ball.svg" />
      </Head>
      <main className="w-full">
        <Component {...pageProps} />
      </main>
    </div>
  );
}

export default MyApp;
