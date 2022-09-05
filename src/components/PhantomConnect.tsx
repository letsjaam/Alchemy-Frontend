import { FC, useEffect, useState } from "react";
import { PublicKey, Transaction } from "@solana/web3.js";
import TransferSol from "./TransferSol";
import Airdrop from "./AirDrop";


type PhantomEvent = "disconnect" | "connect" | "accountChanged";
window.Buffer = window.Buffer || require("buffer").Buffer;

interface ConnectOpts {
    onlyIfTrusted: boolean;
}

export interface PhantomProvider {
    connect: (opts?: Partial<ConnectOpts>) => Promise<{ publicKey: PublicKey }>;
    disconnect: ()=>Promise<void>;
    on: (event: PhantomEvent, callback: (args:any)=>void) => void;
    isPhantom: boolean;
    publicKey: PublicKey;
    signTransaction: (t: Transaction) => {};
    signAndSendTransaction: (t: Transaction) => {};
}

type WindowWithSolana = Window & { 
    solana?: PhantomProvider;
}



const Connect2Phantom: FC = () => {

    const [ walletAvail, setWalletAvail ] = useState(false);
    const [ provider, setProvider ] = useState<PhantomProvider | null>(null);
    const [ connected, setConnected ] = useState(false);
    const [ pubKey, setPubKey ] = useState<PublicKey | null>(null);


    useEffect( ()=>{
        if ("solana" in window) {
            const solWindow = window as WindowWithSolana;
            if (solWindow?.solana?.isPhantom) {
                setProvider(solWindow.solana);
                setWalletAvail(true);
                // Attemp an eager connection
                solWindow.solana.connect({ onlyIfTrusted: true });
            }
        }
    }, []);

    useEffect( () => {
        provider?.on("connect", (publicKey: PublicKey)=>{ 
            console.log(`connect event: ${publicKey}`);
            setConnected(true); 
            setPubKey(publicKey);
        });
        provider?.on("disconnect", ()=>{ 
            console.log("disconnect event");
            setConnected(false); 
            setPubKey(null);
        });

    }, [provider]);


    const connectHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
        provider?.connect()
        .catch((err) => { console.error("connect ERROR:", err); });
    }

    const disconnectHandler: React.MouseEventHandler<HTMLButtonElement> = (event) => {
        console.log("disconnect handler");
        provider?.disconnect()
        .catch((err) => {console.error("disconnect ERROR:", err); });
    }

    return (
        <div>
            { walletAvail ?
                <>
                <button disabled={connected} onClick={connectHandler}>Connect to Wallet</button>
                {/* <button disabled={!connected} onClick={disconnectHandler}>Disconnect from Phantom</button> */}
                { connected && provider ? <TransferSol provider={provider} />: null }
                </>
            :
                <>
                <p>Opps!!! Phantom is not available. Go get it <a href="https://phantom.app/">https://phantom.app/</a>.</p>
                </>
            }
        </div>
    );
    // <><Airdrop pubkey={provider.publicKey} /></> 
}

export default Connect2Phantom;