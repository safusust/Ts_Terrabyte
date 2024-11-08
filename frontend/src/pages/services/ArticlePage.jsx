import React from "react";
import Article from "../../components/Article";

const articles = [
  {
    titleName: "Salty water in Southern-East of Bangladesh ",
    author: "Turya Biswas",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab dolore tempora, vel, natus quod doloribus repudiandae, ea dicta nobis quos reiciendis dignissimos adipisci. Quas ipsa mollitia voluptatem pariatur rem?, Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab dolore tempora, vel, natus quod doloribus repudiandae, ea dicta nobis quos reiciendis dignissimos adipisci. Quas ipsa mollitia voluptatem pariatur rem?, Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab dolore tempora, vel, natus quod doloribus repudiandae, ea dicta nobis quos reiciendis dignissimos adipisci. Quas ipsa mollitia voluptatem pariatur rem?",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab dolore tempora, vel, natus quod doloribus repudiandae, ea dicta nobis quos reiciendis dignissimos adipisci. Quas ipsa mollitia voluptatem pariatur rem?",
  },
  {
    titleName: "Salty water in Southern-East of Bangladesh ",
    author: "Turya Biswas",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab dolore tempora, vel, natus quod doloribus repudiandae, ea dicta nobis quos reiciendis dignissimos adipisci. Quas ipsa mollitia voluptatem pariatur rem?, Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab dolore tempora, vel, natus quod doloribus repudiandae, ea dicta nobis quos reiciendis dignissimos adipisci. Quas ipsa mollitia voluptatem pariatur rem?, Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab dolore tempora, vel, natus quod doloribus repudiandae, ea dicta nobis quos reiciendis dignissimos adipisci. Quas ipsa mollitia voluptatem pariatur rem?",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab dolore tempora, vel, natus quod doloribus repudiandae, ea dicta nobis quos reiciendis dignissimos adipisci. Quas ipsa mollitia voluptatem pariatur rem?",
  },
  {
    titleName: "Salty water in Southern-East of Bangladesh ",
    author: "Turya Biswas",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab dolore tempora, vel, natus quod doloribus repudiandae, ea dicta nobis quos reiciendis dignissimos adipisci. Quas ipsa mollitia voluptatem pariatur rem?, Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab dolore tempora, vel, natus quod doloribus repudiandae, ea dicta nobis quos reiciendis dignissimos adipisci. Quas ipsa mollitia voluptatem pariatur rem?, Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab dolore tempora, vel, natus quod doloribus repudiandae, ea dicta nobis quos reiciendis dignissimos adipisci. Quas ipsa mollitia voluptatem pariatur rem?",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab dolore tempora, vel, natus quod doloribus repudiandae, ea dicta nobis quos reiciendis dignissimos adipisci. Quas ipsa mollitia voluptatem pariatur rem?",
  },
  {
    titleName: "Salty water in Southern-East of Bangladesh ",
    author: "Turya Biswas",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab dolore tempora, vel, natus quod doloribus repudiandae, ea dicta nobis quos reiciendis dignissimos adipisci. Quas ipsa mollitia voluptatem pariatur rem?, Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab dolore tempora, vel, natus quod doloribus repudiandae, ea dicta nobis quos reiciendis dignissimos adipisci. Quas ipsa mollitia voluptatem pariatur rem?, Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab dolore tempora, vel, natus quod doloribus repudiandae, ea dicta nobis quos reiciendis dignissimos adipisci. Quas ipsa mollitia voluptatem pariatur rem?",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab dolore tempora, vel, natus quod doloribus repudiandae, ea dicta nobis quos reiciendis dignissimos adipisci. Quas ipsa mollitia voluptatem pariatur rem?",
  },
  {
    titleName: "Salty water in Southern-East of Bangladesh ",
    author: "Turya Biswas",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab dolore tempora, vel, natus quod doloribus repudiandae, ea dicta nobis quos reiciendis dignissimos adipisci. Quas ipsa mollitia voluptatem pariatur rem?, Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab dolore tempora, vel, natus quod doloribus repudiandae, ea dicta nobis quos reiciendis dignissimos adipisci. Quas ipsa mollitia voluptatem pariatur rem?, Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab dolore tempora, vel, natus quod doloribus repudiandae, ea dicta nobis quos reiciendis dignissimos adipisci. Quas ipsa mollitia voluptatem pariatur rem?",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab dolore tempora, vel, natus quod doloribus repudiandae, ea dicta nobis quos reiciendis dignissimos adipisci. Quas ipsa mollitia voluptatem pariatur rem?",
  },
  {
    titleName: "Salty water in Southern-East of Bangladesh ",
    author: "Turya Biswas",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab dolore tempora, vel, natus quod doloribus repudiandae, ea dicta nobis quos reiciendis dignissimos adipisci. Quas ipsa mollitia voluptatem pariatur rem?, Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab dolore tempora, vel, natus quod doloribus repudiandae, ea dicta nobis quos reiciendis dignissimos adipisci. Quas ipsa mollitia voluptatem pariatur rem?, Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab dolore tempora, vel, natus quod doloribus repudiandae, ea dicta nobis quos reiciendis dignissimos adipisci. Quas ipsa mollitia voluptatem pariatur rem?",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab dolore tempora, vel, natus quod doloribus repudiandae, ea dicta nobis quos reiciendis dignissimos adipisci. Quas ipsa mollitia voluptatem pariatur rem?",
  },
  {
    titleName: "Salty water in Southern-East of Bangladesh ",
    author: "Turya Biswas",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab dolore tempora, vel, natus quod doloribus repudiandae, ea dicta nobis quos reiciendis dignissimos adipisci. Quas ipsa mollitia voluptatem pariatur rem?, Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab dolore tempora, vel, natus quod doloribus repudiandae, ea dicta nobis quos reiciendis dignissimos adipisci. Quas ipsa mollitia voluptatem pariatur rem?, Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab dolore tempora, vel, natus quod doloribus repudiandae, ea dicta nobis quos reiciendis dignissimos adipisci. Quas ipsa mollitia voluptatem pariatur rem?",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab dolore tempora, vel, natus quod doloribus repudiandae, ea dicta nobis quos reiciendis dignissimos adipisci. Quas ipsa mollitia voluptatem pariatur rem?",
  },
  {
    titleName: "Salty water in Southern-East of Bangladesh ",
    author: "Turya Biswas",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab dolore tempora, vel, natus quod doloribus repudiandae, ea dicta nobis quos reiciendis dignissimos adipisci. Quas ipsa mollitia voluptatem pariatur rem?, Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab dolore tempora, vel, natus quod doloribus repudiandae, ea dicta nobis quos reiciendis dignissimos adipisci. Quas ipsa mollitia voluptatem pariatur rem?, Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab dolore tempora, vel, natus quod doloribus repudiandae, ea dicta nobis quos reiciendis dignissimos adipisci. Quas ipsa mollitia voluptatem pariatur rem?",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab dolore tempora, vel, natus quod doloribus repudiandae, ea dicta nobis quos reiciendis dignissimos adipisci. Quas ipsa mollitia voluptatem pariatur rem?",
  },
  {
    titleName: "Salty water in Southern-East of Bangladesh ",
    author: "Turya Biswas",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab dolore tempora, vel, natus quod doloribus repudiandae, ea dicta nobis quos reiciendis dignissimos adipisci. Quas ipsa mollitia voluptatem pariatur rem?, Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab dolore tempora, vel, natus quod doloribus repudiandae, ea dicta nobis quos reiciendis dignissimos adipisci. Quas ipsa mollitia voluptatem pariatur rem?, Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab dolore tempora, vel, natus quod doloribus repudiandae, ea dicta nobis quos reiciendis dignissimos adipisci. Quas ipsa mollitia voluptatem pariatur rem?",
    shortDescription:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ab dolore tempora, vel, natus quod doloribus repudiandae, ea dicta nobis quos reiciendis dignissimos adipisci. Quas ipsa mollitia voluptatem pariatur rem?",
  },
];
function ArticlePage() {
  return (
    <div className="bg-slate-900 p-5 xl:px-20">
      <header>
        <h1 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-cyan-700 to-cyan-200 pt-5">
          Article for water pollution and solution
        </h1>
      </header>

      <div className=" mt-20">
        {articles.map((ele, id) => {
          return (
            <Article
              title={ele.titleName}
              author={ele.author}
              content={ele.content}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ArticlePage;
