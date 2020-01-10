const express = require('express');

const router = express.Router();
const axios = require('axios');

const repositoriesController = require('../utils/repositoriesController');

router.post('/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const response = await axios({
            method: 'get',
            url: `https://api.github.com/repositories/${id}`,
            responseType: 'json'
        });
        const {
            name, html_url, description, owner
        } = response.data;

        repositoriesController.addBookmark({
            id,
            name,
            html_url,
            description,
            owner: owner.login
        });

        res.status(200).send({ status: 'OK' });
    } catch (e) {
        if (e.message === 'duplicate') {
            res.status(409).send({ error: 'Repository already bookmarked' });
        }
        res.status(500).send({ error: e.message });
    }
});

router.get('', async (req, res) => {
    try {
        const bookmarks = repositoriesController.fetchBookmarks();
        res.status(200).send(bookmarks);
    } catch (e) {
        res.status(500).send({ error: e.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const bookmarks = repositoriesController.deleteBookmark(id);
        res.status(200).send(bookmarks);
    } catch (e) {
        res.status(500).send({ error: e.message });
    }
});


module.exports = router;
