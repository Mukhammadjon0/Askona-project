import React from 'react'
import { VscSymbolRuler } from 'react-icons/vsc'
import spanImg from '../../assets/img/spanImg.png'
import { useNavigate } from 'react-router-dom';
import Weight from '../../assets/icon/weight.png'

function ProductCard({ product }) {
  const { id, name, price, images, massa, balandligi, credit } = product
  const navigate = useNavigate()
  const getDetail = () => {
    navigate(`/productdetail/${id}`)
  }
  return (
    <div>
      <div className="product-card p-4">
        <div className="main__card-head">
          <button onClick={getDetail}>
            <div className="main__card-img cursor-pointer">
              {
                <img src={`http://68.183.21.222:1233/${images[0]}`} alt="product" />
              }
            </div>
            <div className="main__card-status flex justify-between px-[13px]">
              <img src={spanImg} alt="img" />
              <span className="main__card-span bg-[#FFD54F] w-[116px] h-[24px] rounded flex justify-center items-center text-[12px] font-medium">Товар недели
              </span>
            </div>
          </button>
        </div>
        <span className="main__card-line"></span>
        <div className="main__card-body mt-[27px]">
          <h2>{name}</h2>
          <p className="card__body-price">
            от
            <span className="card__body-spanPrice text-[#00B9C0]">
              {price?.toLocaleString("uz-UZ")} BYN
            </span>
            <span className="card__body-spanOldPrice">
              89000 BYN
            </span>
          </p>
          <p className="card__body-payment">
            Рассрочка от <span className="text-[#212121]">{credit} BYN</span>
          </p>
          <div className="card__body-desc flex gap-[14px]">
            <div className="card__body-descLeft flex gap-[18.3px] items-center">
              <VscSymbolRuler />
              <div className="card__body-descInfo">
                <h2>Высота:</h2>
                <p>{balandligi}</p>
              </div>
            </div>
            <div className="card__body-descRight flex gap-[14.53px] items-center">
              <img src={Weight} alt="ucion" />
              <div className="card__body-descInfo">
                <h2>Вес на спальное место:</h2>
                <p>{massa}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard