import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar";
import MainPage from './Components/HomeMainPage/MainPage';
import ProductPage from './Components/Products/Product';


import { Routes, Route, BrowserRouter } from "react-router-dom";
import Blog from "./Components/Blog/Blog";
import Calculator from "./Components/Calculator/Calculator";
import ContactUs from "./Components/ContactUs/ContactUs";
import Login from "./Components/Login/Login";
import Services from "./Components/Services/Services";


import  VerifyPage from "./Components/Login/Verification/intialVerificationPage/VerifyPage";

function App(props) {
  console.log(props);
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
         <Route path="product" element={<ProductPage/>} />
         <Route path="blog" element={<Blog />}/>
         <Route path="contactUs" element={<ContactUs/>}/>
         <Route path="login/contactUs" element={<ContactUs/>}/>
         <Route path="calculator" element={<Calculator/>}/>
         <Route path="login" element={<Login/>}/>
         <Route path="services" element={<Services/>}/>
         <Route path="optVerification" element={<VerifyPage/>}/>
        {/* <Route path="*" element={<Error />} />   */}
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
