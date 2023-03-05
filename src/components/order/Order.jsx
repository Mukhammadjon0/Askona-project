import React from 'react'
import './Order.css'

function Order() {
    return (
        <div className="bg-white p-4">
            <div className="Registration">
                <div className="Registration_filling">
                    <h2 className="Registration_filling_h2">Телефон:</h2>
                    <input className="Registration_filling_input" type="text" placeholder="Ваш номер телефона" />
                </div>
                <div className="Registration_filling">
                    <h2 className="Registration_filling_h2">Имя:</h2>
                    <input className="Registration_filling_input" type="text" placeholder="Введите ваше Имя" />
                </div>
                <div className="Registration_filling">
                    <h2 className="Registration_filling_h2">Фамилия:</h2>
                    <input className="Registration_filling_input" type="text" placeholder="Введите вашу Фамилию" />
                </div>
                <div className="Registration_filling">
                    <h2 className="Registration_filling_h2">Эл. почта:</h2>
                    <input className="Registration_filling_input" type="text" placeholder="Введите адрес электронной почты" />
                </div>
                <div className="Delivery_methods">
                    <h1 className="Delivery_methods_h1">Способы доставки</h1>
                    <div className="radio_input">
                        <div className="radio">
                            <input className="input_radio" type="radio" name="radio" />
                            <h3 className="radio_h3">Доставка курьером</h3>
                        </div>
                        <div className="radio">
                            <input className="input_radio" type="radio" name="radio" />
                            <h3 className="radio_h3">Самовывоз из магазина Аскона</h3>
                        </div>
                    </div>
                </div>
                <div className="evidence">
                    <h3 className="evidence_h3">Город:</h3>
                    <div className="evidence_df">
                        <input className="Addres_input" type="text" placeholder='Введите или выберите ваш город ' />
                    </div>
                </div>
                <div className="Addres">
                    <h3 className="Addres_h3">Адрес:</h3>
                    <input className="Addres_input" type="text" placeholder='г. Минск. Склад: ул. Промышленная,19' />
                </div>
                <div className="comment">
                    <h3 className="Addres_h3">Комментарий:</h3>
                    <textarea rows="4" cols="50" className="Addres_input"></textarea>
                </div>
                <div className="Delivery_methods">
                    <h1 className="Delivery_methods_h1">Способы оплаты</h1>
                    <div className="radio_input">
                        <div className="radio">
                            <input className="input_radio" type="radio" name="radio" />
                            <h3 className="radio_h3">Картой при получении</h3>
                        </div>
                        <div className="radio">
                            <input className="input_radio" type="radio" name="radio" />
                            <h3 className="radio_h3">Наличными при получении</h3>
                        </div>
                        <div className="radio">
                            <input className="input_radio" type="radio" name="radio" />
                            <h3 className="radio_h3">Банковский перевод (для юр. лиц)</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Order