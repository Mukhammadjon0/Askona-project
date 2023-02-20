import React from "react";
import Knopka1 from "../../assets/img/Knopka1.png";
import Knopka2 from "../../assets/img/Knopka2.png";
import Mebil1 from "../../assets/img/Mebil1.png";
import Mebil2 from "../../assets/img/Mebil2.png";
import Mebil3 from "../../assets/img/Mebil3.png";
import Mebil4 from "../../assets/img/Mebil4.png";
import Mebil5 from "../../assets/img/Mebil5.png";
import Gradus360 from "../../assets/img/Gradus360.png";
import Rek from "../../assets/img/Rek.png";
import search from "../../assets/img/search.png";
import Pauz from "../../assets/img/Pauz.png";
import DivanHunburg from "../DivanHunburg/DivanHunburg";
function ProductDetail() {
  return (
    <div className=" flex ml-16 mr-16 mb-24 ">
      <div>
        <div className="flex  ">
          <div className=" flex justify-center items-center flex-col mr-10">
            <img
              className="border-2 border-solid border-red-50 px-12 py-2"
              src={Knopka1}
              alt=""
            />
            <img
              className="border-2 border-solid border-red-50 mt-4 "
              src={Mebil1}
              alt=""
            />
            <img
              className="border-2 border-solid border-red-50 mt-4 "
              src={Mebil2}
              alt=""
            />
            <img
              className="border-2 border-solid border-red-50 mt-4 "
              src={Mebil3}
              alt=""
            />
            <img
              className="border-2 border-solid border-red-50 mt-4 "
              src={Mebil4}
              alt=""
            />
            <img
              className="border-2 border-solid border-red-50 mt-4 "
              src={Mebil5}
              alt=""
            />
            <img
              className="border-2 border-solid border-red-50  px-12 py-2 mt-4"
              src={Knopka2}
              alt=""
            />
          </div>
          <div className="w-[800px] mr-9  border-2 border-solid border-gray-100   px-4 py-4">
            <div className="flex flex-col items-end  ">
              <p className="rounded bg-[#4FB7FF] px-2 py-1 w-32 text-white">
                Товар недели
              </p>
              <p className="rounded border-2 bg-[#FFD54F] text-white border-solid border-gray-100 px-2 py-1 w-36 mt-2 ">
                Доставка 1 день
              </p>
            </div>
            <img className="flex items-start w-[85%]  " src={Rek} alt="" />
            <div className="flex justify-between items-center">
              <div className="flex">
                <img className="mr-2" src={Pauz} alt="" />

                <img src={Gradus360} alt="" />
              </div>
              <img src={search} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <DivanHunburg />
      </div>
    </div>
  );
}

export default ProductDetail;
