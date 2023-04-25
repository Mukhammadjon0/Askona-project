import React, { useContext, useEffect, useState } from 'react'
import DivanHunburg from "../../components/DivanHunburg/DivanHunburg";
import { useParams } from 'react-router-dom';
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from 'react-icons/md';
import { useProductItemDetailsQuery } from '../../services/productApi';
import { Skeleton } from '@mui/material';
import MobileImg from './MobileImg';
import { StateContext } from '../../context';


function ProductDetail() {
  const { lang, page2Lang, type, subCtg_id } = useContext(StateContext)
  const { id } = useParams()


  const { data, isSuccess, } = useProductItemDetailsQuery({
    product_id: id,
    type: type,
    sub_category_id: subCtg_id
  })

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
          <div className="flex flex-row desktop:gap-10 tablet:gap-0 mobile:gap-0">
            <div className='flex flex-col gap-12 desktop:w-[60%] tablet:w-full mobile:w-full'>
              <div className="mobile:hidden tablet:flex desktop:flex">
                <div className=" flex justify-center items-center flex-col">
                  <button onClick={prevImg} className={`${data.img.length > 1 ? 'border-2 border-solid border-red-50 px-12 py-1' : 'hidden'}`}>
                    <MdOutlineKeyboardArrowUp className='text-[#407CD3]' />
                  </button>

                  {data?.img?.map((item, index) => (
                    <img onClick={() => setMainImgId(index)} className={`border-2 border-solid ${mainImgId === index ? 'border-[#407CD3]' : 'border-gray-200'} mt-4 w-28 cursor-pointer`} src={`https://api.basito.uz${item.img}`} key={index} alt="" />
                  ))}
                  <button onClick={nextImg} className={`${data.img.length > 1 ? 'border-2 border-solid border-red-50 px-12 py-1' : 'hidden'}`}>
                    <MdOutlineKeyboardArrowDown className='text-[#407CD3]' />
                  </button>
                </div>
                <div className="w-[750px] border-2 border-solid border-gray-100 relative h-full">
                  <div className="flex flex-col items-end absolute z-20 right-0">
                    <p className="rounded bg-[#4FB7FF] px-2 py-1 w-32 text-white">
                      {lang === 'ru' ? 'Товар недели' : 'Hafta mahsuloti'}
                    </p>
                  </div>
                  <img className="flex items-start w-full relative h-[100%]" src={`https://api.basito.uz${data?.img[mainImgId]?.img}`} alt="" />
                </div>
                <div id="about"></div>
              </div>
              <div className="mobile:block tablet:hidden desktop:hidden">
                <MobileImg img={data?.img} />
              </div>
              <div className="mobile:block tablet:block desktop:hidden">
                <DivanHunburg data={data} language={page2Lang?.page} languageDel={page2Lang?.page_dostavka} />
              </div>
              <div className="bg-[#F6F6F6] py-6 px-8 divide-y flex flex-col">
                <h1 className='font-extrabold text-2xl mb-3'>{lang === 'ru' ? 'Характеристики' : 'Xususiyatlari'}</h1>
                <div className={`${data.brend ? 'flex justify-between items-center py-3' : 'hidden'}`}>
                  <h2 className='font-semibold desktop:text-lg tablet:text-base mobile:text-base'>{lang === 'ru' ? 'Бренд' : 'Brend'}</h2>
                  <p className='text-black font-medium desktop:text-base tablet:text-sm mobile:text-sm'>{data.brend}</p>
                </div>
                <div className="flex justify-between items-center py-3">
                  <h2 className='font-semibold desktop:text-lg tablet:text-base mobile:text-base'>{lang === 'ru' ? 'Происхождения' : 'Ishlab chiqarilgan'}</h2>
                  <p className='text-black font-medium desktop:text-base tablet:text-sm mobile:text-sm'>{lang === 'ru' ? data.made_in_ru : data.made_in_uz}</p>
                </div>
                <div className="flex justify-between items-center py-3">
                  <h2 className='font-semibold desktop:text-lg tablet:text-base mobile:text-base'>{lang === 'ru' ? 'Тип' : 'Turi'}</h2>
                  <p className='text-black font-medium desktop:text-base tablet:text-sm mobile:text-sm'>{lang === 'ru' ? data.type_ru : data.type_uz}</p>
                </div>
                <div className="flex justify-between items-center py-3">
                  <h2 className='font-semibold desktop:text-lg tablet:text-base mobile:text-base'>{lang === 'ru' ? 'Единица измерения' : 'Birlik o`lchovlari'}</h2>
                  <p className='text-black font-medium desktop:text-base tablet:text-sm mobile:text-sm'>{lang === 'ru' ? data.unit_measurements_ru : data.unit_measurements_uz}</p>
                </div>
                <div className="flex justify-between items-center py-3">
                  <h2 className='font-semibold desktop:text-lg tablet:text-base mobile:text-base'>{lang === 'ru' ? 'Материал' : 'Material'}</h2>
                  <p className='text-black font-medium desktop:text-base tablet:text-sm mobile:text-sm'>{lang === 'ru' ? data.material_ru : data.made_in_uz}</p>
                </div>
                <div className="flex justify-between items-center py-3">
                  <h2 className='font-semibold desktop:text-lg tablet:text-base mobile:text-base'>{lang === 'ru' ? 'Вес в упаковке, кг' : 'Qadoq og`irligi, kg'}</h2>
                  <p className='text-black font-medium desktop:text-base tablet:text-sm mobile:text-sm'>{data.package_weighte}</p>
                </div>
                <div className="flex justify-between items-center py-3">
                  <h2 className='font-semibold desktop:text-lg tablet:text-base mobile:text-base'>{lang === 'ru' ? 'Размер в упаковке, Длина, см' : 'Qadoqdagi olchamlari, Uzunligi, sm'}</h2>
                  <p className='text-black font-medium desktop:text-base tablet:text-sm mobile:text-sm'>{data.package_length_sm}</p>
                </div>
                <div className="flex justify-between items-center py-3">
                  <h2 className='font-semibold desktop:text-lg tablet:text-base mobile:text-base'>{lang === 'ru' ? 'Размер в упаковке, Высотаб см' : 'Qadoq olchamlari, Balandligi, sm'}</h2>
                  <p className='text-black font-medium desktop:text-base tablet:text-sm mobile:text-sm'>{data.package_heigt_sm}</p>
                </div>
                <div className="flex justify-between items-center py-3">
                  <h2 className='font-semibold desktop:text-lg tablet:text-base mobile:text-base'>{lang === 'ru' ? 'Емкость' : 'Sig`imi'}</h2>
                  <p className='text-black font-medium desktop:text-base tablet:text-sm mobile:text-sm'>{data.capacity}</p>
                </div>
                <div className={`${data.shaped_ru ? 'flex justify-between items-center py-3' : 'hidden'}`}>
                  <h2 className='font-semibold desktop:text-lg tablet:text-base mobile:text-base'>{lang === 'ru' ? 'Форма' : 'Forma'}</h2>
                  <p className='text-black font-medium desktop:text-base tablet:text-sm mobile:text-sm'>{lang === 'ru' ? data.shaped_ru : data.shaped_uz}</p>
                </div>
                <div className={`${data.method_of_sale_ru ? "flex justify-between items-center py-3" : 'hidden'}`}>
                  <h2 className='font-semibold desktop:text-lg tablet:text-base mobile:text-base'>{lang === 'ru' ? 'Метод продаж' : 'Sotish usuli'}</h2>
                  <p className='text-black font-medium desktop:text-base tablet:text-sm mobile:text-sm'>{lang === 'ru' ? data.method_of_sale_ru : data.method_of_sale_uz}</p>
                </div>
                <div className={`${data.diameter_sm ? "flex justify-between items-center py-3" : 'hidden'}`}>
                  <h2 className='font-semibold desktop:text-lg tablet:text-base mobile:text-base'>{lang === 'ru' ? 'Диаметр' : 'Diamteri'}</h2>
                  <p className='text-black font-medium desktop:text-base tablet:text-sm mobile:text-sm'>{data.diameter_sm}</p>
                </div>
                {/* =========== */}
                <div className={`${data.length ? "flex justify-between items-center py-3" : 'hidden'}`}>
                  <h2 className='font-semibold desktop:text-lg tablet:text-base mobile:text-base'>{lang === 'ru' ? 'Длина' : 'Uzunligi'}</h2>
                  <p className='text-black font-medium desktop:text-base tablet:text-sm mobile:text-sm'>{data.length}</p>
                </div>
                <div className={`${data.characteristics_ru ? "flex justify-between items-center py-3" : 'hidden'}`}>
                  <h2 className='font-semibold desktop:text-lg tablet:text-base mobile:text-base'>{lang === 'ru' ? 'Характеристики' : 'Xususiyatlari'}</h2>
                  <p className='text-black font-medium desktop:text-base tablet:text-sm mobile:text-sm'>{lang === 'ru' ? data.characteristics_ru : data.characteristics_uz}</p>
                </div>
                <div className={`${data.style_uz ? "flex justify-between items-center py-3" : 'hidden'}`}>
                  <h2 className='font-semibold desktop:text-lg tablet:text-base mobile:text-base'>{lang === 'ru' ? 'Стиль' : 'Uslub'}</h2>
                  <p className='text-black font-medium desktop:text-base tablet:text-sm mobile:text-sm'>{lang === 'ru' ? data.style_uz : data.style_ru}</p>
                </div>
                <div className={`${data.Type_of_curtain_accessories_ru ? "flex justify-between items-center py-3" : 'hidden'}`}>
                  <h2 className='font-semibold desktop:text-lg tablet:text-base mobile:text-base'>{lang === 'ru' ? 'Тип аксессуаров для штор' : 'Pardalar uchun aksessuarlar turi'}</h2>
                  <p className='text-black font-medium desktop:text-base tablet:text-sm mobile:text-sm'>{lang === 'ru' ? data.Type_of_curtain_accessories_ru : data.Type_of_curtain_accessories_uz}</p>
                </div>
                <div className={`${data.CN_ru ? "flex justify-between items-center py-3" : 'hidden'}`}>
                  <h2 className='font-semibold desktop:text-lg tablet:text-base mobile:text-base'>{lang === 'ru' ? 'CN' : 'CN'}</h2>
                  <p className='text-black font-medium desktop:text-base tablet:text-sm mobile:text-sm'>{lang === 'ru' ? data.CN_ru : data.CN_uz}</p>
                </div>
                <div className={`${data.Method_of_sale_ru ? "flex justify-between items-center py-3" : 'hidden'}`}>
                  <h2 className='font-semibold desktop:text-lg tablet:text-base mobile:text-base'>{lang === 'ru' ? 'Cпособ продажи' : 'Sotish usuli'}</h2>
                  <p className='text-black font-medium desktop:text-base tablet:text-sm mobile:text-sm'>{lang === 'ru' ? data.Method_of_sale_ru : data.Method_of_sale_uz}</p>
                </div>
                <div className={`${data.individual_production ? "flex justify-between items-center py-3" : 'hidden'}`}>
                  <h2 className='font-semibold desktop:text-lg tablet:text-base mobile:text-base'>{lang === 'ru' ? 'Индивидуальное производство' : 'Individual ishlab chiqarish'}</h2>
                  <p className='text-black font-medium desktop:text-base tablet:text-sm mobile:text-sm'>{data.individual_production}</p>
                </div>
                <div className={`${data.certification_ru ? "flex justify-between items-center py-3" : 'hidden'}`}>
                  <h2 className='font-semibold desktop:text-lg tablet:text-base mobile:text-base'>{lang === 'ru' ? 'Cертификат' : 'Sertifikat'}</h2>
                  <p className='text-black font-medium desktop:text-base tablet:text-sm mobile:text-sm'>{lang === 'ru' ? data.certification_ru : data.certification_uz}</p>
                </div>
                <div className={`${data.appropriate_curtain_type ? "flex justify-between items-center py-3" : 'hidden'}`}>
                  <h2 className='font-semibold desktop:text-lg tablet:text-base mobile:text-base'>{lang === 'ru' ? 'Подходящий тип штор' : 'Tegishli parda turi'}</h2>
                  <p className='text-black font-medium desktop:text-base tablet:text-sm mobile:text-sm'>{data.appropriate_curtain_type}</p>
                </div>
                <div className={`${data.cornice_width ? "flex justify-between items-center py-3" : 'hidden'}`}>
                  <h2 className='font-semibold desktop:text-lg tablet:text-base mobile:text-base'>{lang === 'ru' ? 'Ширина карниза' : 'Karniz olchami'}</h2>
                  <p className='text-black font-medium desktop:text-base tablet:text-sm mobile:text-sm'>{data.cornice_width}</p>
                </div>
                <div className={`${data.baguette_width ? "flex justify-between items-center py-3" : 'hidden'}`}>
                  <h2 className='font-semibold desktop:text-lg tablet:text-base mobile:text-base'>{lang === 'ru' ? 'Ширина багета' : 'Baget olchami'}</h2>
                  <p className='text-black font-medium desktop:text-base tablet:text-sm mobile:text-sm'>{data.baguette_width}</p>
                </div>
                <div className={`${data.cornice_type_ru ? "flex justify-between items-center py-3" : 'hidden'}`}>
                  <h2 className='font-semibold desktop:text-lg tablet:text-base mobile:text-base'>{lang === 'ru' ? 'Карнизный тип' : 'Karniz turi'}</h2>
                  <p className='text-black font-medium desktop:text-base tablet:text-sm mobile:text-sm'>{lang === 'ru' ? data.cornice_type_ru : data.cornice_type_uz}</p>
                </div>
                <div className={`${data.suspension_type_ru ? "flex justify-between items-center py-3" : 'hidden'}`}>
                  <h2 className='font-semibold desktop:text-lg tablet:text-base mobile:text-base'>{lang === 'ru' ? 'Тип подвески' : 'Oqibat turi'}</h2>
                  <p className='text-black font-medium desktop:text-base tablet:text-sm mobile:text-sm'>{lang === 'ru' ? data.suspension_type_ru : data.suspension_type_uz}</p>
                </div>
                <div className={`${data.tip_ru ? "flex justify-between items-center py-3" : 'hidden'}`}>
                  <h2 className='font-semibold desktop:text-lg tablet:text-base mobile:text-base'>{lang === 'ru' ? 'Совет' : 'Maslahat'}</h2>
                  <p className='text-black font-medium desktop:text-base tablet:text-sm mobile:text-sm'>{lang === 'ru' ? data.tip_ru : data.tip_uz}</p>
                </div>
                <div className={`${data.rotation_ru ? "flex justify-between items-center py-3" : 'hidden'}`}>
                  <h2 className='font-semibold desktop:text-lg tablet:text-base mobile:text-base'>{lang === 'ru' ? 'Поворот' : 'Aylanish'}</h2>
                  <p className='text-black font-medium desktop:text-base tablet:text-sm mobile:text-sm'>{lang === 'ru' ? data.rotation_ru : data.rotation_uz}</p>
                </div>
                <div className={`${data.completely_finished_ru ? "flex justify-between items-center py-3" : 'hidden'}`}>
                  <h2 className='font-semibold desktop:text-lg tablet:text-base mobile:text-base'>{lang === 'ru' ? 'Завершенность' : 'Tugallanish'}</h2>
                  <p className='text-black font-medium desktop:text-base tablet:text-sm mobile:text-sm'>{lang === 'ru' ? data.completely_finished_ru : data.completely_finished_uz}</p>
                </div>
                <div className={`${data.cover_ru ? "flex justify-between items-center py-3" : 'hidden'}`}>
                  <h2 className='font-semibold desktop:text-lg tablet:text-base mobile:text-base'>{lang === 'ru' ? 'Крышка' : 'Qopqa'}</h2>
                  <p className='text-black font-medium desktop:text-base tablet:text-sm mobile:text-sm'>{lang === 'ru' ? data.cover_ru : data.cover_uz}</p>
                </div>
                <div className={`${data.the_length_of_the_sprayer_ru ? "flex justify-between items-center py-3" : 'hidden'}`}>
                  <h2 className='font-semibold desktop:text-lg tablet:text-base mobile:text-base'>{lang === 'ru' ? 'Длина распылителя' : 'Sprayer uzunligi'}</h2>
                  <p className='text-black font-medium desktop:text-base tablet:text-sm mobile:text-sm'>{lang === 'ru' ? data.the_length_of_the_sprayer_ru : data.the_length_of_the_sprayer_uz}</p>
                </div>

                <div className={`${data.hose_length_ru ? "flex justify-between items-center py-3" : 'hidden'}`}>
                  <h2 className='font-semibold desktop:text-lg tablet:text-base mobile:text-base'>{lang === 'ru' ? 'Длина шланга' : 'Shlang uzunligi'}</h2>
                  <p className='text-black font-medium desktop:text-base tablet:text-sm mobile:text-sm'>{lang === 'ru' ? data.hose_length_ru : data.hose_length_uz}</p>
                </div>

                <div className={`${data.total_weight_ru ? "flex justify-between items-center py-3" : 'hidden'}`}>
                  <h2 className='font-semibold desktop:text-lg tablet:text-base mobile:text-base'>{lang === 'ru' ? 'Общий вес' : 'Jami og\'irligi'}</h2>
                  <p className='text-black font-medium desktop:text-base tablet:text-sm mobile:text-sm'>{lang === 'ru' ? data.total_weight_ru : data.total_weight_uz}</p>
                </div>

                <div className={`${data.container_capacity_ru ? "flex justify-between items-center py-3" : 'hidden'}`}>
                  <h2 className='font-semibold desktop:text-lg tablet:text-base mobile:text-base'>{lang === 'ru' ? 'Емкость бака' : 'Konteyner sig\'imi'}</h2>
                  <p className='text-black font-medium desktop:text-base tablet:text-sm mobile:text-sm'>{lang === 'ru' ? data.container_capacity_ru : data.container_capacity_uz}</p>
                </div>
                <div className={`${data.work_expenses_ru ? "flex justify-between items-center py-3" : 'hidden'}`}>
                  <h2 className='font-semibold desktop:text-lg tablet:text-base mobile:text-base'>{lang === 'ru' ? 'Расходы на работу' : 'Ish xarajatlari'}</h2>
                  <p className='text-black font-medium desktop:text-base tablet:text-sm mobile:text-sm'>{lang === 'ru' ? data.work_expenses_ru : data.work_expenses_uz}</p>
                </div>

                <div className={`${data.adjusting_the_sprayer_ru ? "flex justify-between items-center py-3" : 'hidden'}`}>
                  <h2 className='font-semibold desktop:text-lg tablet:text-base mobile:text-base'>{lang === 'ru' ? 'Настройка распылителя' : 'Sprayer sozlashi'}</h2>
                  <p className='text-black font-medium desktop:text-base tablet:text-sm mobile:text-sm'>{lang === 'ru' ? data.adjusting_the_sprayer_ru : data.adjusting_the_sprayer_uz}</p>
                </div>
                <div className={`${data.status_ru ? "flex justify-between items-center py-3" : 'hidden'}`}>
                  <h2 className='font-semibold desktop:text-lg tablet:text-base mobile:text-base'>{lang === 'ru' ? 'Cтатус' : 'Status'}</h2>
                  <p className='text-black font-medium desktop:text-base tablet:text-sm mobile:text-sm'>{lang === 'ru' ? data.status_ru : data.status_uz}</p>
                </div>
                <div className={`${data.how_to_transport_the_sprayer_ru ? "flex justify-between items-center py-3" : 'hidden'}`}>
                  <h2 className='font-semibold desktop:text-lg tablet:text-base mobile:text-base'>{lang === 'ru' ? 'Как транспортировать опрыскиватель' : 'Purkagichni qanday tashish kerak'}</h2>
                  <p className='text-black font-medium desktop:text-base tablet:text-sm mobile:text-sm'>{lang === 'ru' ? data.how_to_transport_the_sprayer_ru : data.how_to_transport_the_sprayer_uz}</p>
                </div>
                <div className={`${data.spray_type_ru ? "flex justify-between items-center py-3" : 'hidden'}`}>
                  <h2 className='font-semibold desktop:text-lg tablet:text-base mobile:text-base'>{lang === 'ru' ? 'Cпрей тип' : 'Spray turi'}</h2>
                  <p className='text-black font-medium desktop:text-base tablet:text-sm mobile:text-sm'>{lang === 'ru' ? data.spray_type_ru : data.spray_type_uz}</p>
                </div>
                <div id="ops"></div>

              </div>
              <div className="desktop:w-[800px] tablet:w-full mobile:w-full flex flex-col gap-5">
                <h1 className='font-extrabold text-2xl'>{lang === 'ru' ? 'Описание' : 'Tavsif'}</h1>
                <p className='font-normal desktop:text-xl mobile:text-lg tablet:text-lg'>{lang === 'ru' ? data.description_ru : data.description_uz}</p>
                <div id="comment"></div>
              </div>
              {/* <div>
                <AddComment data={data} />
                <Comments data={data} />
              </div> */}
            </div>
            <div className='w-full desktop:block tablet:hidden mobile:hidden'>
              <DivanHunburg data={data} language={page2Lang?.page} languageDel={page2Lang?.page_dostavka} />
            </div>
          </div>
        </div>
      ) : <Skeleton variant="rectangular" className='w-full' height={600} />}
    </div>
  )
}

export default ProductDetail