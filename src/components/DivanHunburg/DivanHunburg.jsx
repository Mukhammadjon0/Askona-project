import React from 'react'
import span from "../../assets/img/span.png"
import undov from "../../assets/img/undov.png"
import Knopka from "../../assets/img/Knopka2.png"
import Image from "../../assets/img/Image.png"
import Frame from "../../assets/img/Frame.png"
import Frame1 from "../../assets/img/Frame2.png"
import Frame2 from "../../assets/img/Frame (1).png"
import Frame3 from "../../assets/img/Frame (2).png"
import Group from "../../assets/img/Group.png"
function DivanHunburg() {
  return (
    <div>
      <div>
        <h1 className="font-extrabold text-3xl">
          Диван Hamburg Velutto 32 угловой
        </h1>
        <p className="text-gray-400 mt-2">Код товара: ЦБ-00079986</p>
        <h2 className="flex font-semibold mt-4">
          <span className="text-[#FF0064] mr-2">До конца акции осталось: </span>
          <p>3 дня 10:16:31</p>
        </h2>
        <div className="flex items-end mt-4">
          <h2 className="text-[#00B9C0] font-semibold text-2xl mr-7">
            385 000 BYN
          </h2>
          <p className="font-normal text-gray-400 line-through mr-7">
            97 800 BYN
          </p>
          <img src={span} alt="" />
        </div>
        <div className="flex justify-between mt-2">
          <p className="flex">
            <p className="text-gray-400 mr-1">Рассрочка от </p>
            <p className="underline"> 289.5 BYN</p>
          </p>
          <p>Оплатить частями</p>
        </div>
        <div className="flex mt-2">
          <img src={undov} alt="" />
          <p className="mx-1 font-semibold">+ 289 </p>
          <p className="text-gray-400">Бонусных баллов за покупку</p>
        </div>
        <div className="mt-9">
          <h1>Размер спального места:</h1>
          <div className="h-10 flex justify-between border-2 border-solid border-gray-300 items-center px-2 rounded mt-3">
            <h2>160x200</h2>
            <img src={Knopka} alt="" />
          </div>
        </div>
        <div className="mt-7">
          <h1>Ткань:</h1>
          <div className="h-10 flex justify-between border-2 border-solid border-gray-300 items-center px-2 rounded mt-3">
            <div className="flex items-center">
              <img className="mr-2" src={Image} alt="" />
              <h2>Sky Velvet 99</h2>
            </div>
            <img src={Knopka} alt="" />
          </div>
          <div>
            <button className="h-10 w-[100%] bg-gray flex justify-center border-2 border-solid  border-gray-300 items-center px-2 rounded mt-5 bg-">
              <h2>Изменить конфигурацию</h2>
            </button>
            <div className="flex justify-between mt-2">
              <button className="w-[47%] rounded bg-[#00B9C0] text-white py-2">
                В корзину
              </button>
              <button className="w-[47%] border-2 border-solid  border-gray-300 py-2 rounded">
                Купить в 1 клик
              </button>
            </div>
          </div>

          <div>
            <div className="mt-10 flex items-center justify-between border-b border-solid border-gray-300 pb-5 ">
              <div className="flex items-center">
                <img className="mr-2" src={Frame} alt="" />
                <h2>Мы рекомендуем к товару</h2>
              </div>
              <img src={Knopka} alt="" />
            </div>
            <div className="mt-5 flex items-center justify-between border-b border-solid border-gray-300 pb-5 ">
              <div className="flex items-center">
                <img className="mr-2" src={Group} alt="" />
                <h2>Доставка и самовывоз</h2>
              </div>
              <img src={Knopka} alt="" />
            </div>
            <div className="mt-5 flex items-center justify-between border-b border-solid border-gray-300 pb-5 ">
              <div className="flex items-center">
                <img className="mr-2" src={Frame2} alt="" />
                <h2>Характеристики</h2>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between border-b border-solid border-gray-300 pb-5 ">
              <div className="flex items-center">
                <img className="mr-2" src={Frame1} alt="" />
                <h2>Описание</h2>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between border-b border-solid border-gray-300 pb-5 ">
              <div className="flex items-center">
                <img className="mr-2" src={Frame3} alt="" />
                <h2>Отзывы (1)</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DivanHunburg