
import styleSider from './AllBookssSider.module.css'

export default function AllBooks({books}) {
  return (
    <>
    <div key={books.id} className=' p-2 '>
        <div className={`${styleSider.cardStyle}`}>
          <div className={`${styleSider.textStyle}`}>
            <h6>{books.titleAr}</h6>
            <h6>{books.titleEn}</h6>
            <p className='text-black-50'>{books.text}.</p>
            <p className='text-black-50'>{books.author}</p>
            <p className='text-black-50'>{books.rate} <i className={`${styleSider.star} fa-solid fa-star`}></i> </p>
            <p>
              <del className='text-black-50 me-4'>{books.price}</del> <span>{books.sale}</span>
            </p>
            <button className={`btn ${styleSider.btnStyleAllBook}`}>أضف إلى عربة التسوق <i className="fa-solid fa-cart-shopping"></i></button>
          </div>
          <div className={`${styleSider.imgStyle} `}>
            <img className='w-100' src={books.img} alt="img" />
          </div>
        </div>
      </div>

    </>
  )
}
