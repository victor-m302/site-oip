import 'semantic-ui-css/semantic.min.css';

import HomePanel from '../components/home/HomePanel';

import Historia from '../components/home/Historia';

import NossoTrabalho from '../components/home/NossoTrabalho';


// import MyCarousel from './components/MyCarousel';

// import { Advertisement, Divider } from 'semantic-ui-react';
// import Historia from './components/Historia';
// import HomeSection2 from './components/HomeSection2';
// import StuckWPP from './components/StuckWPP';



function Home() {

  return (
      <div style={{backgroundColor: 'lightblue', margin: '-13px' }}>

        <HomePanel/>

        <Historia/>

        <NossoTrabalho/>

      </div>
    
  )
}

export default Home
