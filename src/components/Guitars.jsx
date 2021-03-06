import React from 'react';

const Guitars = ({ guitars }) => {
  return (
    <section id='guitarras' className='guitarras contenedor'>
      <h2>Nuestra guitarras</h2>
      <div className='video-demo-contenedor'>
        <div className='video-demo'>
          <div className='video-responsive-contenedor'>
            <iframe
              className='video-responsive-src'
              width='560'
              height='315'
              src='https://www.youtube.com/embed/R1dW8M4EqYY'
              frameborder='0'
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      {guitars.map((guitar, index) => (
        <article className='guitar' key={index}>
          <img
            className='guitar-image'
            src={guitar.image}
            alt={guitar.alt}
            width='350'
          />
          <div className='guitar-container'>
            <h3 className='guitar-name'>{guitar.name}</h3>
            <ol>
              {guitar.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ol>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Guitars;
