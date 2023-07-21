import React from "react";

const About = () => {
    return (
        <div
            name="about"
            className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
        >
            <div className="max-w-screen-lg p-4 pt-28 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        About
                    </p>
                </div>

                <p className="text-xl mt-15">
                    Hello There! My name is Manish Kumar Prasad. I have completed my Bachelor of Technology 
                    in july 2022. I Love coding and building web application. I am skills in MERN 
                    stack.
                </p>
                <br />
                <p className="text-xl mt-5">
                    During my educational journey, I focused on building a solid foundation in front-end 
                    technologies such as HTML, CSS, and JavaScript. I also delved into the world of React, 
                    discovering its potential for crafting intuitive and user-friendly interfaces. On the 
                    back end, I have gained proficiency in Node.js and Express, 
                    excited to bring life to my projects with robust server-side functionalities.
                </p>
                <br />
                <p className="text-xl mt-5">
                    I invite you to explore my portfolio, where I've showcased some 
                    of my personal projects. I'm thrilled to 
                    be a part of the ever-evolving world of web development and excited 
                    about the opportunities that lie ahead.
                </p>
                <br />
                <p className="text-xl mt-5">
                    Let's connect and explore how I can contribute to your team 
                    as a passionate and dedicated MERN stack developer!
                </p>
            </div>
        </div>
    );
};

export default About;