import React, { useEffect, useState } from 'react'
import Gradus360 from "../../assets/img/Gradus360.png";
import search from "../../assets/img/search.png";
import Pauz from "../../assets/img/Pauz.png";
import DivanHunburg from "../../components/DivanHunburg/DivanHunburg";
import Comments from '../../components/Comments/Comments';
import { Link, useParams } from 'react-router-dom';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { useProductItemDetailsQuery } from '../../services/productApi';
import AddComment from '../../components/Comments/AddComment';
import { BiHomeSmile } from 'react-icons/bi';
import { Skeleton } from '@mui/material';


function ProductDetail() {
  const { id } = useParams()
  const { data, isSuccess, } = useProductItemDetailsQuery(Number(id))
  const [mainImgId, setMainImgId] = useState(0)

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

  return (
    <div>
      {isSuccess ? (
        <div className='py-8 px-10'>
          <Link to={'/'} className='text-gray-400 text-xl mb-10 flex items-center'>
            <BiHomeSmile />
          </Link>
          <div className="flex flex-row gap-10">
            <div className='flex flex-col gap-12 w-[60%]'>
              <div className="flex">
                <div className=" flex justify-center items-center flex-col">
                  <button onClick={prevImg} className='border-2 border-solid border-red-50  px-12 py-1 mt-4'>
                    <MdOutlineKeyboardArrowUp className='text-[#00b6c9]' />
                  </button>

                  {data.images.map((item, index) => (
                    <img onClick={() => setMainImgId(index)} className={`border-2 border-solid ${mainImgId === index ? 'border-[#00B6C9]' : 'border-gray-200'} mt-4 w-28 cursor-pointer`} src={`http://68.183.21.222:1233/${item}`} key={index} alt="" />
                  ))}
                  <button onClick={nextImg} className='border-2 border-solid border-red-50  px-12 py-1 mt-4'>
                    <MdOutlineKeyboardArrowDown className='text-[#00b6c9]' />
                  </button>
                </div>
                <div className="w-[750px] border-2 border-solid border-gray-100 relative">
                  <div className="flex flex-col items-end absolute z-20 right-4">
                    <p className="rounded bg-[#4FB7FF] px-2 py-1 w-32 text-white">
                      Товар недели
                    </p>
                    <p className="rounded border-2 bg-[#FFD54F] text-white border-solid border-gray-100 px-2 py-1 w-36 mt-2 ">
                      Доставка 1 день
                    </p>
                  </div>
                  <img className="flex items-start w-full relative h-[100%]" src={`http://68.183.21.222:1233/${data?.images[mainImgId]}`} alt="" />
                  <div className="flex justify-between items-center">
                    <div className="flex absolute right-4 bottom-4">
                      <img className="mr-2" src={Pauz} alt="" />
                      <img src={Gradus360} alt="" />
                    </div>
                    <img className='absolute bottom-4 left-4' src={search} alt="" />
                  </div>
                </div>
                <div id="about"></div>
              </div>
              <div className="bg-[#F6F6F6] py-6 px-8 divide-y flex flex-col">
                <h1 className='font-extrabold text-2xl mb-3'>Характеристики</h1>
                <div className="flex justify-between items-center py-3">
                  <h2 className='font-semibold text-lg'>Гарантия</h2>
                  <p className='text-black font-medium text-base'>{data.waranty}</p>
                </div>
                <div className="flex justify-between items-center py-3">
                  <h2 className='font-semibold text-lg'>Коллекция</h2>
                  <p className='text-black font-medium text-base'>{data.collection}</p>
                </div>
                <div className="flex justify-between items-center py-3">
                  <h2 className='font-semibold text-lg'>Жесткость матрасов</h2>
                  <p className='text-black font-medium text-base'>{data.matras}</p>
                </div>
                <div className="flex justify-between items-center py-3">
                  <h2 className='font-semibold text-lg'>Особенности</h2>
                  <p className='text-black font-medium text-base'>{data.xususiyatlari}</p>
                </div>
                <div className="flex justify-between items-center py-3">
                  <h2 className='font-semibold text-lg'>Наполнитель</h2>
                  <p className='text-black font-medium text-base'>{data.qoshimchalari}</p>
                </div>
                <div className="flex justify-between items-center py-3">
                  <h2 className='font-semibold text-lg'>Высота, см</h2>
                  <p className='text-black font-medium text-base'>{data.balandligi} см</p>
                </div>
                <div className="flex justify-between items-center py-3">
                  <h2 className='font-semibold text-lg'>Тип пружинного блока</h2>
                  <p className='text-black font-medium text-base'>{data.mehanizm}</p>
                </div>
                <div className="flex justify-between items-center py-3">
                  <h2 className='font-semibold text-lg'>Вес на спальное место</h2>
                  <p className='text-black font-medium text-base'>До {data.massa} кг</p>
                </div>
                <div className="flex justify-between items-center py-3">
                  <h2 className='font-semibold text-lg'>Назначение</h2>
                  <p className='text-black font-medium text-base'>{data.maqsad}</p>
                </div>
                <div className="flex justify-between items-center py-3">
                  <h2 className='font-semibold text-lg'>Размерность</h2>
                  <p className='text-black font-medium text-base'>{data.razmer}</p>
                </div>
                <div className="flex justify-between items-center py-3">
                  <h2 className='font-semibold text-lg'>Жесткость</h2>
                  <p className='text-black font-medium text-base'>{data.qattiqlik}</p>
                </div>
                <div id="ops"></div>
                <div className="flex justify-between items-center py-3">
                  <h2 className='font-semibold text-lg'>Бренд</h2>
                  <p className='text-black font-medium text-base'>{data.brand}</p>
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
                <div id="comment"></div>
              </div>
              <div>
                <AddComment data={data} />
                <Comments data={data} />
              </div>
            </div>
            <div className='w-full'>
              <DivanHunburg data={data} />
            </div>
          </div>
        </div>
      ) : <Skeleton variant="rectangular" className='w-full' height={600} />}
    </div>
  )
}

export default ProductDetail