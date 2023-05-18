import React from "react";

const Button = ({ styles, text = "Get Started", url }) => (
  <>
    {url ? (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={`py-2 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
      >
        {text}
      </a>
    ) : (
      <button
        type="button"
        className={`py-2 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
      >
        {text}
      </button>
    )}
  </>
);

export default Button;
