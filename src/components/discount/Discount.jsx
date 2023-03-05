import React from 'react'
import './Discount.css'
import img1 from '../../assets/img/pngwing 14.png'
import img2 from '../../assets/img/pngwing 13.png'

function Discount() {
    return (
        <div className='Discount container'>
            {/* Address_shop */}
            <div className="Address_shop">
                <h3 className='Address_shop_h3'>Адреса магазинов</h3>
                <p className='Address_shop_p'>Найдите ближайший салон или <br />
                    удобный для вас пункт самовывоза
                </p>
                <button className='Address_shop_button'>Показать на карте</button>
            </div>
            {/* quality */}
            <div className="quality">
                <div className="quality_left">
                    <h1 className='quality_left_h1'>Забота о здоровье
                        детского сна
                    </h1>
                    <div className="quality_left_df">
                        <h1 className='quality_left_df_h1'>10</h1>
                        <h2 className='quality_left_df_h2'>%
                            Дополнительная
                            скидка
                        </h2>
                    </div>
                    <button className='quality_left_button'>Заказать</button>
                </div>
                <div className="quality_right">
                    <img src={img1} alt="" />
                </div>
            </div>
            <div className="Selection_mattresses">
                <img className='Selection_mattresses_img' src={img2} alt="" />
                <h3 className='Address_shop_h3'>Подбор матрасов</h3>
                <p className='Address_shop_p'>Найдите ближайший салон или <br />
                    удобный для вас пункт самовывоза
                </p>
                <button className='Address_shop_button'>Подобрать матрас</button>
            </div>
        </div>
    )
}

export default Discount