import Web3 from 'web3';
import ABI from './ABI.json'
import { TDispute } from '@/@types/dispute';

const CONTRACT_ADDRESS = "0xBeC5Ce8Fc44c75edAd009225F632BeB67DB25580";

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