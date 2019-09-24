import React, {Component} from "react";
import {SaagieAnimatedButton} from "./index";


export class AchievementForm extends Component {
  state = {
    goal: ""
  };

  render() {
    return (
      <div className="sui-m-form-group">
        <div className="sui-m-form-group__icon">
          <i className="sui-a-icon as--fa-wpforms" />
        </div>
        <div className="sui-m-form-group__content">
          <label className="sui-a-form-label as--uppercase">Goal</label>
          <div className="sui-a-form-helper">Describe the purpose of the goal</div>
          <input
            className="sui-a-form-control"
            value={this.state.goal}
            onChange={e => this.setState({goal: e.target.value})}
          />
          <SaagieAnimatedButton
            className={"sui-a-button as--" + this.props.colorBtn}
            onClick={() => this.props.action(this.state.goal)}
            style={formStyle.btn}>
            {this.props.labelBtn}
          </SaagieAnimatedButton>
        </div>
      </div>
    );
  }
}

const formStyle = {
  btn: {
    float: "right"
  }
};
