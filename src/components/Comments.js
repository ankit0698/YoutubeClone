import React from "react";

const Comments = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm rounded bg-gray-100 m-4 ">
      <img className="w-8 h-8 " alt="userImg" src="user-icon.svg" />
      <div className="px-3">
        <h4 className="font-bold"> {name}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Comments;
