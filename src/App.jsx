import { BrowserRouter, Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import SellerDashBoard from "./pages/SellerDashBoard"
import BuyerDashBoard from "./pages/BuyerDashBoard"
import Navbar from "./components/Navbar"
export default function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route path="/seller/profile" element={<SellerDashBoard />}/>
      <Route path="/buyer/profile" element={<BuyerDashBoard />}/>

    </Routes>

    </BrowserRouter>
    </>
  )
}