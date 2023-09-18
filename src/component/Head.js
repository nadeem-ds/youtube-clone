import React from "react";

const Head = () => {
  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-md">
      <div className="flex col-span-1">
        {/* //for icon and ytlogo */}
        <img
          alt="menulogo"
          className="h-8"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
        />
        <img
          alt="youtubelogo"
          className="h-12 mx-2"
          src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-logo.jpg"
        />
      </div>
      <div className="col-span-10 ">
        {/* for searchbox */}
        <input
          type="text"
          className="w-1/2  border border-gray-500 p-2 rounded-l-full"
        />
        <button className="border border-gray-500 px-5 py-2 rounded-r-full bg-gray-100">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        {/* //usericon */}
        <img
          alt="usericon"
          className="h-8"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
