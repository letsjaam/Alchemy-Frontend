import blackLogo from '../../assets/black_logo.svg';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import Hamburger from '../Hamburger';
import PhantomConnectWallet from '../PhantomConnectWallet';

function Header({walletConnected, setUserAddress, setWalletConnected}) {
  const location = useLocation();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className='bg-orange-300 px-5 '>
      <div className=' container mx-auto flex items-center justify-between md:gap-x-[12rem] relative   '>
        <Link to='/'>
          <img src={blackLogo} alt='logo' className='h-36 p-4' />
        </Link>

        <nav className='hidden md:flex text-lg uppercase font-semibold absolute bottom-0 right-[15%]  '>
          <Link
            to='/mint'
            className={`transition-all hover:bg-gray-200 hover:opacity-100 border-2 rounded-lg p-4 ${
              location.pathname === '/mint'
                ? ' bg-gray-200 opacity-100'
                : 'opacity-80 '
            }`}
          >
            Mint
          </Link>
          <Link
            to='/sell-nft'
            className={`transition-all  hover:bg-gray-200 hover:opacity-100 border rounded-lg p-4 ${
              location.pathname === '/sell-nft'
                ? ' bg-gray-200 opacity-100'
                : 'opacity-80 '
            }`}
          >
            Sell NFT
          </Link>
          <Link
            to='/audit'
            className={`transition-all hover:bg-gray-200 hover:opacity-100 border rounded-lg p-4 ${
              location.pathname === '/audit'
                ? ' bg-gray-200 opacity-100'
                : 'opacity-80 '
            }`}
          >
            Audit
          </Link>
          <Link
            to='/about'
            className={`transition-all  hover:bg-gray-200 hover:opacity-100 border rounded-lg p-4 ${
              location.pathname === '/about'
                ? ' bg-gray-200 opacity-100'
                : 'opacity-80 '
            }`}
          >
            About
          </Link>
          <Link
            to='/faq'
            className={`transition-all hover:bg-gray-200 hover:opacity-100 border rounded-lg p-4 ${
              location.pathname === '/faq'
                ? ' bg-gray-200 opacity-100'
                : 'opacity-80 '
            }`}
          >
            FAQ
          </Link>
          <div className={`cursor-pointer transition-all hover:bg-gray-200 hover:opacity-100 border rounded-lg p-4`}>
          <PhantomConnectWallet setUserAddress={setUserAddress} walletConnected={walletConnected} setWalletConnected={setWalletConnected}/>
          </div>
        </nav>
        <Hamburger isClicked={isClicked} handleClick={handleClick} />
      </div>
    </div>
  );
}

export default Header;
