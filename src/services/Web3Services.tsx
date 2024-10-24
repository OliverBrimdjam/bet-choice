import Web3 from 'web3';

export async function signIn() {

    if (!window.ethereum) throw new Error('No wallet detected.');

    const web3 = new Web3(window.ethereum);
    const signedIn = await web3.eth.requestAccounts();
    if (!signedIn || !signedIn.length) throw new Error('Unauthorized wallet.');

    localStorage.setItem("MetaMaskAccount", signedIn[0]);
    return signedIn[0];
}