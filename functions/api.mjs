import express from "express";
import ServerlessHttp from "serverless-http";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello this my first backend deployed on netlify. Next pages are in: /avengers, /spider-man, /shrek");
})

app.get("/spider-man", (req, res) => {
    res.json({
        "name": "Spider-Man",
        "duration": "2h 20m",
        "Star": "4/5"
    })
})

app.get("/shrek", (req, res) => {
    res.json({
        "name": "Shrek",
        "duration": "1h 35m",
        "Star": "3/5"
    })
})

app.get("/avengers", (req, res) => {
    res.json({
        "name": "Avengers",
        "duration": "2h 23m",
        "Star": "5/5"
    })
})

export const handler = ServerlessHttp(app);