import "./App.css";
import Main from "./components/Main";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Servicessingle from "./components/pages/Servicessingle";
import AboutSingle from "./components/pages/AboutSingle";
import ServicesPage from "./components/pages/ServicesPage";
import ProductsPage1 from "./components/pages/ProductsPage1";
import ProductsPage2 from "./components/pages/ProductsPage2";
import ProductsPage3 from "./components/pages/ProductsPage3";
import ProductsPage4 from "./components/pages/ProductsPage4";
import { Fragment } from "react";
function App() {
  return (
    <Fragment>
      <div className="App">
        <Router>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<AboutSingle />} />
            <Route path="/Servicessingle" element={<Servicessingle />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/Chickencurrypast" element={<ProductsPage1 />} />
            <Route path="/Pepperchickenpast" element={<ProductsPage2 />} />
            <Route path="/Beafroastpaste" element={<ProductsPage3 />} />
            <Route path="/Fishcurypaste" element={<ProductsPage4 />} />
          </Routes>
        </Router>
      </div>
    </Fragment>
  );
}

export default App;
