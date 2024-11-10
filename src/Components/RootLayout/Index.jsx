import Header from "../Header/Index";
import Navbar from "../Navbar/Index"
import Home from '../../Pages/Home/Index'

const RootLayout = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Home/>
    </div>
  );
};

export default RootLayout;
