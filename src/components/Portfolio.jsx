import React from "react";
import todo from"../../public/todo.jpeg";
import tictac from"../../public/tictac.jpeg";
import guess from"../../public/guess.jpeg";
import bmi from"../../public/bmi.jpeg";
import vikara from "../../public/vikara.png"

function PortFolio() {
  const cardItem = [
    {
      id: 2,
      logo: vikara,
      name: "Vikara", 
      paragraph:
        "Vikara Web app with HTML CSS and Javascript",
      demoLink: " https://student-gulshan.github.io/Student-Gulshan/", 
      // sourceCodeLink: "https://github.com/Student-Gulshan/Student-Gulshan", 
    },
    // {
    //   id: 3,
    //   logo: todo,
    //   name: "Todo App",
    //   paragraph:
    //     "Todo App with Reactjs and it Store Todos in Local Storage",
    //   demoLink: "https://todo-app-bice-three-35.vercel.app/", 
    //   sourceCodeLink: "https://github.com/Abhishek6546/TodoApp", 
    // },
    // {
    //   id: 4,
    //   logo: tictac,
    //   name: "TicTacToe",
    //   paragraph:
    //     "TicTacToe Game with HTML CSS and Javascript",
    //   demoLink: "https://tictactoebyabhishek123.netlify.app/",
    //   sourceCodeLink: "https://github.com/Abhishek6546/TicTacToe", 
    // },
    // {
    //   id: 5,
    //   logo: guess ,
    //   name: "Guess a Number",
    //   paragraph:
    //     "A guess a number game involves predicting a hidden number within a specified range.",
    //   demoLink: "https://guessnumbyabhishek.netlify.app/", 
    //   sourceCodeLink: "https://github.com/Abhishek6546/guessNumber", 
    // },
    // {
    //   id: 6,
    //   logo: bmi,
    //   name: "BMI Calculator",
    //   paragraph:
    //     "A BMI calculator computes Body Mass Index using a person's weight and height.",
    //   demoLink: "https://abhishekbmi.netlify.app/", 
    //   sourceCodeLink: "https://github.com/Abhishek6546/BMI", 
    // },
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
