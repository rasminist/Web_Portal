import logo from './logo.svg';
import './App.css';
import MainPage from './Components/HomeMainPage/MainPage';
import ProductPage from './Components/Products/Product';


import { Routes, Route, BrowserRouter } from "react-router-dom";
import Blog from "./Components/Blog/Blog";
import Calculator from "./Components/Calculator/Calculator";
import ContactUs from "./Components/ContactUs/ContactUs";
import Login from "./Components/Login/index";
import Services from "./Components/Services/Services";
import  OTPVerifyPage from "./Components/Login/OTPVerify";
import DataSafeTemplate from './Components/DataTemplate/DataSafeTemplate';
import EMICalculatorPage from './Components/EmiLoanCalculator/loanCalculator';
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
         <Route path="optVerification" element={<OTPVerifyPage/>}/>
         <Route path="showTemplate" element={<DataSafeTemplate/>}/>
         <Route path="loanEmiCalculator" element={<EMICalculatorPage/>}/>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
