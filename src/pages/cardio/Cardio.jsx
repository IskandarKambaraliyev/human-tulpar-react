/* eslint-disable no-unused-vars */
import React from 'react';

import styles from "./cardio.module.scss";

import Header from './components/header/Header';
import Information from './components/information/Information';
import CardioPriceList from './components/cardioPriceList/CardioPriceList';

import Gallery from '../../components/gallery/Gallery';

const Cardio = () => {
  return (
    <>
    <Header />
    <Information />
    <CardioPriceList />
    <Gallery />
    </>
  )
}

export default Cardio