import Head from "next/head";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Lobe Tour | Machine Learning Made Easy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Nav />
        <div className="align-items-center justify-center h-screen mx-auto">
          <div class="sm:text-center">
            <h1 class="text-6xl font-bold tracking-wide">
              Lobe <span className="text-tour-green">Tour</span>
            </h1>
            <p class="mx-auto mt-6 max-w-2xl text-2xl leading-8 text-gray-600">
              Build your first machine learning model in ten minutes. No code or
              experience required.
            </p>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
