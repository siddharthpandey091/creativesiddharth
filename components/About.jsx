import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="w-full h-auto flex flex-col relative mb-20">
      <div className="flex space-x-4 items-center">
        <p className="text-xl font-semibold">&#60;About &#47;&#62;</p>
        <div className="md:w-[60%] w-[40%] h-[1px] bg-borderColor opacity-30"></div>
      </div>

      <div className="w-full py-5">
        <div className="w-full flex flex-col-reverse md:flex-row md:space-x-24 space-x-10 md:items-start items-center">
          <div>
            <div>
              <p className="md:text-lg text-[17px]">
                Hello! my name is Siddharth Pandey. I know just a name doesn&lsquo;t
                make any sense. So Let me introduce myself, i am a fullstack web
                developer based in Uttar Pradesh India, who love to design and
                developer beautiful web applications.
              </p>
              <br />
              <p className="md:text-lg text-[17px]">
                I enjoy the constant change in the technologies used in the area
                and love diving into new frameworks and technologies.
              </p>
              <br />
              <p className="md:text-lg text-[17px]">
                I have been coding from over a year now. One of my hobbie is
                writing and creating content, I love to document my journey by
                writing blog post and also teach throuh them. So i started
                sharing contents on my instagram Page{" "}
                <a
                  href="https://www.instagram.com/creative_siddharth/?hl=en"
                  className="text-highlight"
                  target="_blank"
rel="noreferrer"
                >
                  @creative_siddharth
                </a>
                .
              </p>
            </div>
            <br />
            <div>
              <p className="font-semibold">My Journey:</p>
              <ul className="list-disc ml-5">
                <li className="mt-2">
                  <div>
                    <h1 className="md:text-lg text-[17px]">
                      Fullstack dev @{" "}
                      <a
                        href="https://startuplanes.com"
                        className="text-highlight"
                      >
                        StartupLanes
                      </a>
                    </h1>
                    <p className="text-sm">Oct 2021 - Present</p>
                  </div>
                </li>
                <li className="mt-2">
                  <div>
                    <h1 className="md:text-lg text-[17px]">
                      Engineering Dimploma in{" "}
                      <a className="text-highlight">Computer Science</a>
                    </h1>
                    <p className="text-sm">2018 - 2021</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <img
              src="/creativesiddharth.jpg"
              className="md:w-[900px] w-96 rounded-md border border-borderColor"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
