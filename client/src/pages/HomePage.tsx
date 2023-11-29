import Top5Products from '../components/Top5Products'
import Top5Categories from '../components/Top5Categories'
import BannerSide from '../banners/BannerSide';
import BannerTop from '../banners/BannerTop';

const HomePage = () => {
  return (
    <>
    <Top5Categories/>
    <Top5Products/>
    <BannerSide/>
    <BannerTop/>
    </>
  )
}

export default HomePage;