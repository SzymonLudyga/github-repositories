const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const cors = require('cors');

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const port = 8000;

const repositories = require('./router/repositoriesRouter');
const bookmarks = require('./router/bookmarksRouter');

app.use('/repositories', repositories);
app.use('/bookmarks', bookmarks);

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});
