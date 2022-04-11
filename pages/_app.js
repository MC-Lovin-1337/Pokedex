import Head from "next/head";
import Image from "next/image";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-4 px-4 bg-gray-50">
      <Head>
        <title>Pokémon Pokédex</title>
        <link rel="icon" href="/pokemon-ball.svg" />
      </Head>
      <main className="w-full">
        <Component {...pageProps} />
      </main>
      <footer className="flex h-24 w-full items-center justify-center border-t mt-auto">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  );
}

export default MyApp;
