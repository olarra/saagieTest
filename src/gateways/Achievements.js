// import config from "../../config/env";
import axios from "axios";

export default class AchievementsService {

  static fetchAchievements = () =>
  axios
    .get("/api/achievements")
    .then(res => {
      console.log("res", res);
      return res.data;
    })
    .catch(error => {
      console.log("error", error);
    });

  static unlockAchievement = id =>
    axios
      .post(`/api/achievement/${id}/unlock`)
      .then(res => {
        console.log("res", res);
        return res;
      })
      .catch(error => {
        console.log("error", error.response.statusText);
        return {
          message: error.response.statusText
        };
      });
}