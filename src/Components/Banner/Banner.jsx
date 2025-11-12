
import React from 'react'
import bookImg1 from '../../assets/img/book item1.png'
import bookImg2 from '../../assets/img/book item2.png'
import styleBanner from './Banner.module.css'

export default function Banner() {
  return (
    <>
      <section className={styleBanner.banner}>
        <div className='bg-dark opacity-50 position-absolute top-0 bottom-0 start-0 end-0'></div>
            <div className='row justify-content-center align-items-center position-relative h-100 w-100 m-0 '>
                <div className={`col-md-7 col-12 ${styleBanner.textD}`}>
                  <p>بيع كتب الجيولوجيا يعدّ فرصة رائعة للطلاب والباحثين ومحبي العلوم الطبيعية لفهم تكوين الأرض وتاريخها. تقدم هذه الكتب معلومات معمقة حول الصخور، المعادن، البراكين، الزلازل، وتحركات الصفائح التكتونية، مما يساعد القارئ على فهم البيئات الطبيعية والكوارث الجيولوجية. من خلال توفير كتب الجيولوجيا، يمكن للقراء الاطلاع على أحدث الدراسات والنظريات المتعلقة بعلم الأرض، مما يعزز من وعيهم البيئي ويشجعهم على المشاركة في الحفاظ على كوكبنا.</p>
                  <button className='btn '>سجل الان</button>
                </div>
                <div className='col-5 d-md-flex d-none h-100 d-flex  align-items-center'>
                    <div className='overflow-hidden position-relative w-100 h-75 d-flex justify-content-end align-items-center pe-lg-5 pe-0'>
                        <img className={`position-absolute ${styleBanner.book1}`} src={bookImg2} alt="book" />
                        <img className={`position-absolute ${styleBanner.book2}`} src={bookImg1} alt="book" />
                        <img className={`position-absolute ${styleBanner.book3}`} src={bookImg2} alt="book" />
                    </div>
                </div>
            </div>
      </section>
    </>
  )
}

