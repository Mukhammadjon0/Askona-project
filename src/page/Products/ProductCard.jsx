import React, { useContext } from 'react'
import { VscSymbolRuler } from 'react-icons/vsc'
import { useNavigate } from 'react-router-dom';
import Weight from '../../assets/icon/weight.png'
import { StateContext } from '../../context';

function ProductCard({ product }) {
  const { prod_id, name_uz, name_ru, img, size, weight, sub_ctg, model_number } = product
  const { lang, setType, setSubCtg_id } = useContext(StateContext)
  const navigate = useNavigate()
  const getDetail = (prod_id, type, sub_ctg_id) => {
    navigate(`/productdetail/${prod_id}`)
    setType(type)
    setSubCtg_id(sub_ctg_id)
  }
  return (
    <div>
      <div className="product-card p-4">
        <div className="main__card-head">
          <img onClick={() => (getDetail(prod_id, sub_ctg.type, sub_ctg.id))} className='h-52 m-auto' src={`https://api.basito.uz${img[0].img}`} alt="product" />
          <div className="main__card-status flex justify-between px-[13px]">
            {/* <img src={spanImg} alt="img" /> */}
            <span className="main__card-span bg-[#FFD54F] w-[116px] h-[24px] rounded flex justify-center items-center text-[12px] font-medium">{lang === 'ru' ? 'Товар недели' : 'Hafta maxsuloti'}
            </span>
          </div>
        </div>
        <span className="main__card-line"></span>
        <div className="main__card-body mt-[27px]">
          <h2>{lang === 'ru' ? name_ru : name_uz}</h2>
          <p className="card__body-price">
            {/* {lang === 'ru' ? 'от' : 'dan'} */}
            <span className="card__body-spanPrice text-[#407CD3]">
              {/* {price?.toLocaleString("uz-UZ")} {lang === 'ru' ? 'сум' : 'so`m'} */}
              {model_number}
            </span>
          </p>
          <div className="card__body-desc flex gap-[14px]">
            <div className="card__body-descLeft flex gap-[18.3px] items-center">
              <VscSymbolRuler />
              <div className="card__body-descInfo">
                <h2>{lang === 'ru' ? 'размер' : 'o`lchami'}:</h2>
                <p>{size} {lang === 'ru' ? 'см' : 'sm'}</p>
              </div>
            </div>
            <div className="card__body-descRight flex gap-[14.53px] items-center">
              <img src={Weight} alt="ucion" />
              <div className="card__body-descInfo">
                <h2>{lang === 'ru' ? 'Вес' : 'og`irligi'}:</h2>
                <p>{weight} {lang === 'ru' ? 'kг' : 'kg'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default ProductCard