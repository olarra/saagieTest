import { AchievementForm } from './../common/AchievementForm';
//Add a form to create new achievement
import React from "react";
export default ({validateForm}) => {
  return (
    <div className="sui-m-card">
      <div className="sui-m-card__content">
        <div className="sui-m-card__title">Achievement Creation Form</div>
        <div className="sui-m-card__details">
         <AchievementForm  action={validateForm} labelBtn="Validate Form" colorBtn="primary" />
        </div>
      </div>
    </div>
  );
};

const styles = {
  pre: {
    background: "#1e272e",
    color: "#f5f6fa",
    padding: "10px",
    borderRadius: "7px"
  }
};
