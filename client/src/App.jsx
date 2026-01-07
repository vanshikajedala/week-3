import React from 'react'
import "./App.css"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './page/Home'
import Truck from './page/Truck'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route   path="/"   element={<Home/>}  />
      <Route   path="/truck"   element={<Truck/>}  />
    </Routes>
    
    
    </BrowserRouter>
    
    
    </>
  )
}

export default App