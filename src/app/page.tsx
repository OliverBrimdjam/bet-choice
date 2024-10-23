import Slider from "@/components/Slider/Slider";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>BetChoice - login</title>
        <meta name="description" content="BetChoice" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <div className="flex flex-col max-w-screen-2xl min-w-80 m-auto h-screen divide-y">
        <main className="flex flex-col my-8 mdl:pt-24 mdl:pb-24 mdl:flex-row items-center mdl:justify-center  ">
          <section className="w-1/3 my-4 min-w-80">
            <div className="mdl:px-10 flex flex-col items-center mdl:items-start">
              <h1 className="text-4xl font-bold">BetOpinion</h1>
              <p className="text-xl py-3 text-center mdl:text-start">On-chain betting at your best opinions.</p>
              <p className="text-xl py-3 text-center mdl:text-start">Authenticate with your wallet and place your bet on what you believe in.</p>
              <button className="bg-blue-900 text-white px-4 py-3 min-w-44 rounded-md flex flex-row shadow-sm hover:shadow-xl">
                <Image
                  src={"/logos/MetaMask_Fox.png"}
                  alt="MetaMask Logo"
                  width={24}
                  height={24}
                  className="mr-2"
                />Connect with your Metamask
              </button>
            </div>
          </section>
          <div className="w-2/5 min-w-80"><Slider /></div>
        </main>
        <footer className="flex flex-row">
          <p className="mx-12 my-6">@ 2024</p>
        </footer>
      </div>
    </>
  );
}
