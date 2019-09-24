import React from "react";
import {Icon} from "saagie-ui/react";

export function AchievementList({achievements}) {
    
  return (
    <div className="sui-g-grid__item" style={{marginTop: 50}}>
      <h3 className="sui-h-mb-md">List of achievements</h3>
      <div className="sui-o-datalist as--hover spj-c-list sui-h-mb-xl">
        {achievements.map((achievement, achievementIndex) => (
          <div key={achievement.goal} className=" sui-o-datalist__row as--middle spj-c-list__item">
            <div className="sui-o-datalist__col as--link as--primary@md">
              <div className="spj-c-list__item-title">{achievementIndex + 1} - {achievement.goal}</div>
            </div>
            <div className="sui-o-datalist__col as--flex-none as--align-center as--primary@md">
              <div
                className="spj-c-list__item-icon"
                style={{
                  opacity: achievement.unlocked ? 1 : 0.4
                }}>
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
  );
}
