import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";


const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

function logger(req, res, next) {
    console.log(`Request made to ${req.method}`);
    console.log(`Request made to ${req.url}`);
    next();
}
app.use(logger, bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
 });
 
 app.post("/submit", (req, res) => {
     res.send(`<h1>Your band name is:\n<p>${req.body.street}${req.body.pet}<3`)
 });

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});