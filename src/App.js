import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Mint from './pages/Mint';
import SellNFT from './pages/SellNFT';
import Audit from './pages/Audit';
import About from './pages/About';
import Faq from './pages/Faq';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <div className='bg-gray-300 pb-12 relative min-h-[70vh] flex justify-center items-center '>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/mint' element={<Mint />} />
            <Route path='/sell-nft' element={<SellNFT />} />
            <Route path='/audit' element={<Audit />} />
            <Route path='/about' element={<About />} />
            <Route path='/faq' element={<Faq />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
