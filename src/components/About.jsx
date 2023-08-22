import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">

          <p className="text-4xl bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>



        <br />

        <p className="text-xl">
          I am currently based in Jaipur, Rajasthan and I have completed my Bachelors in Computer Science and Technology in 2021 from JK Lakshmipat University Jaipur, Rajasthan.
          I have a passion for building web applications and designing beautiful user interfaces.
          Recently, I've been working with technologies like JavaScript, React.js, and Tailwind, and I'm currently learning Node.js and other backend technologies.
        </p>

      </div>
    </div>
  );
};

export default About;
