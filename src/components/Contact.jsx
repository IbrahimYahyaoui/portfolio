import React from "react";
import SectionTitle from "./SectionTitle";
import linkedinLogo from "../assets/social icon/linkedinLogo.svg";
import githubLogo from "../assets/social icon/githubLogo.svg";

const Contact = () => {
  return (
    <div
      className="flex flex-col items-center bg-white p-4 lg:p-8"
      id="Contact"
    >
      <SectionTitle name="Contact" />
      <div className="mt-4">
        <p className="font-poppins text-2xl lg:w-1/2">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi.
        </p>
        <p className="font-poppins mt-8 text-2xl">Let's Chat:</p>
        <div className="mt-4">
          <a
            href="mailto:ibrahimbnhs@gmail.com"
            className="font-poppins text-2xl underline"
          >
            ibrahimbnhs@gmail.com
          </a>
          <div className="mt-4">
            <a
              href="https://www.linkedin.com/in/ibrahim-yahyaoui-6b68a622b/"
              target="_blank"
              rel="noreferrer"
              className="social-link linkedin-link ml-2 inline-block"
            >
              <img
                src={linkedinLogo}
                alt="linkedin"
                className="w-12 hover:text-blue-500"
              />
            </a>
            <a
              href="https://github.com/IbrahimYahyaoui"
              target="_blank"
              rel="noreferrer"
              className="social-link github-link ml-2 inline-block"
            >
              <img
                src={githubLogo}
                alt="github"
                className="w-12 hover:text-gray-500"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
