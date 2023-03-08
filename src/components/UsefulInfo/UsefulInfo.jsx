import React from 'react'
import icon1 from '../../assets/svg/Vector.svg'
import icon2 from '../../assets/svg/Vector (1).svg'
import icon3 from '../../assets/svg/eco.svg'
import './UsefulInfo.css'

function UsefulInfo() {
    
    return (
        <div className='Useful_info'>
            <h2 className='font-semibold text-4xl text-center'>Askona заряжает сном</h2>
            <p className='Useful_info_p'>Мы постоянно разрабатываем инновационные решения и выпускаем только такую продукцию, в которой <br />
                уверены на 100%. День за днём мы работаем для того , чтобы каждую ночь вы погружались в здоровый сон, <br />
                набираясь сил для новых свершений
            </p>
            <div className="Useful_info_df">
                <div className="Useful_info_df1">
                    <img className='Useful_info_df_img' src={icon1} alt="" />
                    <h2 className='Useful_info_df_h2'>Единственная в России лаборатория сна</h2>
                    <p className='Useful_info_df_p'>Сертифицированная по стандартам ISO. В ней мы создаем <br />
                        будущее. И тестируем все новые модели матрасов, диванов <br />
                        и  кроватей Askona.
                    </p>
                </div>
                <div className="Useful_info_df2">
                    <img className='Useful_info_df_img' src={icon2} alt="" />
                    <h2 className='Useful_info_df_h2'>Марка № 1 в России</h2>
                    <p className='Useful_info_df_p'>По результатам народного голосования. Мы прошли стажировку в <br />
                        лучших немецких и шведских компаниях, чтобы перенять стандарты <br />
                        качества и поднять их на ещё более высокий уровень.
                    </p>
                </div>
                <div className="Useful_info_df3">
                    <img className='Useful_info_df_img' src={icon3} alt="" />
                    <h2 className='Useful_info_df_h2'>Забота об окружающей среде</h2>
                    <p className='Useful_info_df_p'>
                        Мы максимально бережно взаимодействуем с природой, <br />
                        обеспечивая её сохранность. Доля перерабатываемых отходов <br />
                        в Askona составляет 100%.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default UsefulInfo