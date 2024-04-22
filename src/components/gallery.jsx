import React from 'react';

const Gallery = () => {
  return (
    <div className="container my-24 mx-auto md:px-6 ">
      <section className="mb-32">
        <style>
          {`
            .zoom:hover img {
              transform: scale(1.1);
            }
          `}
        </style>
        <div className='text-center py-16'><span class="text-center text-4xl box-decoration-clone bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2 ">
          Graphic work:
        </span></div>

        <div className="grid gap-6 lg:grid-cols-3">
          
          <div className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20" data-te-ripple-init data-te-ripple-color="light">
            <img alt="render2" src={process.env.PUBLIC_URL + '/imgs/Render2.PNG'} className="w-full align-middle transition duration-300 ease-linear" />
            <a href="#!">
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                <div className="flex h-full items-end justify-start">
                  <div className="m-6 text-white">
                    <h5 className="mb-3 text-lg font-bold">Blender render</h5>

                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)"></div>
            </a>
          </div>
          
          <div className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20" data-te-ripple-init data-te-ripple-color="light">
            <video className="w-full align-middle transition duration-300 ease-linear " autoPlay loop muted>
                <source src="animatedBG.mp4" type="video/mp4" />
            </video>
            
            <a href="#!">
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                <div className="flex h-full items-end justify-start">
                    <div className="m-6 text-white">
                    <h5 className="mb-2 text-lg font-bold">Animated background</h5>
                    </div>
                </div>
                </div>
                <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)"></div>
            </a>
            </div>

          <div className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20" data-te-ripple-init data-te-ripple-color="light">
            <img alt="render1" src={process.env.PUBLIC_URL + '/imgs/Render1.PNG'} className="w-full align-middle transition duration-300 ease-linear" />
            <a href="#!">
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                <div className="flex h-full items-end justify-start">
                  <div className="m-6 text-white">
                    <h5 className="mb-2 text-lg font-bold">Blender render</h5>

                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)"></div>
            </a>
          </div>

          <div className="zoom relative overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20" data-te-ripple-init data-te-ripple-color="light">
            <img  alt="photoshop" src={process.env.PUBLIC_URL + '/imgs/photoshop1.png'} className="w-full align-middle transition duration-300 ease-linear" />
            <a href="#!">
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsla(0,0%,0%,0.4)] bg-fixed">
                <div className="flex h-full items-end justify-start">
                  <div className="m-6 text-white">
                    <h5 className="mb-2 text-lg font-bold">Photo edit</h5>

                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed transition duration-300 ease-in-out hover:bg-[hsla(0,0%,99%,0.15)"></div>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;