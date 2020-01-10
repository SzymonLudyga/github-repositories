const express = require('express');
const router = express.Router();
const axios = require("axios");

router.get("", async (req, res) => {
    const query = req.query.q;
    try {
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
    
        res.status(200).send({ details: responseData });
    } catch (e) {
        res.status(500).send({ error: e.message });
    }
    
});


module.exports = router;