import {Connection, PublicKey, RpcResponseAndContext, SignatureResult, SystemProgram, Transaction, } from '@solana/web3.js';
import { FC, useEffect, useRef, useState } from 'react';
import { PhantomProvider } from './PhantomConnect';

interface ITransferSolProps {
    provider: PhantomProvider;
}



const defaultDest = '4vMzFrFg1fcu5ySzkCm7gzWT5JvQMahTScwHyU1kPhxU';

const TransferSol: FC<ITransferSolProps> = (props) => {

    // Create a connection to blockchain and
    // make it persistent across renders
    const connection = useRef(new Connection("https://blue-polished-wave.solana-mainnet.discover.quiknode.pro/ef4102e56991757705dc4fe1316531d4ec87c5e3/"));

    const [ destAddr, setDestAddr ] = useState(defaultDest);
    const [ lamports, setLamports ] = useState(10000);
    const [ txid, setTxid ] = useState<string | null>(null);
    const [ slot, setSlot ] = useState<number | null>(null);
    const [ myBalance, setMyBalance ] = useState(0);
    const [ rxBalance, setRxBalance ] = useState(0);

    // Get the balance the first time the component is mounted
    useEffect( () => {
        connection.current.getBalance(props.provider.publicKey).then(setMyBalance);
    }, [props.provider.publicKey]);

    useEffect( () => {
        connection.current.getBalance(new PublicKey(destAddr)).then(setRxBalance);
    }, [destAddr]);

    const handleChangeAddr = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDestAddr(event.target.value);
    }


    const handleSubmit = async (count: number ) => {

        // Create a TX object
        let transaction = new Transaction({
            feePayer: props.provider.publicKey,
            recentBlockhash: (await connection.current.getRecentBlockhash()).blockhash
        });

        // Add instructions to the tx
        transaction.add(
            SystemProgram.transfer({
            fromPubkey: new PublicKey("GmNPoYCC1W3VDCJMCr1pYFXQVtvMbhakz4bK1DagDJbk"),
            toPubkey: new PublicKey(destAddr),
            lamports: count,
            })
        );
        
        // Get the TX signed by the wallet (signature stored in-situ)
      try{
        await props.provider.signAndSendTransaction(transaction);
      }
      catch(error){
        console.log(error)
      }
              
        // Send the TX to the network
        connection.current.sendRawTransaction(transaction.serialize())
        .then(id => {
            console.log(`Transaction ID: ${id}`);
            setTxid(id);
            connection.current.confirmTransaction(id)
            .then((confirmation: RpcResponseAndContext<SignatureResult>) => {
                console.log(`Confirmation slot: ${confirmation.context.slot}`);
                setSlot(confirmation.context.slot);
                connection.current.getBalance(props.provider.publicKey).then(setMyBalance);
                connection.current.getBalance(new PublicKey(destAddr)).then(setRxBalance);
            });

        })
        .catch((error: any) => {console.error(error); alert("Transaction failed")});

    }


    return (
        <div>
            <div>{myBalance}</div>
            <label>Enter address of destination</label><br/>
            <input type="text" value={destAddr} onChange={handleChangeAddr}/><br/>
            <button onClick={() => handleSubmit(1_000_000_000)}>1 Sol</button>
            <button onClick={() => handleSubmit(2_000_000_000)}>2 Sol</button>
            <button onClick={() => handleSubmit(3_000_000_000)}>3 Sol</button>
            <hr/>
            { txid ? <p>Transaction id: <span style={{fontSize: '0.7em'}}>{txid}</span></p> : null }
            { slot ? <p>Confirmation slot: {slot}</p> : null }</div>
    );

}


export default TransferSol;