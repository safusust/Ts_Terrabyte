import React from "react";
const Form = ({ classes, handleSubmit, children }) => {
  return (
    <form
      className={`p-10 w-full max-w-screen-md mx-auto  bg-gradient-to-br from-transparent via-cyan-600 via-30%  rounded-xl ${classes}`}
      onSubmit={handleSubmit}
    >
      {children}
    </form>
  );
};

export default Form;
