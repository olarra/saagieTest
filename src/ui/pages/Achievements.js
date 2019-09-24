import { AchievementList } from './../common/AchievementList';
import { AchievementTopBar } from './../common/AchievementTopBar';
import React from "react";
import { Router,BrowserRouter, Route, Switch } from 'react-router-dom';
import AchievementsService from "../../gateways/Achievements";
import Test from "./Test";
import "./Achievements.css";
export class Achievements extends React.Component {
  state = {
    achievements: []
  };

  componentDidMount() {
    this.fetchAchievements();
  }

  fetchAchievements() {
    AchievementsService.fetchAchievements().then(achievements => this.setState({achievements}));
  }

  unlockAchievement() {
    AchievementsService.unlockAchievement(0).then(res =>
      res.status === 200 ? this.fetchAchievements() : null
    );
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
             <AchievementTopBar/>
              <div className="sui-l-app-layout__page-scroll">
                <div className="sui-l-container as--gutter-xl@sm">
                 <AchievementList achievements={this.state.achievements}  />
                </div>
              </div>
            </div>
            {/* Achievements APP */}
            <div className="sui-l-app-layout__page">
             
              {/* Scroll Container For Achievements */}
              <div className="sui-l-app-layout__page-scroll">
                <div className="sui-l-container as--gutter-xl@sm">
                  <div className="sui-g-grid__item">
                    
                    <Switch>
                      <Route exact path="/test" component={Test} />
                      {/* <Route exact path="/new-achievement" component={NewAchievement} /> */}
                    </Switch>


                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="sui-l-app-layout__subapp">
          <p>jesi</p>
          <button onClick={() => this.unlockAchievement()}>unlock</button>
        </div> */}
      </div>
      </BrowserRouter>
    );
  }
}
