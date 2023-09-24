import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const menuOpen = useSelector((store) => store.app.isMenuOpen);
  console.log("menu", menuOpen);

  if (!menuOpen) {
    return null;
  }
  return (
    <div className="p-5 shadow-md w-48">
      <h1>Home</h1>
      <h1>short</h1>
      <h1>video</h1>
      <h1>payment</h1>
      <h1 className="font-bold pt-5">subcription</h1>
      <ul>
        <h1>Home</h1>
        <h1>Menu</h1>
        <h1>video</h1>
        <h1>payment</h1>
        <h1>playlist</h1>
      </ul>
      <h1 className="font-bold pt-5">watch later</h1>
      <ul>
        <h1>Home</h1>
        <h1>Menu</h1>
        <h1>video</h1>
        <h1>payment</h1>
        <h1>playlist</h1>
      </ul>
    </div>
  );
};

export default Sidebar;
