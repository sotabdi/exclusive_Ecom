import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import RootLayout from './Components/RootLayout/Index'

const router = createBrowserRouter(createRoutesFromElements(
  <Route>
    <Route path="/" element={<RootLayout/>}></Route>
  </Route>
))

function App() {
  return <RouterProvider router={router} />
}

export default App;
