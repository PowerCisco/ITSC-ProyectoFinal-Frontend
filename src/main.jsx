import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom'
import { MainApp } from "./Components/MainApp";
import { PatientPage } from "./Components/MedicoUserView/PatientPage";

import "/style.css"

ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
    <MainApp />
  </BrowserRouter>

)
