import React, { useState } from "react";
import "../Assets/styles/test.css";

const BackgroundChanger = ({ target, name, initialBg }) => {

    const [newcolor, setNewcolor] = useState(initialBg);

  const handleChange = (e) => {
    document.querySelector(target).style.backgroundColor = e.target.value
    if(target === "nav"){
      document.querySelector('.navbar-links').style.backgroundColor = e.target.value
    }
    setNewcolor(e.target.value)
  };

  return (
    <form className="color-form">
      <input type="color" value={newcolor} onChange={handleChange} name="backgroundChange" />
      <label>{name}</label>
    </form>
  );
};

export default BackgroundChanger;
