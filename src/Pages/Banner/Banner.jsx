import React from 'react';

const Banner = () => {
    return (
        <div>
     <div className="carousel w-full my-10 h-[400px] md:h-[500px] lg:h-[600px]">
  <div id="slide1" className="carousel-item relative w-full h-full">
    <img
      src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg"
      className="w-full h-full object-cover"
    />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>

  <div id="slide2" className="carousel-item relative w-full h-full">
    <img
      src="https://images.pexels.com/photos/9968642/pexels-photo-9968642.jpeg"
      className="w-full h-full object-cover"
    />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>

  <div id="slide3" className="carousel-item relative w-full h-full">
    <img
      src="https://images.pexels.com/photos/159862/art-school-of-athens-raphael-italian-painter-fresco-159862.jpeg"
      className="w-full h-full object-cover"
    />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>

  <div id="slide4" className="carousel-item relative w-full h-full">
    <img
      src="https://images.pexels.com/photos/415585/pexels-photo-415585.jpeg"
      className="w-full h-full object-cover"
    />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;