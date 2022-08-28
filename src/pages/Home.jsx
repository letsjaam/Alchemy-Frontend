import Coin1 from '../assets/10A_Back.png';
import Coin2 from '../assets/10A_Front.png';

function Home() {
  return (
    <div className=' px-4 container mx-auto flex items-center justify-center '>
      <h1 className='text-4xl 2xl:text-5xl font-bold text-gray-400 w-80 tracking-wide md:leading-[4rem] drop-shadow-2xl '>
        Invest In Physical <span className='text-[#d79b61]'>Gold</span> Using
        NFTs
      </h1>
      <div className='flex drop-shadow-2xl items-center  '>
        <img
          src={Coin2}
          alt=''
          className='h-[24rem] w-[24rem] 2xl:h-[30rem] 2xl:w-[30rem] relative z-10 lg:left-48 2xl:left-60 hidden md:block '
        />
        <img
          src={Coin1}
          alt=''
          className=' h-[24rem] w-[24rem] 2xl:h-[30rem] 2xl:w-[30rem] md:relative md:right-48 lg:right-0  '
        />
      </div>
    </div>
  );
}

export default Home;
