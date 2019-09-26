import React from "react";
import {SaagieButtonGroup} from "../common";
import SyntaxHighlighter from "react-syntax-highlighter";
import {docco} from "react-syntax-highlighter/dist/esm/styles/hljs";
export default class Surprise extends React.Component {
  state = {
    orientation: "row",
    fill: false,
    large: false,
    minimal: false
  };

  handleChange() {
    this.refs.orientationToggle.checked
      ? this.setState({orientation: "column"})
      : this.setState({orientation: "row"});
    this.refs.fillToggle.checked ? this.setState({fill: true}) : this.setState({fill: false});
    this.refs.largeToggle.checked ? this.setState({large: true}) : this.setState({large: false});
    this.refs.minimalToggle.checked
      ? this.setState({minimal: true})
      : this.setState({minimal: false});
  }
  render() {
    return (
      <div className="sui-m-card">
        <div className="sui-m-card__content">
          <div className="sui-m-card__title" style={styles.center}>
            Molecule Button group : Button groups arrange multiple buttons in a horizontal or vertical group.

          </div>
          <div className="sui-m-card__details" style={{marginTop: 50}}>
            <div className="sui-g-grid as--gutter-xs">
              <div className="sui-g-grid__item as--1_2" style={styles.center}>
                <SaagieButtonGroup
                  orientation={this.state.orientation}
                  fill={this.state.fill}
                  large={this.state.large}
                  minimal={this.state.minimal}>
                  <button className="sui-a-button as--primary">Primary</button>
                  <button className="sui-a-button as--success">Success</button>
                  <button className="sui-a-button as--danger">Danger</button>
                </SaagieButtonGroup>
              </div>
              <div className="sui-g-grid__item as--1_2" style={{background: "#ebf1f5"}}>
                <label className="sui-a-form-check as--toggle">
                  <input
                    type="checkbox"
                    name="demo-checkbox-toggle"
                    ref="fillToggle"
                    onChange={() => this.handleChange()}
                  />
                  <span className="sui-a-form-check__indicator" />
                  <span className="sui-a-form-check__label">fill</span>
                </label>
                <label className="sui-a-form-check as--toggle">
                  <input
                    type="checkbox"
                    name="demo-checkbox-toggle"
                    ref="orientationToggle"
                    onChange={() => this.handleChange()}
                  />
                  <span className="sui-a-form-check__indicator" />
                  <span className="sui-a-form-check__label">vertical</span>
                </label>
                <label className="sui-a-form-check as--toggle">
                  <input
                    type="checkbox"
                    name="demo-checkbox-toggle"
                    ref="largeToggle"
                    onChange={() => this.handleChange()}
                  />
                  <span className="sui-a-form-check__indicator" />
                  <span className="sui-a-form-check__label">large</span>
                </label>
                <label className="sui-a-form-check as--toggle">
                  <input
                    type="checkbox"
                    name="demo-checkbox-toggle"
                    ref="minimalToggle"
                    onChange={() => this.handleChange()}
                  />
                  <span className="sui-a-form-check__indicator" />
                  <span className="sui-a-form-check__label">minimal</span>
                </label>
              </div>
              <div className="sui-g-grid__item as--full">
                <p><strong>Example Code</strong></p>
                <SyntaxHighlighter language="javascript" style={docco}>
{`
  <SaagieButtonGroup orientation={this.state.orientation} 
                      fill={this.state.fill}
                      large={this.state.large}
                      minimal={this.state.minimal}>
      <button className="sui-a-button as--primary">Primary</button>
      <button className="sui-a-button as--success">Success</button>
      <button className="sui-a-button as--danger">Danger</button>
  </SaagieButtonGroup>
`}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  pre: {
    background: "#1e272e",
    color: "#f5f6fa",
    padding: "10px",
    borderRadius: "7px"
  },
  center: {
    textAlign: "center"
  }
};
