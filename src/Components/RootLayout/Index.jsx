import Home from '../../Pages/Home/Index';
import Footer from "../Footer/Index";
import Header from "../Header/Index";
import Navbar from "../Navbar/Index";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Home/>
      <Footer/>
    </div>
  );
};

export default RootLayout;
