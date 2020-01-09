const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const axios = require("axios");
const cors = require('cors');

const repositoriesController = require("./utils/repositoriesController");

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const port = 8000;

app.get("/repositories", async (req, res) => {
    const query = req.query.q;

    const response = await axios({
        method: 'get',
        url: `https://api.github.com/search/repositories?q=${query}`,
        responseType: 'json'
    });

    res.send(response.data.items);
});

app.post("/bookmarks", async (req, res) => {
    const { id, name, html_url, description, owner } = req.body;

    repositoriesController.addBookmark({
        id,
        name,
        html_url,
        description,
        owner: owner.login
    })

    res.send({ status: "OK" });
});

app.get("/bookmarks", async (req, res) => {
    const bookmarks = repositoriesController.fetchBookmarks();

    res.send(bookmarks);
});

app.delete("/bookmarks/:id", async (req, res) => {
    const id = parseInt(req.params.id);

    repositoriesController.deleteBookmark(id);

    res.send({ status: "OK" });
});

app.listen(port, () => {
    console.log("Running on port " + port);
});