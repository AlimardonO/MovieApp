import React from "react";
import Card from "../components/Card";

const Header = () => {
  return (
    <header className="max_width px-4 py-10">
      <h1 className="text-5xl font-bold text-center ">Trending Shows</h1>
      <Card />
    </header>
  );
};

export default Header;