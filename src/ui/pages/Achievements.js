import {AchievementList} from "./../common/AchievementList";
import {AchievementTopBar} from "./../common/AchievementTopBar";
import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import AchievementsService from "../../gateways/Achievements";
import FirstAchievement from "./FirstAchievement";
import "./Achievements.css";
export class Achievements extends React.Component {
  state = {
    achievements: [],
    response : null
  };

  componentDidMount() {
    this.fetchAchievements();
  }

  fetchAchievements() {
    AchievementsService.fetchAchievements().then(achievements => this.setState({achievements}));
  }

  unlockAchievement() {
   AchievementsService.unlockAchievement(0).then(response => {
      if(response.status === 200) {
        this.setState({response})
        this.fetchAchievements();
        return response;
      } 
    })
  }

  resetResponse(){
    this.setState({response : null})
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
                      <Route exact path="/first" component={()=><FirstAchievement unlockAchievement={()=>this.unlockAchievement()} response={this.state.response} resetResponse={()=>this.resetResponse()}/>}  />
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
