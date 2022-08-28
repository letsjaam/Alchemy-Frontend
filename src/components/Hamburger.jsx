import { Link, useLocation } from 'react-router-dom';

function Hamburger({ isClicked, handleClick }) {
  const location = useLocation();
  return (
    <div className='md:hidden '>
      <div
        className=' cursor-pointer border-1 border-white relative '
        onClick={handleClick}
      >
        <div
          className={`relative z-20 w-10 h-[33px] transform rotate-0 transition duration-50 ease-in-out cursor-pointer  `}
        >
          <span
            className={`bg-white block absolute w-full h-[5px] rounded-[7px] opacity-100 left-0 transform rotate-0 transition duration-250 ease-in-out origin-[3px_1px] top-0 ${
              isClicked && '-top-0  rotate-45'
            }`}
          ></span>
          <span
            className={`bg-white block absolute w-full h-[5px] rounded-[7px] opacity-100 left-0 transform rotate-0 transition duration-250 ease-in-out origin-left-center top-[14px] ${
              isClicked && 'w-0 opacity-0'
            }`}
          ></span>
          <span
            className={`bg-white block absolute w-full h-[5px] rounded-[7px] opacity-100 left-0 transform rotate-0 transition duration-250 ease-in-out origin-[-3px_1px] top-7 ${
              isClicked && '-rotate-45'
            }`}
          ></span>
        </div>
        <div
          className={`h-[300px] w-[280px] bg-white absolute right-10 z-10 transition-all duration-500 rounded-xl  flex-col font-bold justify-center text-center  ${
            isClicked ? 'opacity-100 flex' : 'opacity-0 hidden'
          } `}
        >
          <Link
            to='/mint'
            className={`transition-all hover:bg-gray-200 hover:opacity-100  p-4 ${
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
        </div>
      </div>
    </div>
  );
}

export default Hamburger;
