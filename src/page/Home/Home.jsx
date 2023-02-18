import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import Categories from "../../components/Categories/Categories";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import UsefulInfo from "../../components/UsefulInfo/UsefulInfo";
import MainCarousel from "../../components/main/mainCarousel/MainCarousel";
import MainNovelties from "../../components/main/mainNovelties/MainNovelties";
function Home() {
  return (
    <div>
      <Carousel />
      <Categories />
      <MainCarousel />
      <MainNovelties />
      <UsefulInfo />
      <ContactInfo />
    </div>
  );
}

export default Home;
