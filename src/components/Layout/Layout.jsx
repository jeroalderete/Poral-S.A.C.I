import { Outlet as Page } from "react-router-dom";
import Navbar2 from "../Navbar2/Navbar2.jsx";
import Footer from "../Footer";

const Layout = () => {
  return (
    <main>
      <Navbar2 />
      <Page />
      <Footer />
    </main>
  );
};

export default Layout;
