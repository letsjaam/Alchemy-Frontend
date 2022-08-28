import goldLogo from '../../assets/gold_logo.svg';
function Footer() {
  return (
    <div className='bg-black p-3 '>
      <div className='container mx-auto flex xl:gap-x-8 items-center relative'>
        <img src={goldLogo} alt='' className='h-32 p-4' />
        <span className=' bg-gray-400 h-28 w-0.5 top-2relative rounded-lg ' />
        <div className=' text-[#f9f194] ml-16 '>
          <p>
            Email:{' '}
            <span className='uppercase tracking-wide'>
              info@thealchemylaboryatory.io
            </span>{' '}
          </p>
          <p>Whatsapp: </p>
          <p className='text-gray-300 text-sm mt-4 tracking-wide'>
            The Alchemy Laboratory Limited - Registered Office: 24 Wandsworth
            Bridge Road
            <br />
            Company Number: 14120620
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
