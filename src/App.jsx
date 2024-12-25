import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './Components/RootLayout/Index';
import Home from './Pages/Home/Index';
import Product from "./Pages/Product/Index";
import Shop from "./Pages/Shop/Index";

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route element={<RootLayout/>}>
      <Route path="/" element={<Home/>}/>
      <Route path="/Shop" element={<Shop/>}/>
      <Route path="/Shop/Product" element={<Product/>}/>
    </Route>
  </Route>
))

function App() {
  return <RouterProvider router={router} />
}

export default App;
