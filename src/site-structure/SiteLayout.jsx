import 'semantic-ui-css/semantic.min.css';


import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import StuckWPP from '../components/StuckWPP'
import { Outlet } from 'react-router-dom';

function HomeLayout() {

  return (
      <div >
            <Navbar/>
                <Outlet/>
                <StuckWPP/>
        
            <Footer/>
      </div>
    
  )
}

export default HomeLayout
