import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { MdMenu, MdMenuOpen, MdSettings } from "react-icons/md";
import { BiMenu } from "react-icons/bi";

const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="top-0 z-50 lg:block hidden">
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          className="py-8 bg-bgColor flex justify-between ease-in-out"
        >
          <div>
            <img src="" />
            <Link href="/">
              <a className="font-semibold text-xl">Siddharth</a>
            </Link>
          </div>
          <div>
            <ul className="flex gap-10">
              <li className={`hover:font-semibold transition-all duration-75`}>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li
                className={`${
                  router.asPath == "/#portfolio" &&
                  "text-highlight font-semibold"
                } hover:font-semibold transition-all duration-75`}
              >
                <Link href="#portfolio">
                  <a>Projects</a>
                </Link>
              </li>
              <li
                className={`${
                  router.asPath == "/#about" && "text-highlight font-semibold"
                } hover:font-semibold transition-all duration-75`}
              >
                <Link href="/#about">
                  <a>About</a>
                </Link>
              </li>
              <li
                className={`${
                  router.asPath == "/#contact" && "text-highlight font-semibold"
                } hover:font-semibold transition-all duration-75`}
              >
                <Link href="/#contact">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      <div className="sticky top-0 z-50 lg:hidden block">
        <div className="py-8 bg-bgColor flex justify-between ease-in-out">
          <div>
            <img src="" />
            <Link href="/">
              <a className="font-semibold text-xl">Siddharth</a>
            </Link>
          </div>
          <div
            className="cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <MdMenu className="text-2xl" />
          </div>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="absolute top-16 right-0 w-[150px] h-auto rounded-lg bg-cardColor border border-borderColor z-4"
            >
              <ul className="p-5">
                <li
                  className={`hover:font-semibold transition-all duration-75`}
                >
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li
                  className={`${
                    router.asPath == "/#portfolio" &&
                    "text-highlight font-semibold"
                  } hover:font-semibold transition-all duration-75 mt-2`}
                >
                  <Link href="#portfolio">
                    <a>Projects</a>
                  </Link>
                </li>
                <li
                  className={`${
                    router.asPath == "/#about" && "text-highlight font-semibold"
                  } hover:font-semibold transition-all duration-75  mt-2`}
                >
                  <Link href="/#about">
                    <a>About</a>
                  </Link>
                </li>
                <li
                  className={`${
                    router.asPath == "/#contact" &&
                    "text-highlight font-semibold"
                  } hover:font-semibold transition-all duration-75  mt-2`}
                >
                  <Link href="/#contact">
                    <a>Contact</a>
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
