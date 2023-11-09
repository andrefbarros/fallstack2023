import React from "react";

interface HeadingTextProps {
  text: string;
}

const HeadingText: React.FC<HeadingTextProps> = ({ text }) => {
  return (
    <h1 className="my-6 text-center text-3xl font-bold uppercase md:text-4xl lg:my-12 lg:text-6xl">
      {text}
    </h1>
  );
};

export default HeadingText;
