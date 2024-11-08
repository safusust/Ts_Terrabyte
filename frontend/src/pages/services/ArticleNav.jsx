import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function ArticleNav() {
  return (
    <div>
      <div className="mx-auto w-fit grid grid-cols-2 gap-2 p-10">
        <NavLink to={"/services/quiz"}>Quiz</NavLink>
        <NavLink to={"/services/article"}>Article</NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default ArticleNav;
