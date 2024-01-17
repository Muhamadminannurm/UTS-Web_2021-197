// src/components/Content.js
import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Content = () => {
  const navigate = useNavigate();

  const showPage = (id) => {
    navigate(id);
  };

  return (
    <div className="container">
      <div id="content" className="hidden">
        {/* Content will be loaded dynamically based on the selected page */}
      </div>
    </div>
  );
};

export default Content;
