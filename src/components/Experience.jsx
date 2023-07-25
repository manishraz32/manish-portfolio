import React from "react";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import nodeLogo from "../assets/nodeLogo.png";
import mongodbLogo from "../assets/mongodbLogo.png"
import mysqlLogo from "../assets/mysqlLogo.png";
import gitLogo from "../assets/gitLogo.png";
import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";

const Experience = () => {
    const techs = [
        {
            id: 1,
            src: javascript,
            title: "JavaScript",
            style: "shadow-yellow-500",
        },
        {
            id: 2,
            src: reactImage,
            title: "React",
            style: "shadow-blue-600",
        },
        {
            id: 3,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-sky-400",
        },
        {
            id: 4,
            src: nodeLogo,
            title: "Node JS",
            style: "shadow-white",
        },
        {
            id: 5,
            src: mongodbLogo,
            title: "MongeDB",
            style: "shadow-green-500",
        },
        {
            id: 6,
            src: mysqlLogo,
            title: "MySQL",
            style: "shadow-blue-600",
        },
        {
            id: 7,
            src: gitLogo,
            title: "Git",
            style: "shadow-orange-400",
        },
        {
            id: 8,
            src: github,
            title: "GitHub",
            style: "shadow-gray-400",
        },
    ];

    return (
        <div
            name="experience"
            className="bg-gradient-to-b from-gray-800 to-black w-full h-screen"
        >
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white pt-72 md:pt-14">
                <div>
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                        Experience | Skills
                    </p>
                    <p className="py-6">These are the technologies I've worked with</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {techs.map(({ id, src, title, style }) => (
                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                        >
                            <img src={src} alt="" className="w-20 mx-auto" />
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;