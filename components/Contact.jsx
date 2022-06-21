import React, { useRef, useState } from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FiCodepen } from "react-icons/fi";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");
  const [result, setResult] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (name == "") {
      setErr("NAME_ERR");
    } else if (email == "") {
      setErr("EMAIL_ERR");
    } else if (msg == "") {
      setErr("MSG_ERR");
    } else {
      emailjs
        .sendForm(
          "service_2w6u5co",
          "template_zy2zliu",
          form.current,
          "eAMGMGKvH1g3t9Os-"
        )
        .then(
          (result) => {
            setResult(true);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();
      setErr("");
    }
  };

  return (
    <div className="w-full h-auto flex flex-col relative mb-20">
      <div className="flex space-x-4 items-center">
        <p className="text-xl font-semibold">&#60;Contact &#47;&#62;</p>
        <div className="md:w-[60%] w-[40%] h-[1px] bg-borderColor opacity-30"></div>
      </div>
      <div className="mt-4 w-full flex md:flex-row flex-col justify-between md:space-x-32 space-y-20">
        <div className="md:w-[50%] w-full">
          <h1 className="text-lg text-primary font-semibold">Get In Touch</h1>
          <p className="mb-5">
            Do not hesitate to contact me through the form here or by direct
            email on{" "}
            <a
              href="mailto:siddharthpandey091@gmail.com"
              className="text-highlight"
            >
              siddharthpandey091@gmail.com
            </a>{" "}
            regardless of the subject.
          </p>
          <p className="mb-2">Or connect with me on social networks:</p>
          <div className="flex space-x-2 items-center">
            <a
              className="p-4 bg-cardColor rounded-md hover:bg-highlight"
              href="https://www.linkedin.com/in/siddharthpandeydev/"
              target="_blank"
rel="noreferrer" 
            >
              <BsLinkedin className="text-primary" />
            </a>
            <a
              className="p-4 bg-cardColor rounded-md hover:bg-highlight"
              href="https://www.instagram.com/creative_siddharth/?hl=en"
              target="_blank"
rel="noreferrer" 
            >
              <BsInstagram className="text-primary" />
            </a>
            <a
              className="p-4 bg-cardColor rounded-md hover:bg-highlight"
              href="https://github.com/creativesid"
              target="_blank"
rel="noreferrer" 
            >
              <BsGithub className="text-primary" />
            </a>
            <a
              className="p-4 bg-cardColor rounded-md hover:bg-highlight"
              href="https://codepen.io/creativesiddharth"
              target="_blank"
rel="noreferrer" 
            >
              <FiCodepen className="text-primary" />
            </a>
          </div>
        </div>
        <div className="md:w-[50%] w-full">
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-10">
              <label>What&lsquo;`s your name ?</label> <br />
              <input
                name="user_name"
                placeholder="Siddharth Pandey"
                type="text"
                onChange={(e) => setName(e.target.value)}
                className="w-full text-lg bg-transparent py-3 border-b border-borderColor focus:outline-none"
              />
              {err == "NAME_ERR" ? (
                <p className="text-red-500">Please Fill Your Name !</p>
              ) : null}
            </div>
            <div className="mb-10">
              <label>What&apos;s your email address ?</label> <br />
              <input
                name="user_email"
                placeholder="Siddharth@gmail.com"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-lg bg-transparent py-3 border-b border-borderColor focus:outline-none"
              />
              {err == "EMAIL_ERR" ? (
                <p className="text-red-500">Please Fill Your Email Address !</p>
              ) : null}
            </div>
            <div className="mb-5">
              <label>Type your message ?</label> <br />
              <textarea
                name="message"
                placeholder="Hi Siddharth, Let's work."
                onChange={(e) => setMsg(e.target.value)}
                className="w-full text-lg bg-transparent py-3 border-b border-borderColor focus:outline-none"
              ></textarea>
              {err == "MSG_ERR" ? (
                <p className="text-red-500">Please Write a Message !</p>
              ) : null}
            </div>
            {result ? (
              <p className="text-green-500">
                Thank you for reaching out to me.
              </p>
            ) : null}
            <input
              type="submit"
              value="Send"
              className="border-2 border-highlight rounded-[5px] py-2 w-40 text-center cursor-pointer mt-5 hover:bg-highlight hover:text-bgColor transition-all duration-75"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
