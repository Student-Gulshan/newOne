import React from "react";
import pokemon from "../../public/pokemon.jpg"
import clock from "../../public/clock.jpg"

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: pokemon,
      name: "Pokemon Cards", 
      paragraph:
        "Pokemon Cards web App using React and CSS",
      demoLink: "http://127.0.0.1:5173/PokemonCards/", 
    },
    {
      id: 2,
      logo: clock,
      name: "Digital Clock", 
      paragraph:
        "Digital clock using HTML, CSS and JavaScript",
      demoLink: "https://transcendent-puppy-c1898a.netlify.app", 
    },
   
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name, paragraph, demoLink, sourceCodeLink }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">{paragraph}</p>
              </div>
              <div className="px-6 py-4 space-x-3 justify-around">
                {demoLink && (
                  <a
                    href={demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
                  >
                    Demo
                  </a>
                )}
                {sourceCodeLink && (
                  <a
                    href={sourceCodeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
                  >
                    Source code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
