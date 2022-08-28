import CoinImg from '../assets/10A_Front.png';
import ProcessInput from '../components/ProcessInput';
import PriceInput from '../components/PriceInput';
import { useState } from 'react';

function SellNFT() {
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
            process={'sell'}
            onClick={() => handleClick(1)}
            selected={selected}
          />
          <PriceInput price={85} unit={'$'} />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center cursor-pointer '>
        <img src={CoinImg} alt='' className='h-80' />
        <div>
          <ProcessInput
            tier={5}
            process={'sell'}
            onClick={() => handleClick(5)}
            selected={selected}
          />
          <PriceInput price={425} unit={'$'} />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center cursor-pointer '>
        <img src={CoinImg} alt='' className='h-80' />
        <div className=''>
          <ProcessInput
            tier={10}
            process={'sell'}
            onClick={() => handleClick(10)}
            selected={selected}
          />
          <PriceInput price={850} unit={'$'} />
        </div>
      </div>
    </div>
  );
}

export default SellNFT;
