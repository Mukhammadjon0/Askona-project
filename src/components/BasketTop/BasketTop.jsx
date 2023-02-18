import React from "react";
import "./BasketTop.css";
import meb from "../../assets/img/download 1.svg";
import ud from "../../assets/img/Удаление.svg";

function BasketTop() {
  return (
    <div className="basket__Container">
      <h1>Оформление заказа</h1>
      <div className="bask1">
        <div className="basket__Box">
          <h2>Ваш заказ (2)</h2>
          <div
            className="meb__Box "
            style={{ borderBottom: "1px solid rgb(222, 219, 219)" }}
          >
            <div className="meb__Img">
              <img src={meb} alt="" />
              <div className="meb__Title">
                <h3>Ортопедический матрас Askona Ortho Hard</h3>
                <p>
                  {" "}
                  48 900 BYN <span> 97 800 BYN</span>{" "}
                </p>
              </div>
            </div>
            <div className="meb__Count">
              <div className="meb__Sum">
                <button>-</button>
                <button className="but1">1</button>
                <button>+</button>
              </div>
              <button className="clos1">
                <img src={ud} alt="" />
              </button>
            </div>
          </div>
          <div className="meb__Box">
            <div className="meb__Img">
              <img src={meb} alt="" />
              <div className="meb__Title">
                <h3>Ортопедический матрас Askona Ortho Hard</h3>
                <p>
                  48 900 BYN <span> 97 800 BYN</span>
                </p>
              </div>
            </div>
            <div className="meb__Count">
              <div className="meb__Sum">
                <button>-</button>
                <button className="but1">1</button>
                <button>+</button>
              </div>
              <button className="clos1">
                <img src={ud} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bask2">
        <h1>Стоимость заказа</h1>
        <h2>Сроки доставки уточнит менеджер при обработке заказа</h2>
        <div className="prod1">
        <div className="product">
          <p>Товары (2)</p>
          <p>Скидка</p>
        </div>
        <div className="sale">
          <p>100 BYN</p>
          <p>-0 BYN</p>
        </div>
        </div>
        <hr />
        <select>
          <option>Использовать промокод</option>
          <option>Использовать промокод</option>
          <option>Использовать промокод</option>
        </select>
        <hr />
        <div className="tot1">
        <div className="total">
          <h4>Итого</h4>
          <h3>Сейчас к оплате</h3>
        </div>
        <div className="pay">
          <p>127 BYN</p>
          <p>127 BYN</p>
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
  );
}

export default BasketTop;
