const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const axios = require("axios");

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

app.get("/repositories", async (req, res) => {
    const query = req.query.q;

    const response = await axios({
        method: 'get',
        url: `https://api.github.com/search/repositories?q=${query}`,
        responseType: 'json'
    });;

    res.send(response.data);
});

app.listen(port, () => {
    console.log("Running on port " + port);
});