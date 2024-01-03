import React from "react";

export const BlockQuote = ({ data }) => {
  return (
    <blockquote className="grid grid-cols-6">
      <div className="col-span-5 col-start-1 flex flex-col gap-4">
        {data.title && <h3 className="text-pink-500 text-2xl">{data.title}</h3>}
        {data.content && <h2 className="text-slate-100 font-light leading-relaxed text-4xl">{data.content}</h2>}
      </div>
    </blockquote>
  );
};

export default BlockQuote;
