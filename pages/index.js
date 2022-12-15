import Head from "next/head";
import Image from "next/image";
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
        <div className="mx-auto">
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

        <div className="mx-auto mt-12">
            <Image className='mx-auto rounded-2xl hover:cursor-pointer hover:drop-shadow-2xl' width={800} height={800} alt="YouTube frame" src="/images/Video.jpeg"/>
        </div>

        <div className="mx-auto mt-24 text-center">
          <h2 className="text-6xl w-1/2 mx-auto font-bold"> Train your app with Lobe</h2>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
