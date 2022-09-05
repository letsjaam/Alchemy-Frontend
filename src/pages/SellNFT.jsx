import CoinImg from '../assets/10A_Front.png';
import ProcessInput from '../components/ProcessInput';
import PriceInput from '../components/PriceInput';
import { useState } from 'react';
import qrCode from '../assets/qr_code.jpeg';
import CopyUserAddress from '../components/CopyUserAddress';
import { SalePrice } from '../components/layout/SalePrice';

const price1 = 85
const price2 = 425
const price3 = 850

function SellNFT() {
	const [selected, setSelected] = useState(null);
	const qrInitialValues = {
		qrCode1:false,
		qrCode2:false,
		qrCode3:false,
	}
	const [qrCodeIsVisible, setQrCodeIsVisible] = useState({qrInitialValues})
	

	const handleClick = (tier) => {
		if (selected === tier) {
			return setSelected(null);
		}
		setSelected(tier);
		// Renders the Qrcode and Clipboard visible or vice versa
		switch(tier){
			case 1 : setQrCodeIsVisible({...qrInitialValues, qrCode1: true})
			break;
			case 5 : setQrCodeIsVisible({...qrInitialValues, qrCode2: true})
			break;
			case 10 :  setQrCodeIsVisible({...qrInitialValues, qrCode3: true})

		}
	};

	

	return (
		<div className='flex flex-col justify-center md:flex-row'>
			<div className='flex flex-col justify-center items-center cursor-pointer '>
				<img src={CoinImg} alt='' className='h-80' />
				<div className='transition-all border-2 border-gray-400 rounded-lg bg-gray-200 p-4 font-bold uppercase text-xl text-gray-400 hover:border-black hover:text-black'>
					<ProcessInput
						tier={1}
						process={'sell'}
						onClick={() => handleClick(1)}
						selected={selected}
					/>
					<img src={qrCode} alt='' className={`transition-all duration-1000 ${qrCodeIsVisible.qrCode1? "h-20": "h-0"} mx-auto mb-4`} /> 

					
					<SalePrice price={price1}  unit={'$'}/>
				</div>
{qrCodeIsVisible.qrCode1 && <CopyUserAddress /> }	
		</div>
			<div className='flex flex-col justify-center items-center cursor-pointer '>
				<img src={CoinImg} alt='' className='h-80' /> 
				<div className="transition-all border-2 border-gray-400 rounded-lg bg-gray-200 p-4 font-bold uppercase text-xl text-gray-400  hover:border-black hover:text-black">
					<ProcessInput
						tier={5}
						process={'sell'}
						onClick={() => handleClick(5)}
						selected={selected}
					/>
					<img src={qrCode} alt='' className={`transition-all duration-1000 ${qrCodeIsVisible.qrCode2? "h-20": "h-0"} mx-auto mb-4`} /> 

					<SalePrice price={price2}  unit={'$'}/>
				</div>
				{qrCodeIsVisible.qrCode2 &&	<CopyUserAddress/> }
			</div>
			<div className='flex flex-col justify-center items-center cursor-pointer '>
				<img src={CoinImg} alt='' className='h-80' />
				<div className='transition-all  border-2 border-gray-400 rounded-lg bg-gray-200 p-4 font-bold uppercase text-xl text-gray-400  hover:border-black hover:text-black'>
					<ProcessInput
						tier={10}
						process={'sell'}
						onClick={() => handleClick(10)}
						selected={selected}
					/>
					<img src={qrCode} alt='' className={`transition-all duration-1000 ${qrCodeIsVisible.qrCode3? "h-20": "h-0"} mx-auto mb-4`} /> 

					<SalePrice price={price3}  unit={'$'}/>
				</div>
				{qrCodeIsVisible.qrCode3 &&	<CopyUserAddress />}
			</div>
		</div>
	);
}

export default SellNFT;
