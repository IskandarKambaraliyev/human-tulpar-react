import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./Layout";

// Importing Pages
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import Cardio from "./pages/cardio/Cardio";
import Trauma from "./pages/trauma/Trauma";
import Specialists from "./pages/specialists/Specialists";
import Reports from "./pages/reports/Reports";
import News from "./pages/news/News";
import CardInfo from "./pages/newsInfo/CardInfo";
import FindUs from "./pages/findUs/FindUs";

import Page404 from "./pages/page404/Page404";
//

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/cardio" element={<Cardio />} />
          <Route path="/trauma" element={<Trauma />} />
          <Route path="/specialists" element={<Specialists />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/news" element={<News />} />
          <Route path="news/:id" element={<CardInfo />} />
          <Route path="/find" element={<FindUs />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
};

export default App;
