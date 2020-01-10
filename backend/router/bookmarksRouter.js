const express = require('express');
const router = express.Router();
const axios = require("axios");

const repositoriesController = require("../utils/repositoriesController");

router.post("/:id", async (req, res) => {
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

    res.status(200).send({ status: "OK" });
});

router.get("", async (req, res) => {
    const bookmarks = repositoriesController.fetchBookmarks();

    res.status(200).send(bookmarks);
});

router.delete("/:id", async (req, res) => {
    const id = parseInt(req.params.id);

    const bookmarks = repositoriesController.deleteBookmark(id);

    res.status(200).send(bookmarks);
});


module.exports = router;