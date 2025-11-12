
import Slider from 'react-slick';
import styleSider from './../AllBookssSider/AllBookssSider.module.css'
import AllBooks from './../AllBookssSider/AllBooks';

export default function Memoirs({books}) {
function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={`${className} ${styleSider.nextArrowDiv}`} onClick={onClick}>
      <i className="fa-solid fa-chevron-right"></i>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={`${className} ${styleSider.prevArrowDiv}`} onClick={onClick}>
      <i className="fa-solid fa-chevron-left"></i>
    </div>
  );
}
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    rtl: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1177,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider-container p-lg-5 ">
      
      <div className={`${styleSider.flexBook}`}>
         <p>عرض جميع الكتب</p> 
         <p>المذكرات</p>
       </div>

      <div className=' position-relative'>
        <Slider {...settings}>              
          {books.map((book) => (
              <AllBooks key={book.id} books={book} />
            ))}              
        </Slider>
      </div>
    </div>
  );
}

