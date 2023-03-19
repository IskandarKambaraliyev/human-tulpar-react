/* eslint-disable no-unused-vars */
import React, { useContext } from "react";

// Importing styles
import styles from "./home.module.scss";

// Importing Components
import Header from "./components/header/Header";
import PriceList from "../../components/priceListMini/PriceList";
import OurServices from "./components/ourServices/OurServices";
import OurSpecialists from "./components/ourSpecialists/OurSpecialists";
import OurNews from "./components/ourNews/OurNews";
import Questions from "./components/questions/Questions";

import Gallery from "../../components/gallery/Gallery";

import { LanguageContext } from "../../containers/Language";

const Home = () => {
  const { dictionary } = useContext(LanguageContext);
  return (
    <>
      <Header />
      <OurServices />
      <OurSpecialists />
      <PriceList />
      <Gallery />
      <OurNews />
      <Questions />
    </>
  );
};

export default Home;
