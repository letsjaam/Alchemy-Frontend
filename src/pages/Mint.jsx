import CoinImg from '../assets/10A_Front.png';
import ProcessInput from '../components/ProcessInput';
import PriceInput from '../components/PriceInput';
import { useRef, useState } from 'react';
import { Connection, Transaction, SystemProgram , PublicKey} from "@solana/web3.js"
import Swal from 'sweetalert2';



function Mint({ walletConnected}) {

  const destinationAddress = "4vMzFrFg1fcu5ySzkCm7gzWT5JvQMahTScwHyU1kPhxU"
  const [selected, setSelected] = useState(null);
  const provider = window?.phantom?.solana
  const network = "https://blue-polished-wave.solana-mainnet.discover.quiknode.pro/ef4102e56991757705dc4fe1316531d4ec87c5e3/"
  const connection = useRef(new Connection(network, "confirmed"))

  const T1 = 80000//2_850_000_000
  const T2 = 14_250_000_000
  const T3 = 28_500_000_000


  // Prompts to display information to the user
  function prompt(text, icon, timer = 2000) {
    Swal.fire({
      title: "Alchemy",
      text,
      icon,
      timer
    })
  }

  const handleClick = (tier, lamports) => {
    if (selected === tier) {
      return setSelected(null);
    }
    setSelected(tier);
    if (!walletConnected) {
      prompt("Please Connect Your Wallet", "info")
    }
    else {
      transferSol(lamports)
    }
  };

  async function transferSol(lamports) {
    

    const transaction = new Transaction({
        feePayer: new PublicKey(provider.publicKey.toString()),
        recentBlockhash:  (await connection.current.getRecentBlockhash()).blockhash
    }
        ).add(
          SystemProgram.transfer({
          fromPubkey:  new PublicKey(provider.publicKey.toString()),
          toPubkey: new PublicKey(destinationAddress),
          lamports
          })
      );
    
      try {
      const { signature } = await provider.signAndSendTransaction(transaction);
      const status = await connection.current.getSignatureStatus(signature)
      prompt("Sol Transferred Successfully", "success")
      
    }
    catch (error) {
      console.log(error)
      prompt("Transaction Failed", "error")

    }
 
  }
  return (
    <div className='flex flex-col justify-center md:flex-row'>
      <div className='flex flex-col justify-center items-center cursor-pointer '>
        <img src={CoinImg} alt='' className='h-80' />
        <div className=''>
          
          <ProcessInput
            tier={1}
            process={'mint'}
            onClick={() => handleClick(1, T1)}
            selected={selected}
          />
          <PriceInput price={2.85} unit={'sol'} />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center cursor-pointer '>
        <img src={CoinImg} alt='' className='h-80' />
        <div>
          <ProcessInput
            tier={5}
            process={'mint'}
            onClick={() => handleClick(5, T2)}
            selected={selected}
          />
          <PriceInput price={14.25} unit={'sol'} />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center cursor-pointer '>
        <img src={CoinImg} alt='' className='h-80' />
        <div className=''>
          <ProcessInput
            tier={10}
            process={'mint'}
            onClick={() => handleClick(10, T3)}
            selected={selected}
          />
          <PriceInput price={28.5} unit={'sol'} />
        </div>
      </div>
    </div>
  );
}

export default Mint;
