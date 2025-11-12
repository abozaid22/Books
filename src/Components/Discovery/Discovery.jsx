
import React from 'react'
import imgBooksList from '../../assets/img/books-list.png'
import styleDiscovery from './Discovery.module.css'

export default function Discovery() {
  return (
    <>
      <section className='px-lg-5 px-md-4 px-sm-5 px-1'>
        <div className='row m-0 py-5'>
            <div className={`col-12 col-md-6 d-flex justify-content-center align-items-center`}>
                <div className={`p-md-5 p-4 px-5 shadow rounded rounded-4 ${styleDiscovery.simg}`}>
                    <img className='w-100' src={imgBooksList} alt="imgBooksList" />
                </div>
            </div>
            <div className='text-end d-flex-column align-self-center col-12 col-md-6 p-4'>
                <p className={`col-12 col-lg-10 ms-auto ${styleDiscovery.enwan}`}>استكشف أعماق الأرض مع مجموعتنا الجديدة من كتب الجيولوجيا</p>
                <p className={`col-12 col-md-10 col-lg-9 ms-auto ${styleDiscovery.nas}`}>"سواء كنت طالبًا، باحثًا، أو عاشقًا للطبيعة، مجموعتنا الجديدة من كتب الجيولوجيا مصممة خصيصًا لك! من أساسيات الجيولوجيا إلى علوم الصخور والبترول والهيدرولوجيا الجيولوجية، اكتشف كنوز المعرفة التي تأخذك في رحلة عبر الزمن والأرض. أضف لمكتبتك مصادر موثوقة تساعدك على فهم كوكبنا بشكل أعمق."</p>
                <button className={`btn ${styleDiscovery.dButton}`}>سجل الان</button>
            </div>
        </div>
      </section>
    </>
  )
}

