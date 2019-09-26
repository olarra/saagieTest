import React, {Component} from "react";
import PropTypes, {oneOf} from "prop-types";

export default class SaagieButtonGroup extends Component {
  static propTypes = {
    fill: PropTypes.bool,
    minimal: PropTypes.bool,
    large: PropTypes.bool,
    orientation: oneOf(["row", "column"]),
    alignText: oneOf(["left", "center", "right"]),
    children: PropTypes.array
  };

  isFillStyle({orientation}) {
    if (orientation === "row") {
      return {flex: 1};
    }
  }

  computeDisplayStyle() {
    const {fill} = this.props;
    if (fill) {
      return "flex";
    } else {
      return "inline-flex";
    }
  }

  computeChildStyle(child) {
    const {large} = this.props;
    const {minimal} = this.props;
    let defaultStyle = "sui-a-button as--link";

    if (minimal && large) {
      return `${defaultStyle} as--lg`;
    }
    if (minimal && !large) {
      return `${defaultStyle}`;
    }
    if (!minimal && large) {
      return `${child.props.className} as--lg`;
    } else {
      return child.props.className;
    }
  }

  renderChildren(props) {
    return React.Children.map(props.children, child => {
      return React.cloneElement(child, {
        style: this.isFillStyle(props),
        className: this.computeChildStyle(child)
      });
    });
  }

  render() {
    return (
      <div style={{flexDirection: this.props.orientation, display: this.computeDisplayStyle()}}>
        {this.renderChildren(this.props)}
      </div>
    );
  }
}