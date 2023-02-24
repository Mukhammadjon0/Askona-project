import React, { useContext, useEffect, useState } from 'react'
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
import DivanHunburg from "../../components/DivanHunburg/DivanHunburg";
import Comments from '../../components/Comments/Comments';
import { StateContext } from '../../context';
import { useParams } from 'react-router-dom';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';


function ProductDetail() {
  const { id } = useParams()

  const { products } = useContext(StateContext)
  const product = products.find(item => item.id === Number(id))
  const [mainImgId, setMainImgId] = useState(0)
  // console.log(mainImgId)
  // const nextImg = () => {

  //   if (mainImgId <= 0) {
  //     setMainImgId((p) => p + 1)
  //   }
  // }
  // const prevImg = () => {

  //   if (mainImgId <= 5) {
  //     setMainImgId((p) => p - 1)
  //   }
  // }

  const nextImg = () => {
    if (mainImgId > 4) {
      setMainImgId(0)
    }
    setMainImgId((prev) => prev + 1)
  }
  const prevImg = () => {
    if (mainImgId < 0) {
      setMainImgId(4)
    }
    setMainImgId((prev) => prev - 1)
  }

  useEffect(() => {
    if (mainImgId < 0) {
      setMainImgId(4)
    }
    if (mainImgId > 4) {
      setMainImgId(0)
    }
  }, [mainImgId])

  console.log(mainImgId)
  const comments = [
    {
      name: 'Ирина', text: 'Мягкий и на высоких деревянных ножках, в духе ультрамодных тенденций. Сдержанный дизайн и продуманная до мелочей функциональность – в актуальном скандинавском стиле. Компактный Talo освободит пространство даже на небольших площадях.', id: 1
    },
    {
      name: 'Ирина', text: 'Мягкий и на высоких деревянных ножках, в духе ультрамодных тенденций. Сдержанный дизайн и продуманная до мелочей функциональность – в актуальном скандинавском стиле. Компактный Talo освободит пространство даже на небольших площадях.', id: 2
    },
    {
      name: 'Ирина', text: 'Мягкий и на высоких деревянных ножках, в духе ультрамодных тенденций. Сдержанный дизайн и продуманная до мелочей функциональность – в актуальном скандинавском стиле. Компактный Talo освободит пространство даже на небольших площадях.', id: 3
    },
  ]
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  console.log(product.images)

  return (
    <StateContext.Provider value={{ toggleDrawer, state }}>

      <div className='py-8 px-10'>
        <div className="flex flex-row gap-10">
          <div className='flex flex-col gap-12 w-[60%]'>
            <div className="flex">
              <div className=" flex justify-center items-center flex-col">
              <button onClick={prevImg} className='border-2 border-solid border-red-50  px-12 py-1 mt-4'>
                  <MdOutlineKeyboardArrowUp className='text-[#00b6c9]' />
                </button>
                {product.images.map((item, index) => (
                  <img onClick={() => setMainImgId(index)} className='border-2 border-solid border-red-50 mt-4 w-28 cursor-pointer' src={`https://askona.herokuapp.com/${item}`} key={index} alt="" />
                ))}
                <button onClick={nextImg} className='border-2 border-solid border-red-50  px-12 py-1 mt-4'>
                  <MdOutlineKeyboardArrowDown className='text-[#00b6c9]' />
                </button>
              </div>
              <div className="w-[750px] border-2 border-solid border-gray-100   px-4 py-4">
                <div className="flex flex-col items-end  ">
                  <p className="rounded bg-[#4FB7FF] px-2 py-1 w-32 text-white">
                    Товар недели
                  </p>
                  <p className="rounded border-2 bg-[#FFD54F] text-white border-solid border-gray-100 px-2 py-1 w-36 mt-2 ">
                    Доставка 1 день
                  </p>
                </div>
                <img className="flex items-start w-[85%]" src={`https://askona.herokuapp.com/${product.images[mainImgId]}`} alt="" />
                <div className="flex justify-between items-center">
                  <div className="flex">
                    <img className="mr-2" src={Pauz} alt="" />

                    <img src={Gradus360} alt="" />
                  </div>
                  <img src={search} alt="" />
                </div>
              </div>
            </div>

            <div className="bg-[#F6F6F6] py-6 px-8 divide-y flex flex-col">
              <h1 className='font-extrabold text-2xl mb-3'>Характеристики</h1>
              <div className="flex justify-between items-center py-3">
                <h2 className='font-semibold text-lg'>Гарантия</h2>
                <p className='text-black font-medium text-base'>{product.waranty}</p>
              </div>
              <div className="flex justify-between items-center py-3">
                <h2 className='font-semibold text-lg'>Коллекция</h2>
                <p className='text-black font-medium text-base'>{product.collection}</p>
              </div>
              <div className="flex justify-between items-center py-3">
                <h2 className='font-semibold text-lg'>Жесткость матрасов</h2>
                <p className='text-black font-medium text-base'>{product.matras}</p>
              </div>
              <div className="flex justify-between items-center py-3">
                <h2 className='font-semibold text-lg'>Особенности</h2>
                <p className='text-black font-medium text-base'>{product.xususiyatlari}</p>
              </div>
              <div className="flex justify-between items-center py-3">
                <h2 className='font-semibold text-lg'>Наполнитель</h2>
                <p className='text-black font-medium text-base'>{product.qoshimchalari}</p>
              </div>
              <div className="flex justify-between items-center py-3">
                <h2 className='font-semibold text-lg'>Высота, см</h2>
                <p className='text-black font-medium text-base'>{product.balandligi} см</p>
              </div>
              <div className="flex justify-between items-center py-3">
                <h2 className='font-semibold text-lg'>Тип пружинного блока</h2>
                <p className='text-black font-medium text-base'>{product.mehanizm}</p>
              </div>
              <div className="flex justify-between items-center py-3">
                <h2 className='font-semibold text-lg'>Вес на спальное место</h2>
                <p className='text-black font-medium text-base'>До {product.massa} кг</p>
              </div>
              <div className="flex justify-between items-center py-3">
                <h2 className='font-semibold text-lg'>Назначение</h2>
                <p className='text-black font-medium text-base'>{product.maqsad}</p>
              </div>
              <div className="flex justify-between items-center py-3">
                <h2 className='font-semibold text-lg'>Размерность</h2>
                <p className='text-black font-medium text-base'>{product.razmer}</p>
              </div>
              <div className="flex justify-between items-center py-3">
                <h2 className='font-semibold text-lg'>Жесткость</h2>
                <p className='text-black font-medium text-base'>{product.qattiqlik}</p>
              </div>
              <div className="flex justify-between items-center py-3">
                <h2 className='font-semibold text-lg'>Бренд</h2>
                <p className='text-black font-medium text-base'>{product.brand}</p>
              </div>
            </div>
            <div className="w-[800px] flex flex-col gap-5">
              <h1 className='font-bold text-2xl'>Описание</h1>
              <span className='font-semibold text-xl'>Прямой анатомический диван Talo</span>
              <p className='font-normal text-xl'>Мягкий и на высоких деревянных ножках, в духе ультрамодных тенденций. Сдержанный дизайн и продуманная до мелочей функциональность – в актуальном скандинавском стиле. Компактный Talo освободит пространство даже на небольших площадях.
                Диван трансформируется в полноценную кровать, с ровным, без заломов спальным местом. Усиленный механизм «Клик-кляк» обеспечит ежедневную трансформацию без особых усилий. Геометрическая стежка чехла подчеркивает лаконичность и выразительность модели. Плавные линии, мягкие углы и ребра делают Talo безопасным даже для детей.</p>
              <span className='font-semibold text-xl'>Важно знать</span>
              <p className='font-normal text-xl'>Мягкий и на высоких деревянных ножках, в духе ультрамодных тенденций. Сдержанный дизайн и продуманная до мелочей функциональность – в актуальном скандинавском стиле. Компактный Talo освободит пространство даже на небольших площадях.
                Диван трансформируется в полноценную кровать, с ровным, без заломов спальным местом. Усиленный механизм «Клик-кляк» обеспечит ежедневную трансформацию без особых усилий. Геометрическая стежка чехла подчеркивает лаконичность и выразительность модели. Плавные линии, мягкие углы и ребра делают Talo безопасным даже для детей.</p>
            </div>
            <div id='comment'>
              <Comments comments={comments} />
            </div>
          </div>

          <div className='w-full'>
            <DivanHunburg product={product} comments={comments} />
          </div>
        </div>

      </div>
    </StateContext.Provider>

  )
}

export default ProductDetail