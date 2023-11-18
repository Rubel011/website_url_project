import React from "react";

import { AllRoutes } from "./allRoutes/AllRoutes";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import { MyContextProvider } from "./contexts/MyContext";

function App() {
  return (
    <MyContextProvider>
      <BrowserRouter>
        <Navbar />
        <AllRoutes />
      </BrowserRouter>
    </MyContextProvider>
  );
}

export default App;
