import React from "react";
import {Link} from "react-router-dom";
import {Icon} from "saagie-ui/react";

export class Achievements extends React.Component {
  state = {
    achievements: []
  };

  componentDidMount() {
    fetch("/api/achievements")
      .then(body => body.json())
      .then(achievements => {
        this.setState({
          achievements
        });
      });
  }

  render() {
    const {achievements} = this.state;

    return (
      <div className="sui-l-app-layout">
        <div className="sui-l-app-layout__subapp">
          <div className="sui-l-app-layout__main">
            <div className="sui-l-app-layout__page">
              <div className="sui-l-app-layout__page-scroll">
                <div className="sui-l-container as--gutter-xl@sm">
                  <div className="sui-l-page-header">
                    <div className="sui-l-page-header__primary">
                      <div className="sui-l-page-header__title">SaagieVements</div>
                    </div>
                    <div className="sui-l-page-header__secondary">
                      <Link to="/new-achievement" className="sui-a-button as--primary">
                        New achievement
                      </Link>
                    </div>
                  </div>
                  <div className="sui-g-grid__item">
                    <h3 className="sui-h-mb-md">Have fun to unlock the following achievements</h3>
                    <div className="sui-o-datalist as--hover spj-c-list sui-h-mb-xl">
                      {achievements.map(achievement => (
                        <div
                          key={achievement.goal}
                          className=" sui-o-datalist__row as--middle spj-c-list__item">
                          <div className="sui-o-datalist__col as--link as--primary@md">
                            <div className="spj-c-list__item-title">{achievement.goal}</div>
                          </div>
                          <div className="sui-o-datalist__col as--flex-none as--align-center as--primary@md">
                            <div
                              className="spj-c-list__item-icon"
                              style={{opacity: achievement.unlocked ? 1 : 0.4}}>
                              <Icon
                                name={achievement.unlocked ? "fa-trophy" : "fa-times-circle"}
                                position="between"
                                className="as--xl"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}