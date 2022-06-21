import React from "react";
import {
  DiCss3Full,
  DiGithubAlt,
  DiHeroku,
  DiHtml5,
  DiJsBadge,
  DiLaravel,
  DiLinux,
  DiMongodb,
  DiMysql,
  DiNodejsSmall,
  DiPhotoshop,
  DiPhp,
  DiReact,
} from "react-icons/di";
import {
  SiExpress,
  SiFigma,
  SiFlutter,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="w-full h-auto flex flex-col relative mb-20">
      <div className="flex space-x-4 items-center">
        <p className="text-xl font-semibold">&#60;Skills &#47;&#62;</p>
        <div className="md:w-[60%] w-[40%] h-[1px] bg-borderColor opacity-30"></div>
      </div>

      <div className="w-full py-5">
        <h1 className="text-lg">Frontend Technologies</h1>
        <div className="mt-2 mb-5 grid lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-3 grid-cols-2  space-x-4">
          <div className="flex  space-x-2 items-center rounded-lg p-2 bg-cardColor shadow-md cursor-pointer  hover:bg-highlight hover:text-bgColor">
            <DiHtml5 className="text-3xl" />
            <p className="text-sm font-semibold">HTML</p>
          </div>
          <div className="flex  space-x-2 items-center rounded-lg p-2 bg-cardColor shadow-md cursor-pointer  hover:bg-highlight hover:text-bgColor">
            <DiCss3Full className="text-3xl" />
            <p className="text-sm font-semibold">CSS</p>
          </div>
          <div className="flex  space-x-2 items-center rounded-lg p-2 bg-cardColor shadow-md cursor-pointer  hover:bg-highlight hover:text-bgColor">
            <DiJsBadge className="text-3xl" />
            <p className="text-sm font-semibold">JavaScript</p>
          </div>
          <div className="flex  space-x-2 items-center rounded-lg p-2 bg-cardColor shadow-md cursor-pointer  hover:bg-highlight hover:text-bgColor">
            <DiReact className="text-3xl" />
            <p className="text-sm font-semibold">React.JS</p>
          </div>
          <div className="flex  space-x-2 items-center rounded-lg p-2 bg-cardColor shadow-md cursor-pointer  hover:bg-highlight hover:text-bgColor">
            <SiNextdotjs className="text-2xl" />
            <p className="text-sm font-semibold">Next.JS</p>
          </div>
          <div className="flex  space-x-2 items-center rounded-lg p-2 bg-cardColor shadow-md cursor-pointer  hover:bg-highlight hover:text-bgColor">
            <SiTailwindcss className="text-2xl" />
            <p className="text-sm font-semibold">Tailwind</p>
          </div>
        </div>

        <h1 className="text-lg">Backend Technologies</h1>
        <div className="mt-2 mb-5 grid lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-3 grid-cols-2  space-x-4">
          <div className="flex  space-x-2 items-center rounded-lg p-2 bg-cardColor shadow-md cursor-pointer  hover:bg-highlight hover:text-bgColor">
            <DiPhp className="text-3xl" />
            <p className="text-sm font-semibold">PHP</p>
          </div>
          <div className="flex  space-x-2 items-center rounded-lg p-2 bg-cardColor shadow-md cursor-pointer  hover:bg-highlight hover:text-bgColor">
            <DiLaravel className="text-3xl" />
            <p className="text-sm font-semibold">Laravel</p>
          </div>
          <div className="flex  space-x-2 items-center rounded-lg p-2 bg-cardColor shadow-md cursor-pointer  hover:bg-highlight hover:text-bgColor">
            <DiMysql className="text-3xl" />
            <p className="text-sm font-semibold">MySQL</p>
          </div>
          <div className="flex  space-x-2 items-center rounded-lg p-2 bg-cardColor shadow-md cursor-pointer  hover:bg-highlight hover:text-bgColor">
            <DiNodejsSmall className="text-3xl" />
            <p className="text-sm font-semibold">Node.JS</p>
          </div>
          <div className="flex  space-x-2 items-center rounded-lg p-2 bg-cardColor shadow-md cursor-pointer  hover:bg-highlight hover:text-bgColor">
            <SiExpress className="text-2xl" />
            <p className="text-sm font-semibold">Express</p>
          </div>
          <div className="flex  space-x-2 items-center rounded-lg p-2 bg-cardColor shadow-md cursor-pointer  hover:bg-highlight hover:text-bgColor">
            <DiMongodb className="text32xl" />
            <p className="text-sm font-semibold">MongoDB</p>
          </div>
        </div>

        <h1 className="text-lg">Other Skills</h1>
        <div className="mt-2 mb-5 grid lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-3 grid-cols-2  space-x-4">
          <div className="flex  space-x-2 items-center rounded-lg p-2 bg-cardColor shadow-md cursor-pointer  hover:bg-highlight hover:text-bgColor">
            <DiLinux className="text-3xl" />
            <p className="text-sm font-semibold">Linux</p>
          </div>
          <div className="flex  space-x-2 items-center rounded-lg p-2 bg-cardColor shadow-md cursor-pointer  hover:bg-highlight hover:text-bgColor">
            <SiFigma className="text-2xl" />
            <p className="text-sm font-semibold">Figma</p>
          </div>
          <div className="flex  space-x-2 items-center rounded-lg p-2 bg-cardColor shadow-md cursor-pointer  hover:bg-highlight hover:text-bgColor">
            <DiPhotoshop className="text-3xl" />
            <p className="text-sm font-semibold">Photoshop</p>
          </div>
          <div className="flex  space-x-2 items-center rounded-lg p-2 bg-cardColor shadow-md cursor-pointer  hover:bg-highlight hover:text-bgColor">
            <DiHeroku className="text-3xl" />
            <p className="text-sm font-semibold">Heroku</p>
          </div>
          <div className="flex  space-x-2 items-center rounded-lg p-2 bg-cardColor shadow-md cursor-pointer  hover:bg-highlight hover:text-bgColor">
            <DiGithubAlt className="text-2xl" />
            <p className="text-sm font-semibold">Github</p>
          </div>
        </div>

        <h1 className="text-lg">Currently Learning</h1>
        <div className="mt-2 mb-5 grid lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-3 grid-cols-2  space-x-4">
          <div className="flex  space-x-2 items-center rounded-lg p-2 bg-cardColor shadow-md cursor-pointer  hover:bg-highlight hover:text-bgColor">
            <SiFlutter className="text-2xl" />
            <p className="text-sm font-semibold">Flutter</p>
          </div>
          <div className="flex  space-x-2 items-center rounded-lg p-2 bg-cardColor shadow-md cursor-pointer  hover:bg-highlight hover:text-bgColor">
            <FaAws className="text-2xl" />
            <p className="text-sm font-semibold">AWS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
