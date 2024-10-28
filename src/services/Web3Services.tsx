import Web3 from 'web3';
import ABI from './ABI.json'
import { TDispute } from '@/@types/dispute';

const CONTRACT_ADDRESS = "0x6FeFEc85D666acC5D8fa55A347207B000b675191";



export async function signIn() {

    if (!window.ethereum) throw new Error('No wallet detected.');

    const web3 = new Web3(window.ethereum);
    const signedIn = await web3.eth.requestAccounts();
    if (!signedIn || !signedIn.length) throw new Error('Unauthorized wallet.');

    localStorage.setItem("MetaMaskAccount", signedIn[0]);
    return signedIn[0];
}

function getContract() {

    if (!window.ethereum) throw new Error('No wallet detected.');

    const from = localStorage.getItem("MetaMaskAccount") || '';
    const web3 = new Web3(window.ethereum);
    return new web3.eth.Contract(ABI, CONTRACT_ADDRESS, { from });
}

export async function getDispute(): Promise<TDispute> {
    const contract = getContract();
    return contract.methods.dispute().call();
}

export async function placeBet(candidate: number, amountInEth: number) {
    const contract = getContract();
    return contract.methods.bet(candidate).send({
        value: Web3.utils.toWei(amountInEth, "ether")
    });
}

export async function claimPrize() {
    const contract = getContract();
    return contract.methods.claim().send();
}