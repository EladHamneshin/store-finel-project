import Top5Products from '../components/Top5Products'
import Top5Categories from '../components/Top5Categories'

import BasicModal from '../components/Modal';
import CategoryNav from '../components/CategoryNav';
import BannerSide from '../banners/BannerSide';


const HomePage = () => {
  return (
    <>
    <Top5Categories/>
    <Top5Products/>
    </>
  )
}

export default HomePage;