import React, { useState } from "react";
import Carousel from "../../components/Carousel/Carousel";
import Categories from "../../components/Categories/Categories";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import UsefulInfo from "../../components/UsefulInfo/UsefulInfo";
import MainCarousel from "../../components/main/mainCarousel/MainCarousel";
import MainNovelties from "../../components/main/mainNovelties/MainNovelties";
import Discount from "../../components/discount/Discount";
import NavCategories from "../../components/Navbar/NavCategories";
import { Slide, Snackbar } from "@mui/material";

function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}
function Home() {
  const [transition, setTransition] = useState(undefined);
  const [openProSavedAlert, setOpenProSavedAlert] = useState(false)

  const handleClickProSaved = () => () => {
    setTransition(() => TransitionUp);
    setOpenProSavedAlert(true);
  };

  const handleCloseAlert = () => {
    setOpenProSavedAlert(false);
  };
  return (
    <div>
      <NavCategories />
      <Carousel />
      <Categories />
      <MainCarousel handleClickProSaved={handleClickProSaved} />
      <MainNovelties />
      <Discount />
      <UsefulInfo />
      <ContactInfo />
      <Snackbar
        autoHideDuration={2000}
        open={openProSavedAlert}
        onClose={handleCloseAlert}
        TransitionComponent={transition}
        message={`Вы сохранили этот продукт`}
        key={transition ? transition.name : ''}
      />
    </div>
  );
}

export default Home;
