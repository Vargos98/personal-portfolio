import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white {'            '}"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl bold inline border-b-4 border-yellow-500 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
        inline-block text-transparent bg-clip-text ">
            <strong>Contact</strong>
          </p>
          <p className="py-6">Wanna chat! hit me up, I'm ready to help <span className="text-4xl">😉</span></p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/94df8ff0-a64f-456b-800d-19f62720c52e"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name" 
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required/>
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required/>
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required></textarea>

            <button className="text-black bg-gradient-to-b from-yellow-500 to-orange-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              <strong>Let's chat</strong>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
