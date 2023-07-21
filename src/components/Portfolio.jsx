import React from "react";
import ecommerce from "../assets/portfolio/ecommerce.png";
import typingMeter from "../assets/portfolio/typingMeter.png";
import coinDekho from "../assets/portfolio/coinDekho.jpg";
import chat from "../assets/portfolio/chat.png";
import todo from "../assets/portfolio/todo.jpg";
import youtube from "../assets/portfolio/youtube.jpg";

const Portfolio = () => {

    const textStyle = {
        color: 'red', 
        textDecoration: 'line-through',
    };

    const portfolios = [
        {
            id: 1,
            src: ecommerce,
            view: "#",
            code: "https://github.com/manishraz32/BOOKSTORE",
        },
        {
            id: 2,
            src: coinDekho,
            view: "https://coindekho.netlify.app",
            code: "https://github.com/manishraz32/CoinDekho-project",
        },
        {
            id: 3,
            src: typingMeter,
            view: "https://typing-meter-by-manish.netlify.app",
            code: "https://github.com/manishraz32/typingmeter",
        },
        {
            id: 4,
            src: youtube,
            view: "https://watchvideos.netlify.app/",
            code: "https://github.com/manishraz32/movieApps"
        },
        {
            id: 5,
            src: chat,
            view: "#",
            code: "https://github.com/manishraz32/chat-application-project",
        },
        {
            id: 6,
            src: todo,
            view: "#",
            code: "https://github.com/manishraz32/todoList"
        }
    ];

    return (
        <div
            name="portfolio"
            className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
        >
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pt-28 md:pt-10">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Portfolio
                    </p>
                    <p className="py-6">Check out some of my work right here</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map(({ id, src, view, code }) => (
                        <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                            <img
                                src={src}
                                alt=""
                                className="rounded-md w-full h-[150px] duration-200 hover:scale-105"
                            />
                            <div className="flex items-center justify-center">
                                <a
                                    style={view === "#" ? textStyle : {}}
                                    href={view}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 cursor-pointer"
                                >
                                    Demo
                                </a>
                                <a
                                    href={code}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 cursor-pointer"
                                >
                                    Code
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;