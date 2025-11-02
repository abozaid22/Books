
import footerStyle from './Footer.module.css'
import logoLine from '../../assets/img/smallicon.png'
import imgPayment from '../../assets/img/payment.png'

export default function Footer() {
  return (
    <>
    <footer className={footerStyle.footerColor}>
      <div className=' container-lg'>
        <div className='text-white'>
          {/* up */}
          <div className='row text-end flex-column-reverse flex-md-row'>
          {/* 4 out of 4 */}
            <div className='w-auto d-block d-md-none mb-md-auto mb-3'>
              <h5>أخر الأخبار</h5>
                <form className={`${footerStyle.fstyle} ms-auto p-2 rounded-2 d-flex align-items-center justify-content-between`}>
                  <button type='button' className={`${footerStyle.wBtn}  btn`}>!سجل الأن</button>
                  <input className='w-50 bg-transparent border-0 text-white' type="email" placeholder="ادخل بريدك الالكتروني" />
                  <i className="fa-solid fa-envelope"></i>
                </form>
            </div>

              {/* 1 contact */}
              <div className='my-3 col-12 col-md-3'>
                <h5>تواصل معنا</h5>
                <img className={`mb-3 ${footerStyle.styImg}`} src={logoLine} alt="logoLine" />
                <p>44 Danwers,  NY City, USA, 70-102 <i className="fa-solid fa-location-dot fs-6"></i></p>
                <p>info.example@gmail.com <i className="fa-solid fa-envelope"></i></p>
                <p>91+585-656-658 <i className="fa-solid fa-phone-volume"></i></p>
              </div>
              {/* 2 Site policy */}
              <div className='my-3 col-12 col-md-3'>
                <h5>سياسة الموقع</h5>
                <img className={`mb-3 ${footerStyle.styImg}`} src={logoLine} alt="logoLine" />
                <p>الشروط والأحكام <i className="fa-solid fa-chevron-left"></i></p>
                <p>سياسة الشحن <i className="fa-solid fa-chevron-left"></i></p>
                <p>الخصوصية <i className="fa-solid fa-chevron-left"></i></p>
              </div>
              {/* 3 website */}
              <div className='my-3 col-12 col-md-2'>
                <h5>الموقع</h5>
                <img className={`mb-3 ${footerStyle.styImg}`} src={logoLine} alt="logoLine" />
                <p>الرئيسية <i className="fa-solid fa-chevron-left"></i></p>
                <p>جميع الكتب <i className="fa-solid fa-chevron-left"></i></p>
                <p>منتجات جديدة <i className="fa-solid fa-chevron-left"></i></p>
                <p>المدخرات <i className="fa-solid fa-chevron-left"></i></p>
                <p>المراجعات <i className="fa-solid fa-chevron-left"></i></p>
              </div>
              {/* 4 form */}
              <div className='my-3 col-12 col-md-4 d-flex flex-column justify-content-between'>
                <div>
                  <h5>Logo</h5>
                  <p className='ps-4'>انضم إلينا واستكشف كنوز الطبيعة من خلال كتبنا المختارة بعناية</p>
                </div>
                <div className='w-auto d-none d-md-block'>
                  <h5>أخر الأخبار</h5>
                    <form className={`${footerStyle.fstyle} ms-auto p-2 rounded-2 d-flex align-items-center justify-content-between`}>
                      <button type='button' className={`${footerStyle.wBtn}  btn`}>!سجل الأن</button>
                      <input className='w-50 bg-transparent border-0 text-white' type="email" placeholder="ادخل بريدك الالكتروني" />
                      <i className="fa-solid fa-envelope"></i>
                    </form>
                </div>
            </div>

          </div>
          
          {/* down */}
          <div className={`${footerStyle.down} down`}>
            <div className='container'>
              <div className='row flex-column-reverse flex-md-row my-3 '>
                {/* payment */}
                <div className='text-md-start text-center col-12 col-md-6'>
                  <img className='img-fluid clamp-img' src={imgPayment} alt="imgPayment" />
                </div>
                {/* social media */}
                <div className='col-12 col-md-6 d-flex align-items-center justify-content-md-end justify-content-center'>
                  <div className={`${footerStyle.sIcon}`}>
                    <a href="http://instagram.com" target="_blank" rel="noopener noreferrer" title="صفحتنا على انستغرام">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </div>
                  <div className={`${footerStyle.sIcon}`}>
                    <a href="http://x.com" target="_blank" rel="noopener noreferrer" title="صفحتنا على تويتر">
                      <i className="fa-brands fa-twitter"></i>
                    </a> 
                  </div>
                  <div className={`${footerStyle.sIcon}`}>
                    <a href="http://youtube.com" target="_blank" rel="noopener noreferrer" Title="صفحتنا على يوتيوب">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </div>
                  <div className={`${footerStyle.sIcon}`}>
                    <a href="http://facebook.com" target="_blank" rel="noopener noreferrer" title="صفحتنا على فيسبوك">
                      <i className="fa-brands fa-facebook"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
     {/* © 2024 */}
      <div className={`${footerStyle.sMoga} `}>
        <h5 className='pt-2'> © جميع الحقوق محفوظة 2024</h5>
      </div>
      
    </footer>
    </>
  )
}
