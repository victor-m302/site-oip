import 'semantic-ui-css/semantic.min.css';

import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HomePanel from './components/HomePanel';
import MyCarousel from './components/MyCarousel';

import { Advertisement, Divider } from 'semantic-ui-react';
import HomeSection from './components/HomeSection';
import HomeSection2 from './components/HomeSection2';
import StuckWPP from './components/StuckWPP';


function App() {

  return (
      <div style={{backgroundColor: 'lightblue'}}>
        <Navbar/>

        {/* <div style={{position: 'fixed', 
        zIndex:1000,
        display: 'flex',
        minHeight: 'calc(100vh - 40px)', // Adjust based on your header height
        flexDirection: 'column'
        
        }}>2050 homens</div> */}

        <StuckWPP/>


        <HomePanel/>


        <HomeSection/>
        

        <HomeSection2/>

        <Footer/>


      </div>
    
  )
}

export default App
