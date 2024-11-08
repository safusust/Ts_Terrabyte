import React from "react";

const Input = ({
  title,
  value,
  setValue,
  placeholder,
  classes,
  errorMsg,
  name,
  id,
  longText = false,
}) => {
  if (!longText)
    return (
      <div className="my-2 p-4 relative group w-full">
        <p className="absolute top-1 left-7 bg-white rounded-sm text-black text-sm">
          {title || "Title"}
        </p>
        <input
          className="bg-white w-full border-2 rounded-md py-2 px-3 
    border-slate-700 focus:border-cyan-600 outline-none focus:outline-none"
          placeholder={placeholder ? placeholder : "Type a message"}
          value={value}
          name={name}
          id={id}
          onChange={(e) =>
            setValue((p) => ({ ...p, [e.target.name]: e.target.value }))
          }
        />
        {errorMsg && <p className="text-rose-600 text-sm">*{errorMsg}</p>}
      </div>
    );

  return (
    <div>
      <textarea
        className="bg-white w-full ring-1 rounded-md py-2 px-3 
  ring-slate-700 focus:ring-cyan-600 resize-y"
        placeholder={placeholder ? placeholder : "Type a message"}
        value={value}
        name={name}
        id={id}
        rows={10}
        onChange={(e) =>
          setValue((p) => ({ ...p, [e.target.name]: e.target.value }))
        }
      />
    </div>
  );
};

export default Input;
