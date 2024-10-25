"use client";

import { TDispute } from "@/@types/dispute";
import Button from "@/components/Button/Button";
import { getDispute } from "@/services/Web3Services";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Web3 from "web3";

export default function Bet() {
  const { push } = useRouter();
  const [message, setMessage] = useState('');
  const [dispute, setDispute] = useState({
    candidate1: "Loading...",
    candidate2: "Loading...",
    image1: "/placeholder-image.jpg",
    image2: "/placeholder-image.jpg",
    total1: 0,
    total2: 0
  });

  useEffect(() => {
    if (!localStorage.getItem("MetaMaskAccount")) return push("/");
    setMessage('Loading contract data...');
    getDispute()
      .then((dispute: TDispute) => {
        setDispute(dispute);
        setMessage('');
      })
      .catch(error => {
        console.log(error);
        setMessage(error.message)
      }
      );
  }, [push]);

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
            <div className="h-6 py-1">
              <span>{message}</span>
            </div>
          </header>
          <main className="flex flex-col my-4 mdl:pt-12 mdl:pb-12 mdl:flex-row items-center place-content-around">
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold">{dispute.candidate1}</h2>
              <Image
                src={dispute.image1}
                alt="Choice 1"
                width={300}
                height={400}
                className="my-1 rounded-md shadow-sm"
              />
              <Button>Bet in this option</Button>
              <span>Bet amount: { Web3.utils.fromWei(dispute.total1, "tether") }</span>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold">{dispute.candidate2}</h2>
              <Image
                src={dispute.image2}
                alt="Choice 1"
                width={300}
                height={400}
                className="my-1 rounded-md shadow-sm"
              />
              <Button>Bet in this option</Button>
              <span>Bet amount: { Web3.utils.fromWei(dispute.total2, "tether") }</span>
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
