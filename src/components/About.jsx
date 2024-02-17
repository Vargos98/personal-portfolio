import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">

          <p className="text-4xl bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl">
          I am a web developer out in Jaipur and I have completed my Bachelors in Computer Science and Technology from JK Lakshmipat University Jaipur.
          I have a passion for building web applications and designing beautiful user interfaces.<br/>
          Technology excites me and I am always in awe of the change it drives in the world.<br/> 
          Certain skills that I have worked with include Data Structures and Algorithms (Java, C++),<br/> 
          Web Development (MERN Stack), and what I might lack in 
          skills I make up for with my determination to learn.<br/>
          Outside of tech, I am a coffee lover, and loves to participate in numerous sports   
          in which swimming and badminton are my favourites.<br/> Beside that I love cooking, 
          as cooking is simple therapeutic. It does wonders
          in terms of unwinding and relaxing.
        </p>
      <br/>
      <br/>
      <br/>
      </div>
    </div>
    
  );
};

export default About;
