
import React from 'react'
import imgGround from '../../assets/img/ground.png'
import imgGeology from '../../assets/img/geology.png'
import styleReviews from './Reviews.module.css'

export default function Reviews() {
  return (
    <>
      <section className={`${styleReviews.lon} px-lg-5 px-md-4 px-sm-5 px-1`}>
        <div className='row px-md-0 py-4 px-1'>
            <div className='col-12 col-md-6 d-flex justify-content-center align-items-center'>
                <div className={`row m-0 p-3 d-none d-md-flex ${styleReviews.imgReviews}`}>
                    <div className='col-6 p-2'>
                        <img className='w-100' src={imgGround} alt="img Ground" />
                    </div>
                    <div className='col-6 p-2'>
                        <img className='w-100' src={imgGeology} alt="img Geology" />
                    </div>
                    <div className='col-6 p-2'>
                        <img className='w-100' src={imgGround} alt="img Ground" />
                    </div>
                    <div className='col-6 p-2'>
                        <img className='w-100' src={imgGeology} alt="img Geology" />
                    </div>
                </div>
            </div>
            <div className='col-12 col-md-6 text-end d-flex-column align-self-center p-4'>
                <p className={`col-12 col-lg-10 ms-auto ${styleReviews.h2Reviews}`}>مراجعات شاملة في مادة الجيولوجيا استعد للنجاح</p>
                <p className={`col-12 col-md-10 col-lg-9 ms-auto ${styleReviews.pReviews}`}>"هل أنت مستعد لاجتياز امتحانات الجيولوجيا بثقة؟ نقدم لك سلسلة مراجعات شاملة تغطي جميع مواضيع المادة بأسلوب مبسط ومركز. انضم إلينا لتطوير فهمك للجيولوجيا من الأساسيات إلى المواضيع المتقدمة، مع شرح معمق ورسوم توضيحية تساعدك على استيعاب المفاهيم بسرعة. لا تفوت الفرصة – استعد للنجاح معنا"</p>
                <div className=' text-center text-md-end '>
                    <button className={`btn  ${styleReviews.ReviewsButton}`}>تصفح المراجعات</button>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

