import Top5Products from '../components/Top5Products'
import Top5Categories from '../components/Top5Categories'
import BasicModal from '../components/Modal';
import CategoryNav from '../components/CategoryNav';

const HomePage = () => {
  return (
    <>

    <Top5Categories/>
    <Top5Products/>
    <BasicModal/>
    </>
  )
}

export default HomePage;