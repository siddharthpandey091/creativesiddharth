import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import FadeInWhenVisible from "../components/FadeInWhenVisible";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Creative Siddharth - a fullstack developer</title>
        <meta charset="utf-8" />
        <meta name="google-site-verification" content="jcS2sDkMHbVRdnApx-WccbhoyoVZl20vT2SjlrxdM50" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="title"
          content="Creative Siddharth - a fullstack developer"
        />
        <meta
          name="description"
          content="My name is  Siddharth Pandey aka Creative Siddharth. I'm a fullstack web developer with a passion for great design and
            user experiences."
        />
        <meta
          name="keywords"
          content="creative siddharth , siddharth pandey , creativesiddharth"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="siddharth pandey" />
        <link rel="icon" href="/creativesiddharth.jpg"></link>
      </Head>

      <div className="lg:px-32 md:px-14 sm:px-9 px-6">
        <Header />
        <Hero />

        <div id="about"></div>
        <FadeInWhenVisible>
          <About />
        </FadeInWhenVisible>

        <div id="skills"></div>
        <FadeInWhenVisible>
          <Skills />
        </FadeInWhenVisible>

        <div id="portfolio"></div>
        <FadeInWhenVisible>
          <Portfolio />
        </FadeInWhenVisible>

        <div id="contact"></div>
        <FadeInWhenVisible>
          <Contact />
        </FadeInWhenVisible>

        <Footer />
      </div>
    </>
  );
}
