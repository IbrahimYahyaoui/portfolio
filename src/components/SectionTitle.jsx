import React from "react";
import { MinusIcon } from "@heroicons/react/20/solid";

const SectionTitle = ({ name }) => {
  return (
    <div className="flex w-10 flex-col items-center">
      <h1 className="fontOutfit text-center text-2xl">{name}</h1>
      <MinusIcon className="w-4  " />
    </div>
  );
};

export default SectionTitle;
