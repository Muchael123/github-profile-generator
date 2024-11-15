import React, { useContext } from "react";
import { MdContext } from "../context/MdContext";
import { Remarkable } from "remarkable";

function MarkDownPrev() {
  const { generatedMd } = useContext(MdContext);
  const md = new Remarkable();

  return (
    <div className="p-4 bg-gray-900 text-white w-full h-40">
      {/* Convert Markdown to HTML and render it */}
      <div
        dangerouslySetInnerHTML={{ __html: md.render(generatedMd) }}
        className="text-white"
      ></div>
    </div>
  );
}

export default MarkDownPrev;
