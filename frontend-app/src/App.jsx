import React from "react";
import Footer from "./components/Footer";
import { AllRoutes } from "./allRoutes/AllRoutes";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AllRoutes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
