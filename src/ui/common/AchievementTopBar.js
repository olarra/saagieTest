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
          <Link to="/first" style={styles.link}>
            Unlock With Post
          </Link>
        </div>
        <div className="sui-o-topbar__title">
          <Link to="/second" style={styles.link}>
            Create an achievement form
          </Link>
        </div>
        <div className="sui-o-topbar__title">
          <Link to="/third" style={styles.link}>
            Submit an achievement
          </Link>
        </div>
        <div className="sui-o-topbar__title">
          <Link to="/fourth" style={styles.link}>
            Fourth achievement
          </Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  link: {
    textDecoration: "none",
    color: "#FFF"
  }
};
