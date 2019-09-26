import {AchievementList} from "./../common/AchievementList";
import {AchievementTopBar} from "./../common/AchievementTopBar";
import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AchievementsService from "../../gateways/Achievements";
import {FirstAchievement, SecondAchievement, ThirdAchievement, Surprise} from "./index";
import "./Achievements.css";
export class Achievements extends React.Component {
  state = {
    achievements: [],
    response: null
  };

  componentDidMount() {
    this.fetchAchievements();
  }

  fetchAchievements() {
    AchievementsService.fetchAchievements().then(achievements => this.setState({achievements}));
  }

  async unlockAchievement(id) {
    const response = await AchievementsService.unlockAchievement(id);
    if (response.status === 200) {
      this.setState({response});
      this.fetchAchievements();
      return response;
    }
  }

  submitForm(goal) {
    if (goal.length) {
      AchievementsService.submitForm(goal).then(response => {
        if (response.status === 200) {
          this.unlockAchievement(2);
          this.fetchAchievements();
          return response;
        }
      });
    }
  }

  resetResponse() {
    this.setState({response: null});
  }

  render() {
    const {achievements} = this.state;

    return (
      <BrowserRouter>
        <div className="sui-l-app-layout">
          <div className="sui-l-app-layout__subapp">
            <div className="sui-l-app-layout__main">
              <div className="sui-l-app-layout__page">
                {/* TopBar */}
                <AchievementTopBar />
                <div className="sui-l-app-layout__page-scroll">
                  <div className="sui-l-container as--gutter-xl@sm">
                    {/* List of Achievements */}
                    <AchievementList achievements={this.state.achievements} />
                    {/* Router For Achievements Task */}
                    <Switch>
                      <Route
                        exact
                        path="/first"
                        component={() => (
                          <FirstAchievement
                            unlockAchievement={() => this.unlockAchievement(0)}
                            response={this.state.response}
                            resetResponse={() => this.resetResponse()}
                          />
                        )}
                      />
                      <Route
                        exact
                        path="/second"
                        component={() => (
                          <SecondAchievement validateForm={() => this.unlockAchievement(1)} />
                        )}
                      />
                      <Route
                        exact
                        path="/third"
                        component={() => (
                          <ThirdAchievement submitForm={goal => this.submitForm(goal)} />
                        )}
                      />
                       <Route
                        exact
                        path="/surprise"
                        component={() => (
                          <Surprise/>
                        )}
                      />

                      {/* <Route exact path="/new-achievement" component={NewAchievement} /> */}
                    </Switch>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
