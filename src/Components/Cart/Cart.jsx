
import React from 'react'
import imtest from '../../assets/img/book item1.png'
import styleCart from './Cart.module.css'

export default function Cart() {
  return (
    <section className='cart p-2'>
      {/* <h2>Cart</h2> */}
      <div className='container-fluid'>
        <div className="row flex-column-reverse flex-md-row">
            {/* محموع السلة */}
            <div className=' col-12 col-md-3 border rounded p-3 h-100'>
                <h5 className='text-end'>محموع السلة</h5>
                <div className='d-flex justify-content-between'>
                    <p>$ 53.98</p>
                    <p>المحموع</p>
                </div>
                <div className='d-flex justify-content-between'>
                    <p>حسب المكان</p>
                    <p>الشحن</p>
                </div>
                <div className='d-flex justify-content-between'>
                    <p>$ 6.00</p>
                    <p>الحصم</p>
                </div>
                <div className='d-flex justify-content-between border-top pt-2 mt-2'>
                    <p>$ 47.98</p>
                    <p>الاجمالى</p>
                </div>
                <button className={`btn ${styleCart.btnsty}`}>اتمام الطلب</button>
            </div>
            {/* المنتجات */}
            <div className={`col-12 col-md-9 overflow-auto `}>
                <div className={` ${styleCart.uptable}`}>                
                    <table className={` ${styleCart.tablesty} table `}>
                        <thead className="table-light">
                            <tr>
                                <th>حذف</th>
                                <th>المجموع</th>
                                <th>الكمية</th>
                                <th>السعر</th>
                                <th>المنتج</th>
                                <th>#</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='align-middle '>
                                <td>
                                    <button className='btn p-0 border-0' title='حذف المنتج'>
                                        <i className="fa-solid fa-trash text-danger"></i>
                                    </button>
                                </td>
                                <td>$ 26.99</td>
                                <td>
                                    <div className={`${styleCart.btn2}`}>
                                        <button className='btn btn-sm'>-</button>
                                        <span className='mx-2'>1</span>
                                        <button className='btn btn-sm'>+</button>
                                    </div>
                                </td>
                                <td>$ 26.99</td>
                                <td >
                                    <div className={`${styleCart.imgsty} ms-auto`}>
                                        <span>{'مبادئ علم الجيولوجيا (Principles of Geology)'}</span>
                                        <div>
                                            <img className='w-100' src={imtest} alt="img" />
                                        </div>
                                    </div>
                                </td>
                                <td>1</td>
                            </tr>
                            <tr className='align-middle '>
                                <td>
                                    <button className='btn p-0 border-0' title='حذف المنتج'>
                                        <i className="fa-solid fa-trash text-danger"></i>
                                    </button>
                                </td>
                                <td>$ 26.99</td>
                                <td>
                                    <div className={`${styleCart.btn2}`}>
                                        <button className='btn btn-sm'>-</button>
                                        <span className='mx-2'>1</span>
                                        <button className='btn btn-sm'>+</button>
                                    </div>
                                </td>
                                <td>$ 26.99</td>
                                <td >
                                    <div className={`${styleCart.imgsty} ms-auto`}>
                                        <span>{'مبادئ علم الجيولوجيا (Principles of Geology)'}</span>
                                        <div>
                                            <img className='w-100' src={imtest} alt="img" />
                                        </div>
                                    </div>
                                </td>
                                <td>2</td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

