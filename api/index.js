var express = require("express");
var app = express();
app.use(express.json());

var achievements = [
    {
        "id": 0,
        "goal": "Unlock achievement on click (POST to /api/achievement/{id}/unlock)",
        "unlocked": false
    },
    {
        "id": 1,
        "goal": "Create a form to add an achievement",
        "unlocked": false
    },
    {
        "id": 2,
        "goal": "Create new achievement (POST to /api/achievement with payload: {'goal': 'this is a new achievement'})",
        "unlocked": false
    },
    {
        "id": 3,
        "goal": "Surprise us ;)",
        "unlocked": false
    },
];

app.listen(4000, () => {
 console.log("Server running on port 4000");
});

app.get("/api", (req, res, next) => {
    res.json(["existing routes:", "GET: /achievements", "POST: /achievement using a JSON like {{\"goal\": \"this is a new achievement\"}}"]);
});

app.get("/api/achievements", (req, res, next) => {
    res.json(achievements);
});

app.post("/api/achievement", (req, res) => {
    const achievement = { 'id': achievements.length, 'goal': req.body.goal, 'unlocked': false};

    achievements.push(achievement);
    res.sendStatus(200);
});

app.post("/api/achievement/:id/unlock", (req, res) => {
    const achievementId = req.params.id
    console.log(`unlocking achievement ${achievementId}`);

    const achievement = achievements.filter(item => item.id == achievementId);

    if(!achievement) {
        res.sendStatus(404);
        return;
    }

    achievements = achievements.map(item => ({
        ...item,
        unlocked: item.id == achievementId ? true : item.unlocked,
    }))

    console.log(achievements);

    res.sendStatus(200);
});
