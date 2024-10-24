import Button from "@/components/Button/Button";
import Head from "next/head";
import Image from "next/image";

export default function Bet() {
  return (
    <>
      <Head>
        <title>BetChoice - Bet</title>
        <meta name="description" content="BetChoice" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
      </Head>
      <div className="flex flex-col max-w-screen-2xl min-w-80 m-auto h-screen divide-y">
        <div className="w-2/3 m-auto">
          <header className="mt-12 mx-12">
            <h1 className="text-4xl font-bold">BetOpinion</h1>
            <p className="text-xl py-3 text-center mdl:text-start">
              On-chain betting at your best opinions.
            </p>
            <p className="text-xl py-3 text-center mdl:text-start">
              Authenticate with your wallet and place your bet on what you
              believe in.
            </p>
          </header>
          <main className="flex flex-col my-4 mdl:pt-12 mdl:pb-12 mdl:flex-row items-center place-content-around">
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold">Donald Trump</h2>
              <Image
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/220px-Donald_Trump_official_portrait.jpg"
                }
                alt="Choice 1"
                width={300}
                height={400}
                className="my-1 rounded-md shadow-sm"
              />
              <Button>Bet in this option</Button>
              <span>Bet amount: $$$$</span>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold">Donald Trump</h2>
              <Image
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/220px-Donald_Trump_official_portrait.jpg"
                }
                alt="Choice 1"
                width={300}
                height={400}
                className="my-1 rounded-md shadow-sm"
              />
              <Button>Bet in this option</Button>
              <span>Bet amount: $$$$</span>
            </div>
          </main>
        </div>
        <footer className="flex flex-row">
          <p className="mx-12 my-6">@ 2024</p>
        </footer>
      </div>
    </>
  );
}
