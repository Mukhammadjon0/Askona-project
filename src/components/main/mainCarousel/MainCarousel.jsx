import "./MainCarousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, FreeMode, Pagination } from "swiper";
import { VscSymbolRuler } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { useProductsQuery } from "../../../services/productApi";
function MainCarousel() {
  // const { products } = useContext(StateContext)
  const { data: products, isSuccess: productsIsSuccess } = useProductsQuery()

  const navigate = useNavigate()
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
                    <img onClick={() => navigate(`productdetail/${el.id}`)} src={`https://askona.herokuapp.com${el.images[0]}`} alt="" />
                  </div>
                  <div className="main__card-status flex justify-between px-[13px]">
                    <img src={el.spanImg} alt="" />
                    <span className="main__card-span bg-[#FFD54F] w-[116px] h-[24px] rounded flex justify-center items-center text-[12px] font-medium">Товар недели
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
                      <VscSymbolRuler />
                      <div className="card__body-descInfo">
                        <h2>Высота:</h2>
                        <p>{el.height}</p>
                      </div>
                    </div>
                    <div className="card__body-descRight flex gap-[14.53px] items-center">
                      <VscSymbolRuler className="card__icon" />
                      <div className="card__body-descInfo">
                        <h2>Вес на спальное место:</h2>
                        <p>{el.weight}</p>
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
