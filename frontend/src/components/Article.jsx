import React from "react";

function Article({ title, author, content }) {
  return (
    <div className=" bg-white rounded-md shadow-xl shadow-slate-700/30 mb-10 p-5">
      <div className="py-2">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-sm">Author: {author}</p>
      </div>

      <div>
        <p className="text-base">{content}</p>
      </div>
    </div>
  );
}

export default Article;
