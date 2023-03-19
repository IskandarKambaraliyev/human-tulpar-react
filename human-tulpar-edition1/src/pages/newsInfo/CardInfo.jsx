import { useContext } from "react";
import { useParams } from "react-router-dom";

import { LanguageContext } from "../../containers/Language";

import Header from "./components/header/Header";
import Crumbs from "../../containers/crumbs/Crumbs";
import Information from "./components/information/Information";

const CardInfo = () => {
  const { dictionary } = useContext(LanguageContext);
  const { id } = useParams();
  const card = dictionary.news.newsImages.find((c) => c.id === Number(id));
  return (
    <>
    <Header imgSrc={card.imgSrc} title={card.title} />
    <Crumbs />
    <Information imgSrc={card.imgSrc} title={card.title} text={card.text} />
    </>
  )
};

export default CardInfo;
