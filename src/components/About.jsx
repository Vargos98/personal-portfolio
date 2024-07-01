import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">

          <p className="text-4xl bold border-b-4 border-yellow-500 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
        inline-block text-transparent bg-clip-text">
           <strong> About</strong> 
          </p>
        </div>
        <p className="text-xl ">
          I am a web developer out in Jaipur and I have completed my <strong> Bachelors in Computer Science and Technology from JK Lakshmipat University Jaipur. </strong> 
          I have a passion for building web applications and designing beautiful user interfaces.<br/>
          Technology excites me and I am always in awe of the change it drives in the world.<br/> 
          Certain skills that I have worked with include Data Structures and Algorithms <strong>(Java, C++)</strong>,<br/> 
          Web Development <strong>(MERN Stack)</strong>, and what I might lack in 
          skills I make up for with my determination to learn.
          Outside of tech, I am a coffee lover, and loves to participate in numerous sports   
          in which swimming and badminton are my favourites. Beside that I love cooking, 
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
