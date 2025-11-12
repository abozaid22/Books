
import Banner from '../../Components/Banner/Banner'
import Discovery from '../../Components/Discovery/Discovery'
import Reviews from '../../Components/Reviews/Reviews'
import AllBookssSider from '../../Components/AllBookssSider/AllBookssSider'
import NewProducts from './../../Components/NewProducts/NewProducts';
import Memoirs from './../../Components/Memoirs/Memoirs';
import Emrageat from '../../Components/Emrageat/Emrageat'
import ApiAllBooks from '../../ApiData/ApiAllBooks'

export default function Home() {
  return (
    <>
      <Banner/>
      <AllBookssSider books={ApiAllBooks}/>
      <Discovery/>
      <NewProducts books={ApiAllBooks}/>
      <Memoirs books={ApiAllBooks}/>
      <Reviews/>
      <Emrageat books={ApiAllBooks}/>
    </>
  )
}

