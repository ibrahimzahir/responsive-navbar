import Head from "next/head";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Responsive Navbar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div>Responsive Menu</div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <p>Responsive Manu</p>
      </footer>
    </div>
  );
}
