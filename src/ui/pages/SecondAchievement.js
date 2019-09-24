//Add a form to create new achievement
import React from "react";
import {SaagieAnimatedButton} from "../common";
export default ({validateForm}) => {
  return (
    <div className="sui-m-card">
      <div className="sui-m-card__content">
        <div className="sui-m-card__title">Achievement Creation Form</div>
        <div className="sui-m-card__details">
          <div className="sui-m-form-group">
            <div className="sui-m-form-group__icon">
              <i className="sui-a-icon as--fa-wpforms" />
            </div>
            <div className="sui-m-form-group__content">
              <label className="sui-a-form-label as--uppercase">Goal</label>
              <div className="sui-a-form-helper">Describe the purpose of the goal</div>
              <input className="sui-a-form-control" />
              <SaagieAnimatedButton
                className="sui-a-button as--primary"
                onClick={() => validateForm()}
                style={{float: "right"}}>
                Validate Form
              </SaagieAnimatedButton>
            </div>
          </div>
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
