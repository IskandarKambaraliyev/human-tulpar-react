import { Outlet } from "react-router-dom";

// Importing Default Components
import Navbar from "./components/navbar/Navbar";
import Socials from "./components/socials/Socials";
import Recommends from "./components/recommends/Recommends";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Socials />
      <main className="main">
        <Outlet />
      </main>
      <Recommends />
      <Contact />
      <Footer />
    </>
  );
};

export default Layout;
