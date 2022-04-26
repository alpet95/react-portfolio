import React from "react";
// ========== data ==========
import { mail } from "../../data/social";
// ========== styles ==========
import "../../scss/components/_topbar.scss";

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="container">
        <div className="email">
          <div className="email__address">
            <img src={mail.src} />
            <span>alexpetrov0895@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
