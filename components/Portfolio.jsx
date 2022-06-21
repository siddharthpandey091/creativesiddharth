import React from "react";
import { BsGithub } from "react-icons/bs";
import { BiLinkExternal } from "react-icons/bi";
import { motion } from "framer-motion";
import FadeInWhenVisible from "./FadeInWhenVisible";

const Portfolio = () => {
  return (
    <div className="w-full h-auto flex flex-col relative mb-20 ">
      <div className="flex space-x-4 items-center">
        <p className="text-xl font-semibold">&#60;Portfolio &#47;&#62;</p>
        <div className="md:w-[60%] w-[40%] h-[1px] bg-borderColor opacity-30"></div>
      </div>

      <div className="mt-4 p-4 w-full flex lg:flex-row flex-col lg:items-start items-center lg:justify-center lg:gap-32 gap-10">
        <div className="p-4 sm:w-[500px] w-[300px] sm:h-[650px] h-[640px] flex flex-col  space-y-10 bg-cardColor">
          <FadeInWhenVisible>
            <div
              className="relative sm:h-[370px] h-[300px]"
              style={{ backgroundImage: `url("/work4/bg.jpg")` }}
            >
              <div>
                <img
                  src="/work4/work.png"
                  className="w-96 absolute sm:top-10 top-20 sm:left-10 left-1 drop-shadow-2xl"
                />
              </div>
            </div>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <div>
              <h1 className="text-lg text-primary font-semibold">
                StartupLanes (coming soon)
              </h1>
              <p>
                This is a company project of{" "}
                <a
                  href="https://startuplanes.com"
                  target="_blank"
rel="noreferrer" 
                  className="text-highlight"
                >
                  StartupLanes
                </a>{" "}
                where i am working as a Fullstack web developer. This project is
                is being developed on React (frontend), and Laravel and Mysql
                (backend).
              </p>
              <div className="flex space-x-2 mt-3">
                <p className="text-sm text-primary">React</p>
                <p className="text-sm text-primary">Laravel</p>
                <p className="text-sm text-primary">MySQL</p>
                <p className="text-sm text-primary">AWS</p>
              </div>
              <div className="flex space-x-2 mt-3">
                {/* <a href="https://github.com/creativesid" target="_blank" rel="noreferrer" >
                  <BsGithub className="text-primary text-lg hover:text-highlight" />
                </a> */}
                <a target="_blank" rel="noreferrer"  className="flex space-x-1 items-center">
                  <BiLinkExternal className="text-primary text-lg hover:text-highlight" />{" "}
                  Coming Soon
                </a>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>

        <div className="lg:mt-96 mt-10 p-4 sm:w-[500px] w-[300px] sm:h-[650px] h-[640px] flex flex-col space-y-10 bg-cardColor shadow-lg">
          <FadeInWhenVisible>
            <div
              className="relative sm:h-[370px] h-[300px]"
              style={{ backgroundImage: `url("/work1/bg.jpg")` }}
            >
              <div>
                <img
                  src="/work1/work.png"
                  className="w-96 absolute sm:top-10 top-20 sm:left-10 left-1 drop-shadow-2xl"
                />
              </div>
            </div>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <div>
              <h1 className="text-lg text-primary font-semibold">
                ReactBase Shop
              </h1>
              <p>
                ReactBase Shop a ecommerce web application for grocery shopping
                built with React and Firebase. It uses firebase google
                authentication. I have used React Context with Reducers to
                create Global and Cart State.
              </p>
              <div className="flex space-x-2 mt-3">
                <p className="text-sm text-primary">React</p>
                <p className="text-sm text-primary">Firebase</p>
              </div>
              <div className="flex space-x-2 mt-3">
                <a
                  href="https://github.com/creativesid/react-firebase-shop-ap"
                  target="_blank"
rel="noreferrer"
                >
                  <BsGithub className="text-primary text-lg hover:text-highlight" />
                </a>
                <a
                  href="https://react-firebase-shop-app.vercel.app/"
                  target="_blank"
rel="noreferrer"
                >
                  <BiLinkExternal className="text-primary text-lg hover:text-highlight" />
                </a>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>

      <div className="lg:-mt-56 mt-4 p-4 w-full flex lg:flex-row flex-col lg:items-start items-center lg:justify-center lg:gap-32 gap-10">
        <div className="p-4 sm:w-[500px] w-[300px] sm:h-[650px] h-[640px] flex flex-col space-y-10 bg-cardColor">
          <FadeInWhenVisible>
            <div
              className="relative sm:h-[370px] h-[300px]"
              style={{ backgroundImage: `url("/work3/bg.jpg")` }}
            >
              <div>
                <img
                  src="/work3/work.png"
                  className="w-96 absolute sm:top-10 top-20 sm:left-10 left-1 drop-shadow-2xl"
                />
              </div>
            </div>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <div>
              <h1 className="text-lg text-primary font-semibold">LaraGigs</h1>
              <p>
                LaraGigs is a Web Application that offers user to post and get
                business requirement projects. A user can post their business
                requirements. This application is built on Laravel and MySQL
                with Sanctum Authentication.
              </p>
              <div className="flex space-x-2 mt-3">
                <p className="text-sm text-primary">Laravel</p>
                <p className="text-sm text-primary">Mysql</p>
              </div>
              <div className="flex space-x-2 mt-3">
                <a
                  href="https://github.com/creativesid/Laravel-Job-Listing-App"
                  target="_blank"
rel="noreferrer"
                >
                  <BsGithub className="text-primary text-lg hover:text-highlight" />
                </a>
                <a className="flex items-center g-1" target="_blank" rel="noreferrer">
                  <BiLinkExternal className="text-primary text-lg hover:text-highlight" />
                  Coming Soon
                </a>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>

        <div className="lg:mt-96 mt-10 p-4 sm:w-[500px] w-[300px] sm:h-[650px] h-[640px] flex flex-col space-y-10 bg-cardColor">
          <FadeInWhenVisible>
            <div
              className="relative sm:h-[370px] h-[300px]"
              style={{ backgroundImage: `url("/work2/bg.jpg")` }}
            >
              <div>
                <img
                  src="/work2/work.png"
                  className="w-96 absolute sm:top-10 top-20 sm:left-10 left-1 drop-shadow-2xl"
                />
              </div>
            </div>
          </FadeInWhenVisible>
          <FadeInWhenVisible>
            <div>
              <h1 className="text-lg text-primary font-semibold">Wow Food</h1>
              <p>
                Wow Food is a ecommerce platform Restaurants built with PHP and
                Mysql. It is a Fullstack Web Application. It uses PHP Mailer for
                verifying user&apos;s email addresses. It also have checkout feature.
              </p>
              <div className="flex space-x-2 mt-3">
                <p className="text-sm text-primary">PHP</p>
                <p className="text-sm text-primary">MySQL</p>
                <p className="text-sm text-primary">PHP Mailer</p>
              </div>
              <div className="flex space-x-2 mt-3">
                <a
                  href="https://github.com/creativesid/food-heaven"
                  target="_blank"
rel="noreferrer"
                >
                  <BsGithub className="text-primary text-lg hover:text-highlight" />
                </a>
                <a className="flex items-center space-x-1" target="_blank" rel="noreferrer">
                  <BiLinkExternal className="text-primary text-lg hover:text-highlight" />
                  Coming Soon
                </a>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </div>

      <div className="mt-10">
        {/* <h1 className="text-lg font-bold text-primary">
          Other Web Experiments
        </h1>
        <div className="overflow-y-auto">
        </div> */}
      </div>
    </div>
  );
};

export default Portfolio;
