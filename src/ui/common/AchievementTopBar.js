import React from "react";
import {Link} from "react-router-dom";

export function AchievementTopBar({}) {
  return (
    <div className="sui-o-topbar">
      <a href="#" className="sui-o-topbar__logo">
        <img src="/images/saagie-logo.svg" alt="Saagie" />
      </a>
      <div className="sui-o-topbar__primary">
        <div className="sui-o-topbar__title">
          <Link
            to="/test"
            style={{
              textDecoration: "none",
              color: "#FFF"
            }}>
            New achievement
          </Link>
        </div>
      </div>
    </div>
  );
}
