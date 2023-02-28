import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import Categories from "../../components/Categories/Categories";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import UsefulInfo from "../../components/UsefulInfo/UsefulInfo";
import MainCarousel from "../../components/main/mainCarousel/MainCarousel";
import MainNovelties from "../../components/main/mainNovelties/MainNovelties";
import Discount from "../../components/discount/Discount";
import NavCategories from "../../components/Navbar/NavCategories";
function Home() {
  return (
    <div>
      <NavCategories />
      <Carousel />
      <Categories />
      <MainCarousel />
      <MainNovelties />
      <Discount />
      <UsefulInfo />
      <ContactInfo />
    </div>
  );
}

export default Home;
