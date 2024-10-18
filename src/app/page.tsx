import Slider from "@/components/Slider/Slider";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>BetChoice</title>
        <meta name="description" content="BetChoice" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <div className="flex flex-col border-solid border-2 max-w-screen-2xl m-auto border-red-500">
        <main className="flex flex-col pt-24 pb-24 sm:flex-row sm:justify-center border-solid border-2 border-blue-500 ">
          <section className="w-1/3">
            <div className="sm:px-10 min-w-80">
              <h1 className="text-4xl font-bold">BetOpinion</h1>
              <p className="text-xl py-3">On-chain betting at your best opinions.</p>
              <p className="text-xl py-3">Authenticate with your wallet and place your bet on what you believe in.</p>
              <button className="bg-blue-900 text-white px-4 py-3 min-w-44 rounded-md flex flex-row">
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
          <div className="w-2/5 min-w-80 bg-orange-500 border-solid border-2 border-blue-500"><Slider /></div>
        </main>
        <footer>
          <p>lorotinha de footer mesmo sem pretensão</p>
        </footer>
      </div>
    </>
  );
}
