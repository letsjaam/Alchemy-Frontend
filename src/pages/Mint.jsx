import CoinImg from '../assets/10A_Front.png';
import ProcessInput from '../components/ProcessInput';
import PriceInput from '../components/PriceInput';
import { useState } from 'react';

function Mint() {
  const [selected, setSelected] = useState(null);

  const handleClick = (tier) => {
    if (selected === tier) {
      return setSelected(null);
    }
    setSelected(tier);
  };
  return (
    <div className='flex flex-col justify-center md:flex-row'>
      <div className='flex flex-col justify-center items-center cursor-pointer '>
        <img src={CoinImg} alt='' className='h-80' />
        <div className=''>
          <ProcessInput
            tier={1}
            process={'mint'}
            onClick={() => handleClick(1)}
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
            onClick={() => handleClick(5)}
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
            onClick={() => handleClick(10)}
            selected={selected}
          />
          <PriceInput price={28.5} unit={'sol'} />
        </div>
      </div>
    </div>
  );
}

export default Mint;
