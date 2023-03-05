import React, { useContext } from "react";
import "./BasketTop.css";
import Order from "../order/Order";
import { useNavigate } from "react-router-dom";
import BasketComponent from "../Basket/BasketComponent";
import { useBasketQuery } from "../../services/basketApi";

function BasketTop({ setState, state }) {
  const { data: basket } = useBasketQuery()
  const navigate = useNavigate()
  return (
    <div className="flex flex-col container bg-gray-200 py-14">
      <h1 className="font-bold text-2xl">Оформление заказа</h1>
      <div className="basket__Container gap-8">
        <div className="flex flex-col gap-8">
          <div className="bask1 flex flex-col gap-8">
            <div className="basket__Box bg-white p-5">
              <h2>Ваш заказ ({basket?.data?.length || 0})</h2>
              {basket?.data?.length > 0 ? (
                basket?.data?.map((item) => (
                  <BasketComponent
                    key={item.id}
                    product={item.product}
                    soni={item.soni}
                    bronId={item.id}
                    summa={item.summa}
                    setState={setState}
                    state={state}
                  />
                ))
              ) : (
                <p></p>
              )}
            </div>
            <Order />
          </div>
        </div>


        <div className="bask2">
          <h1>Стоимость заказа</h1>
          <h2>Сроки доставки уточнит менеджер при обработке заказа</h2>
          <div className="prod1">
            <div className="product">
              <p>Товары ({basket?.length || 0})</p>
              <p>Скидка</p>
            </div>
            <div className="sale">
              <p>{basket?.summa.toLocaleString("uz-UZ")} BYN</p>
              <p>0 BYN</p>
            </div>
          </div>
          <hr />
          <input type="text" placeholder="Использовать промокод" />

          <hr />
          <div className="tot1">
            <div className="total">
              <h4>Итого</h4>
              <h3>Сейчас к оплате</h3>
            </div>
            <div className="pay">
              <p>{basket?.summa.toLocaleString("uz-UZ")} BYN</p>
              <p>{basket?.summa.toLocaleString("uz-UZ")} BYN</p>
            </div>
          </div>
          <div className="btns">
            <button className="butt1">Купить в 1 клик</button>
            <button className="butt2">Отправить заказ</button>
          </div>
          <div className="end1">
            <p>
              Нажимая на кнопку, вы соглашаетесь с <span> договором-оферты </span>и <span>  политикой
                обработки и защиты персональных данных.</span>
            </p>
          </div>
        </div>
      </div>

    </div>

  );
}

export default BasketTop;
