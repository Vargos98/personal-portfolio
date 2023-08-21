import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
      
          <p className="text-5xl font-bold inline border-b-4 border-gray-500 ">
            About
          </p>
        </div>

        

        <br />

        <p className="text-xl">
          I am based in Jaipur, Rajsthan and I have completed my Bachelors in Computer Science and Technology in 2021 from JK Lakshmipat University, Jaipur, Rajasthan. 
          After that I worked as Chief Operations Officer in " The Chaya Chitra " and managed the key aspects of running and managing a company.
          Moreover, I designed its website and handled clients simultaneously.
        </p>
    
      </div>
    </div>
  );
};

export default About;
