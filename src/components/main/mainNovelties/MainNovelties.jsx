import React from "react";

import { bestSales } from "../../../datas";
import { VscSymbolRuler } from "react-icons/vsc";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
function MainNovelties() {
  return (
    <div className="container">
      <h1 className="title mt-[65px]">Новинки</h1>
      <div className="main__cards flex gap-4 container">
        {bestSales.map((el) => (
          <div className="main__card bg-red-400 p-4">
            <div className="main__card-head">
              <div className="main__card-img">
                <img src={el.image} alt="" />
              </div>
              <div className="main__card-status flex justify-between px-[13px]">
                <img src={el.spanImg} alt="" />
                <span className="main__card-span bg-[#FFD54F] w-[116px] h-[24px] rounded flex justify-center items-center text-[12px] font-medium">
                  Товар недели
                </span>
              </div>
            </div>
            <span className="main__card-line"></span>
            <div className="main__card-body mt-[27px]">
              <h2>{el.title}</h2>
              <p className="card__body-price">
                от
                <span className="card__body-spanPrice text-[#00B9C0]">
                  {el.price} {el.value}
                </span>
                <span className="card__body-spanOldPrice">
                  {el.oldPrice} {el.value}
                </span>
              </p>
              <p className="card__body-payment">
                Рассрочка от <span className="text-[#212121]">289.5 BYN</span>
              </p>
              <div className="card__body-desc flex gap-[14px]">
                <div className="card__body-descLeft flex gap-[18.3px] items-center">
                  <VscSymbolRuler className="text-[35px]" />
                  <div className="card__body-descInfo">
                    <h2>Высота:</h2>
                    <p>{el.height}</p>
                  </div>
                </div>
                <div className="card__body-descRight flex gap-[14.53px] items-center">
                  <HiOutlineChevronDoubleDown className="card__icon text-[18px]" />
                  <div className="card__body-descInfo">
                    <h2>Вес на спальное место:</h2>
                    <p>{el.weight}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainNovelties;
