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

    const responseData = response.data.items.map(el => {
        const { id, name, html_url, description, owner } = el;
        return {
            id,
            name,
            html_url,
            description,
            owner: owner.login
        };
    });

    res.send({ details: responseData });
});

app.post("/bookmarks/:id", async (req, res) => {
    const id = parseInt(req.params.id);

    const response = await axios({
        method: 'get',
        url: `https://api.github.com/repositories/${id}`,
        responseType: 'json'
    });

    const { name, html_url, description, owner } = response.data;

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

    const bookmarks = repositoriesController.deleteBookmark(id);

    res.send(bookmarks);
});

app.listen(port, () => {
    console.log("Running on port " + port);
});