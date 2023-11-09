import React from "react";

import { AllRoutes } from "./allRoutes/AllRoutes";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <AllRoutes />
    </BrowserRouter>
  );
}

export default App;
