import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './Components/RootLayout/Index';
import Account from "./Pages/Account/Index";
import SignIn from "./Pages/auth/SignIn/Index";
import Signup from "./Pages/auth/SignUp/Index";
import Cart from "./Pages/Cart/Index";
import Checkout from "./Pages/Checkout/Index";
import ResetPassword from "./Pages/ForgotPass/Index";
import ResetPasswordForm from "./Pages/ForgotPass/ResetPass/Index";
import Home from './Pages/Home/Index';
import OtpVerify from "./Pages/OtpVerify/Index";
import Product from "./Pages/Product/Index";
import Shop from "./Pages/Shop/Index";
import Wishlist from "./Pages/Wishlist/Index";

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route element={<RootLayout/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/Shop" element={<Shop/>}/>
      <Route path="/Shop/:id" element={<Product/>}/>
      <Route path="/Signup" element={<Signup/>}/>
      <Route path="/Signin" element={<SignIn/>}/>
      <Route path="/Wishlist" element={<Wishlist/>}/>
      <Route path="/Cart" element={<Cart/>}/>
      <Route path="/Checkout" element={<Checkout/>}/>
      <Route path="/Account" element={<Account/>}/>
      <Route path="/otp-verify/:email" element={<OtpVerify/>}/>
      <Route path="/reset-password"element={<ResetPassword/>}/>
      <Route path="/reset-password/:token"element={<ResetPasswordForm/>}/>
    </Route>
  </Route>
))

function App() {
  return <RouterProvider router={router} />
}

export default App;
