import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import Categories from "../../components/Categories/Categories";
import Contact_info from "../../components/ContactInfo/ContactInfo";
import Useful_info from "../../components/UsefulInfo/UsefulInfo";
function Home() {
  return (
    <div>
      <Carousel />
      <Categories />
      <Useful_info />
      <Contact_info />
    </div>
  );
}

export default Home;
