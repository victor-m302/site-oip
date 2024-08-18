import React, { useEffect, useRef } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


import img1 from '../../assets/carrosel2/1_IMG_7418.jpg'
import img2 from '../../assets/carrosel2/2_12_Endodontia.png'
import vid3 from '../../assets/carrosel2/3_VID_6865.mp4'
import img4 from '../../assets/carrosel2/4_21_clareamento.png'
import img5 from '../../assets/carrosel2/5_protese.png'
import img6 from '../../assets/carrosel2/6_Ortodontia1.png'


function EsCarrousel(props) {


  const {textoA, textoB, textoC, textoD, textoE, textoF} = props.texto;

  const videoRef = useRef(null);

  const legendStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  }

  useEffect(() => {
    // Autoplay video when it's loaded
    videoRef.current.play();
  }, []);

  return (
    <div className="carousel-container">
      <Carousel
        dynamicHeight={true}
        showThumbs={false}
        showStatus={true}
        infiniteLoop
        autoPlay
        interval={5000}
        transitionTime={500}
      >
        <div>
          <img src={img1} alt="Imagem 1" />
          <p style={legendStyle} className="legend">{textoA}</p>
        </div>

        <div>
          <img src={img2} alt="Imagem 1" />
          <p style={legendStyle} className="legend">{textoB}</p>
        </div>

        <div>
          <video       
          ref={videoRef}
          autoPlay
          loop
          muted 
          height={'290px'}
          >
            <source src={vid3} type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
          <p style={legendStyle} className="legend">{textoC}</p>
        </div>

        <div>
          <img src={img4} alt="Imagem 1" />
          <p style={legendStyle} className="legend">{textoD}</p>
        </div>

        <div>
          <img src={img5} alt="Imagem 1" />
          <p style={legendStyle} className="legend">{textoE}</p>
        </div>

        <div>
          <img src={img6} alt="Imagem 1" />
          <p style={legendStyle} className="legend">{textoF}</p>
        </div>

      </Carousel>
    </div>
  );
};

export default EsCarrousel;
