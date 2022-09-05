

import { useEffect, useState } from "react"
import Swal from "sweetalert2"

window.Buffer = window.Buffer || require("buffer").Buffer;

export default function PhantomConnectWallet({setUserAddress, walletConnected, setWalletConnected}) {



    const [provider, setProvider] = useState(null)
   
    // Phantom wallet persistent or eagerly connecting

 async function eagarlyConnectWallet(){
    if ("phantom" in window) {
        const provider = window.phantom?.solana;
        if (provider?.isPhantom) {
             setProvider(provider)
            try{
                const response = await provider?.connect({onlyIfTrusted: true})
                const publicKey = response.publicKey
                setUserAddress(publicKey)
                setWalletConnected(true)
          
            }
            catch(error){
                console.log(error)
            }
            }
        }
    }
   
        useEffect(() => {
            eagarlyConnectWallet()
        }, [])
    // Detect Phantom Provider
    function getProvider() {
        if ("phantom" in window) {
            const provider = window.phantom?.solana;
            if (provider?.isPhantom) {
                provider.on("connect", () => {
                    prompt("Wallet Connected Successfully" , "success")
                })              
              setProvider(provider)
                return provider
            }
            else{
                window.open('https://phantom.app/', '_blank');
            }
        }
        else{
        window.open('https://phantom.app/', '_blank');

        }
    }

    // Prompts to display information to the user
    function prompt(text, icon, timer = 2000) {
        Swal.fire({
            title: "Alchemy",
            text,
            icon,
            timer
        })
    }

    // Connect Phantom Wallet
    async function handleWalletConnect() {
        const provider = getProvider()
        try {
            const response = await provider?.connect()
            const publicKey = response.publicKey.toString()
            setUserAddress(publicKey)
            setWalletConnected(true)
        }
        catch (error) {
            switch (error.code) {
                case 4001: prompt("You rejected the request", "info")
                    break;
                case -32003: prompt("Transaction Rejected", "error")
                    break;
                case 4900: prompt("Network Connection Failed", "info")
                    break;
                case 4100: prompt("Unauthorized", "error")
                    break;
                case -32603: prompt("Phantom Internal Error", "error")
                    break;
                default: prompt("Something Went Wrong", "error");
            }
        }
    }

    // Handle phantom wallet disconnection
    async function handleWallectDisconnect() {
        provider?.disconnect()
        setWalletConnected(false)
        prompt("You logged out successfully", "success")

    }
  
    

       return (
        <>
       { walletConnected && <div onClick={handleWallectDisconnect}>Logout</div>}
       { !walletConnected && <div onClick={handleWalletConnect}>Connect Wallet</div>}
        </>
    )
}