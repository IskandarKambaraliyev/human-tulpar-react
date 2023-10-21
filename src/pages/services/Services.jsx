/* eslint-disable no-unused-vars */
import React from 'react';

import styles from "./services.module.scss";

import Header from './components/header/Header';
import Ourservices from './components/ourServices/Ourservices';
import ServicesPriceList from './components/servicesPriceList/ServicesPriceList';
import Gallery from '../../components/gallery/Gallery';

const Services = () => {
  return (
    <>
    <Header />
    <Ourservices />
    <ServicesPriceList />
    <Gallery />
    </>
  )
}

export default Services