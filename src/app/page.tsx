"use client"

import Button from "@/components/Button/Button";
import Slider from "@/components/Slider/Slider";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "@/services/Web3Services";

export default function Home() {

  const { push } = useRouter();
  const [message, setMessage] = useState('');

  function loginBtnClick() {
    setMessage('connecting to your wallet.....please, wait.');

    signIn()
      .then(() => push('/bet'))
      .catch(error => {
        console.log(error);
        setMessage(error.message)
    });
  }

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
              <Button icon={"/logos/MetaMask_Fox.png"} onClick={loginBtnClick}>Connect with your Metamask</Button>
              <div className="h-6 py-1 truncate">
                <span className="text-amber-400">{message}</span>
              </div>
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
