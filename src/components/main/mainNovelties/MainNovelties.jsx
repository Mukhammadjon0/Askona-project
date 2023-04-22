import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import './MainCarousel.css'
import { VscSymbolRuler } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { useProductsQuery } from "../../../services/productApi";
import Weight from '../../../assets/icon/weight.png'
import { useContext, } from "react";
import { StateContext } from "../../../context";
import { useAddProductToSavedMutation, useSavedQuery } from "../../../services/savedApi";
import Like from '../../../assets/svg/heart-regular.svg'
import Liked from '../../../assets/svg/heart-solid.svg'

function MainCarousel({ language }) {
  const { data: products, isSuccess: productsIsSuccess, isLoading: prodLoading } = useProductsQuery({
    product_id: "all",
    type: "all",
    sub_category_id: "all"
  })
  const [addToProSaved] = useAddProductToSavedMutation()
  const { userData, handleOpen, lang, setType, setSubCtg_id } = useContext(StateContext)
  const { data: proSaved } = useSavedQuery();
  const navigate = useNavigate()

  const getDetail = (prod_id, type, sub_ctg_id) => {
    navigate(`/productdetail/${prod_id}`)
    setType(type)
    setSubCtg_id(sub_ctg_id)
  }

  return (
    <div className="container">
      <h1 className="title">{language?.yangi}</h1>
      <Swiper
        style={{
          "--swiper-navigation-color": "#00BAC1",
          "--swiper-navigation-size": "20px",
          paddingLeft: "50px",
          paddingRight: "50px",
        }}
        slidesPerView={4}
        loop={true}
        spaceBetween={30}
        rewind={true}
        navigation={true}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          "@0.25": {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          "@0.50": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@1.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@1.25": {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          "@1.50": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.75": {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          "@2.00": {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        modules={[Navigation, Pagination]}
        className="mySwiper slider-container overflow-hidden"
      >
        <div className="">
          {prodLoading && <h1>loading...</h1>}
          {productsIsSuccess && products?.data?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="main__card p-4">
                <div className="main__card-head">
                  <div className="main__card-img">
                    <img onClick={() => getDetail(item.prod_id, item.sub_ctg.type, item.sub_ctg.id)} src={`http://api.basito.uz${item.img[0].img}`} alt="" />
                  </div>
                  <button className="absolute z-30 top-3 right-3">
                    {proSaved?.length > 0 ? proSaved?.some(saved => saved.product_id.prod_id === item.prod_id) ? (<img className="w-5" src={Liked} alt="icon" />) : (<img onClick={() => {
                      if (userData?.token) {
                        addToProSaved({
                          product_id: item.prod_id,
                          type: item.sub_ctg.type
                        })
                      }
                      else handleOpen()
                    }} className="w-5" src={Like} alt="icon" />) : <img onClick={() => {
                      if (userData?.token) {
                        addToProSaved({
                          product_id: item.prod_id,
                          type: item.sub_ctg.type
                        })
                      }
                      else handleOpen()
                    }} className="w-5" src={Like} alt="icon" />}</button>
                  <div className="main__card-status flex justify-between px-[13px]">
                    {/* <img src={DiscountImg} alt="" /> */}
                    <span className="main__card-span bg-[#FFD54F] w-[116px] h-[24px] rounded flex justify-center items-center text-[12px] font-medium">Товар недели
                    </span>
                  </div>
                </div>
                <span className="main__card-line"></span>
                <div className="main__card-body mt-[27px]">
                  <h2>{lang === "ru" ? item.name_ru : item.name_uz}</h2>
                  <p className="card__body-price">
                    {/* {lang === 'ru' ? 'от' : 'dan'} */}
                    <span className="card__body-spanPrice text-[#00B9C0]">
                      {/* {item.price.toLocaleString("uz-UZ")} {lang === 'ru' ? 'сум' : 'so`m'} */}
                      {item.model_number}
                    </span>
                  </p>
                  <div className="card__body-desc flex gap-[14px]">
                    <div className="card__body-descLeft flex gap-[18.3px] items-center">
                      <VscSymbolRuler />
                      <div className="card__body-descInfo">
                        <h2>{lang === 'ru' ? 'размер' : 'o`lchami'}:</h2>
                        <p>{item.size} {lang === 'ru' ? 'см' : 'sm'}</p>
                      </div>
                    </div>
                    <div className="card__body-descRight flex gap-[14.53px] items-center">
                      <img src={Weight} alt="icon" />
                      <div className="card__body-descInfo">
                        <h2>{lang === 'ru' ? 'Вес' : 'og`irligi'}</h2>
                        <p>{item.weight} {lang === 'ru' ? 'kг' : 'kg'}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}

export default MainCarousel;
