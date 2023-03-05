import "./MainCarousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, FreeMode, Pagination } from "swiper";
import { VscSymbolRuler } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { useProductsQuery } from "../../../services/productApi";
import DiscountImg from '../../../assets/img/spanImg.png'
import Weight from '../../../assets/icon/weight.png'
import { useContext } from "react";
import { StateContext } from "../../../context";
import { useAddProductToSavedMutation, useSavedQuery } from "../../../services/savedApi";
import Like from '../../../assets/svg/heart-regular.svg'
import Liked from '../../../assets/svg/heart-solid.svg'
import { Slide } from "@mui/material";

function MainCarousel({ handleClickProSaved }) {
  // const { products } = useContext(StateContext)
  const { data: products, isSuccess: productsIsSuccess } = useProductsQuery()
  const [addToProSaved] = useAddProductToSavedMutation()
  const { userData, handleOpen } = useContext(StateContext)
  const { data: proSaved } = useSavedQuery();
  const navigate = useNavigate()
  console.log(products)
  return (
    <div className="">
      <h1 className="title">Хиты продаж</h1>
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
        pagination={true}
        freeMode={true}
        modules={[FreeMode, Navigation, Pagination]}
        className="mySwiper slider-container overflow-hidden"

      >
        <div className="">
          {productsIsSuccess && products.map((el) => (
            <SwiperSlide key={el.id}>
              <div className="main__card p-4">
                <div className="main__card-head">
                  <div className="main__card-img">
                    {
                      <img onClick={() => navigate(`productdetail/${el.id}`)} src={`https://askona.herokuapp.com/${el.images[0]}`} alt="img" />
                    }
                  </div>
                  <button onClick={() => {
                    if (userData?.token) {
                      addToProSaved(el.id)
                    }
                    else handleOpen()
                  }
                  } className="absolute z-30 top-3 right-3">
                    {proSaved?.length > 0 ? proSaved?.some(saved => saved.product_id === el.id) ? (<img className="w-5" src={Liked} alt="icon" />) : (<img className="w-5" src={Like} alt="icon" />) : <img className="w-5" src={Like} alt="icon" />}
                  </button>

                  <div className="main__card-status flex justify-between px-[13px]">
                    <img src={DiscountImg} alt="" />
                    <span className="main__card-span bg-[#FFD54F] w-[116px] h-[24px] rounded flex justify-center items-center text-[12px] font-medium">Товар недели
                    </span>
                  </div>
                </div>
                <span className="main__card-line"></span>
                <div className="main__card-body mt-[27px]">
                  <h2>{el.name}</h2>
                  <p className="card__body-price">
                    от
                    <span className="card__body-spanPrice text-[#00B9C0]">
                      {el.price.toLocaleString("uz-UZ")} BYN
                    </span>
                    <span className="card__body-spanOldPrice">
                      8900 BYN
                    </span>
                  </p>
                  <p className="card__body-payment">
                    Рассрочка от <span className="text-[#212121]">{el.credit} BYN</span>
                  </p>
                  <div className="card__body-desc flex gap-[14px]">
                    <div className="card__body-descLeft flex gap-[18.3px] items-center">
                      <VscSymbolRuler />
                      <div className="card__body-descInfo">
                        <h2>Высота:</h2>
                        <p>{el.balandligi} m</p>
                      </div>
                    </div>
                    <div className="card__body-descRight flex gap-[14.53px] items-center">
                      <img src={Weight} alt="icon" />
                      <div className="card__body-descInfo">
                        <h2>Вес на спальное место:</h2>
                        <p>{el.massa} </p>
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
