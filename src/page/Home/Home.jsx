import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import Categories from "../../components/Categories/Categories";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import MainNovelties from "../../components/main/mainNovelties/MainNovelties";
import Discount from "../../components/discount/Discount";
import NavCategories from "../../components/Navbar/NavCategories";
function Home({language}) {
  return (
    <>
      <NavCategories />
      <Carousel />
      <Categories />
      <MainNovelties language={language} />
      <Discount language={language} />
      <ContactInfo language={language} />
    </>
  );
}

export default Home;
