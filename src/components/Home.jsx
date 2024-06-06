import React from 'react'
import logo from "../biglogo.png";


export default function Home() {
  return (
    <div className="w-full h-full ">
        <div className="flex flex-col p-28 justify-center items-center text-2xl">
          <img src={logo} alt="Logo" className="w-48 mb-4" />
          <h3 className="text-2xl mb-4">Welcome to QuizzyAI</h3>
          <p className="text-xl font-thin">
            The ideal platform to test your knowledge and have fun.
          </p>
        </div>
      </div>
  )
}
