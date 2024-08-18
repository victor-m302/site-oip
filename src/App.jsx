import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomeLayout from "./site-structure/SiteLayout";

import Home from "./site-pages/Home";
import Clinica from "./site-pages/Clinica";
import Especialidades from "./site-pages/Especialidades";
import Contato from "./site-pages/Contato";
import Equipe from "./site-pages/Equipe";



function App() {


    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/site-oip' element={<HomeLayout/>}>
              <Route path='/site-oip' element={<Home/>}/>
              <Route path='/site-oip/clinica' element={<Clinica/>}/>
              <Route path='/site-oip/equipe' element={<Equipe/>}/>
              <Route path='/site-oip/especialidades' element={<Especialidades/>}/>
              <Route path='/site-oip/contato' element={<Contato/>}/> 
          
            
            </Route>
          </Routes>               
        </BrowserRouter>
      
      
      </>
      
    )

}

export default App;