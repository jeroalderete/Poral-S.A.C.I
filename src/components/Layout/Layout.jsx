import { Outlet as Page } from "react-router-dom";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer";

const Layout = () => {
  return (
    <main>
      <Navbar />
      <Page />
      <Footer />
    </main>
  );
};

export default Layout;
