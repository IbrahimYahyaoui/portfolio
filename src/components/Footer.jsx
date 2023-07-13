import React from "react";

const Footer = () => {
  return (
    <div className="fontPoppins flex h-16 items-center justify-center text-white">
      <p className="h-8">
        Made with ❤️ by ibrahim Yahyoaui | {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
