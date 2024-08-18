import React, { useEffect, useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../../assets/carrosel/1_Home.jpg'
import img2 from '../../assets/carrosel/2_Dentistas.jpg'
import img3 from '../../assets/carrosel/3_Escaneamento.jpg'
import vid4 from '../../assets/carrosel/3_IMG_6811.mp4'


function HomeCarrousel () {


  const videoRef = useRef(null);

  useEffect(() => {
    // Autoplay video when it's loaded
    videoRef.current.play();
  }, []);

  return (
    <div className="carousel-container">
      <Carousel
        dynamicHeight={true}
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={5000}
        transitionTime={500}
      >
        <div>
          <img src={img1} alt="Imagem 1" />
        </div>
        <div>
          <img src={img2} alt="Imagem 2" />
        </div>
        <div>
          <img src={img3} alt="Imagem 2" />
        </div>
        <div>
          <video       
          ref={videoRef}
          autoPlay
          loop
          muted 
          height={'350px'}
          >
            <source src={vid4} type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </div>
      </Carousel>
    </div>
  );
};

export default HomeCarrousel;
