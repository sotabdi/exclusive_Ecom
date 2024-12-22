import { Outlet } from 'react-router-dom';
import Footer from "../Footer/Index";
import Header from "../Header/Index";
import Navbar from "../Navbar/Index";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default RootLayout;
