/* eslint-disable no-unused-vars */
import React from 'react';

import styles from "./trauma.module.scss";

import Header from './components/header/Header';
import Information from "./components/information/Information";
import TraumaPriceList from "./components/traumaPriceList/TraumaPriceList";

import Gallery from '../../components/gallery/Gallery';

const Trauma = () => {
  return (
    <>
    <Header />
    <Information />
    <TraumaPriceList />
    <Gallery />
    </>
  )
}

export default Trauma