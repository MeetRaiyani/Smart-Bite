import React from "react";
import { Route, Routes, useParams } from "react-router-dom";
import Login from "./component/login/Login";
import Home from "./pages/Home";
import Gallery from "./component/Gallery/Gallery";
import Header from "./component/Header/Header";
import Addtocart from "./component/Addtocart/Addtocart";
import About from "./component/About/About";
import Cartlist from "./component/Cartlist/Cartlist";
import Speciality from "./component/Home/Speciality";
import Homeabout from "./component/Home/Homeabout";
import Offer from "./component/Home/Offer";
import Contact from "./component/Contact/Contact";
import Tips from "./component/Home/Tips";
import RastaurantImage from "./component/Home/RastaurantImage";
import Footer from "./component/Footer/Footer";
import Ragistration from "./component/Ragistration/Ragistration";
import Payment from "./component/Payment/Payment";
import { Toaster } from 'react-hot-toast';
import Verify from "./component/Verify/Verify.jsx";
import MyOrder from "./component/myOrder/MyOrder.jsx";
import Products from "./component/products/Products.jsx";
const App = () => {
  const { id } = useParams();
  return (
    <>     
      <Header />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/addtocart/:id" Component={Addtocart} />
        <Route path="/login" Component={Login} />
        <Route path="/myorders" Component={MyOrder} />
        <Route path="/ragistration" Component={Ragistration} />
        <Route path="/gallery" Component={Gallery} />
        <Route path="/contact" Component={Contact} />
        <Route path="/about" Component={About} />
        <Route path="/cartlist" Component={Cartlist} />      
        <Route path="/payment" Component={Payment} />      
        <Route path="/speciality" Component={Speciality} />      
        <Route path="/homeabout" Component={Homeabout} />      
        <Route path="/offer" Component={Offer} />     
        <Route path="/tips" Component={Tips} />     
        <Route path="/verify" Component={Verify} />     
        <Route path="/our-info" Component={RastaurantImage} />  
        <Route path="/Products" Component={Products} />  

      </Routes>
      <Footer />
      <Toaster position="top right"/>
    </>
  );
}
export default App;