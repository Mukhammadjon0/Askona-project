import React, { useContext } from 'react'
import Frame1 from "../../assets/img/Frame2.png"
import Frame2 from "../../assets/img/Frame (1).png"
import Group from "../../assets/img/Group.png"
import { Box, Drawer } from '@mui/material'
import { StateContext } from '../../context'
import Sidebar from '../Sidebar/Sidebar'
import { useAddProductToBasketMutation } from '../../services/basketApi'
import { MdKeyboardArrowRight } from 'react-icons/md'
import Like from '../../assets/svg/heart-regular.svg'
import Liked from '../../assets/svg/heart-solid.svg'
import { useAddProductToSavedMutation, useSavedQuery } from '../../services/savedApi'
import { Link } from "react-scroll";
import Color from '../Color/Color'

function DivanHunburg({ data, language, languageDel }) {
  const [addProduct] = useAddProductToBasketMutation()
  const [addToProSaved] = useAddProductToSavedMutation()
  const { data: proSaved } = useSavedQuery();
  const { userData, handleOpen, setTelInfo, lang } = useContext(StateContext)


  // add To basket
  const addToBasket = () => {
    if (userData?.token) {
      addProduct({
        product_id: data.prod_id,
        type: data.sub_ctg.type,
        sub_category_id: data.sub_ctg.id

      })
    }
    else handleOpen()
  }
  // kutip 1 click
  const kupitClick = () => {
    if (userData?.token) {
      setTelInfo(true)
    }
    else handleOpen()
  }
  // open location sidebar
  const [state, setState] = React.useState({
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    setState({ ...state, [anchor]: open });
  };
  return (
    <div>
      <div className='w-full'>
        <div className="flex justify-end">
          <div className="">
            <button className="absolute z-30 top-3 right-3">
              {proSaved?.length > 0 ? proSaved?.some(saved => saved.product_id.prod_id === data.prod_id) ? (<img className="w-5" src={Liked} alt="icon" />) : (<img onClick={() => {
                if (userData?.token) {
                  addToProSaved({
                    product_id: data.prod_id,
                    type: data.sub_ctg.type
                  })
                }
                else handleOpen()
              }} className="w-5" src={Like} alt="icon" />) : <img onClick={() => {
                if (userData?.token) {
                  addToProSaved({
                    product_id: data.prod_id,
                    type: data.sub_ctg.type
                  })
                }
                else handleOpen()
              }} className="w-5" src={Like} alt="icon" />}</button>
          </div>

        </div>
        <h1 className="font-extrabold text-3xl">
          {lang === "ru" ? data.name_ru : data.name_uz}
        </h1>
        {/* <p className="text-gray-400 mt-2">{language?.kod}: {data.model_number}</p> */}
        {/* <h2 className="flex font-semibold mt-4">
          <span className="text-[#FF0064] mr-2">До конца акции осталось: </span>
          <span>3 дня 10:16:31</span>
        </h2> */}
        <div className="flex items-end mt-4">
          <h2 className="text-[#407CD3] font-semibold text-2xl mr-7">
            {/* {data?.price?.toLocaleString("uz-UZ")} {lang === 'ru' ? 'сум' : 'so`m'} */}
            {data.model_number}
          </h2>
        </div>

        <div className="mt-9">
          <h1>{language?.hajm} ({language?.dan}):</h1>
          <div className="border-b-2 mt-4">
            <h1>{data.size}</h1>
          </div>

        </div>
        <div className="mt-7">
          {data?.color ? (
            <div><h1>{language?.rang}:</h1>
              <Color data={data} /></div>
          ) : (<></>)}
          <div>
            <div className="flex items-center mt-2 gap-5">
              <button onClick={addToBasket} className="rounded border-2 border-solid border-[#407CD3] text-white w-full py-2 bg-[#407CD3] duration-200 hover:bg-[#2B58A0] active:scale-95">
                {lang === 'ru' ? 'В корзину' : 'Savatga qoshish'}
              </button>
              <button onClick={kupitClick} className="border-2 border-solid border-gray-300 rounded w-full py-2 bg-transparent duration-200 hover:bg-gray-100 active:scale-95">
                {language?.xarid}
              </button>
            </div>
          </div>

          <div>
            {["right"].map((anchor) => (
              <React.Fragment key={anchor}>
                <button onClick={toggleDrawer(anchor, true)} className='w-full'>
                  <div className="mt-5 flex items-center duration-300 justify-between border-b border-solid border-gray-300 pb-5 ">
                    <div className="flex items-center">
                      <img className="mr-2" src={Group} alt="" />
                      <h2>{language?.yetkazish}</h2>
                    </div>
                    <MdKeyboardArrowRight className='text-[#407CD3]' />
                  </div>
                </button>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  <Box
                    sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : "auto" }}
                    role="presentation"
                  >
                    <Sidebar setState={setState} languageDel={languageDel} />
                  </Box>
                </Drawer>
              </React.Fragment>
            ))}

            <Link className={'cursor-pointer'} activeClass="active" smooth spy to="about">
              <div className="mt-5 flex items-center justify-between border-b border-solid border-gray-300 pb-5 ">
                <div className="flex items-center">
                  <img className="mr-2" src={Frame2} alt="" />
                  <h2>{language?.xususiyat}</h2>
                </div>
              </div>
            </Link>
            <Link className={'cursor-pointer'} activeClass="active" spy={true} smooth={true} duration={500} to={'ops'}>
              <div className="mt-5 flex items-center justify-between border-b border-solid border-gray-300 pb-5">
                <div className="flex items-center">
                  <img className="mr-2" src={Frame1} alt="" />
                  <h2>{language?.tavsif}</h2>
                </div>
              </div>
            </Link>
            {/* <Link className={'cursor-pointer'} activeClass="active" smooth spy to={'comment'}>
              <div className="mt-5 flex items-center justify-between border-b border-solid border-gray-300 pb-5">
                <div className="flex items-center">
                  <img className="mr-2" src={Frame3} alt="" />
                  <h2>{language?.sharx} ({comments?.cnt})</h2>
                </div>
              </div>
            </Link> */}
          </div>
        </div>
      </div>

    </div >
  );
}

export default DivanHunburg