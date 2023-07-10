import React from "react";
import { MinusIcon } from "@heroicons/react/20/solid";

const SectionTitle = ({ name }) => {
  return (
    <div className="flex flex-col w-10 items-center">
      <h1 className="text-2xl text-center fontOutfit">{name}</h1>
      <MinusIcon className="w-4  " />
    </div>
  );
};

export default SectionTitle;
