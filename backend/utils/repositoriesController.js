const fs = require("fs");
const path = require("path");

const fetchBookmarks = () => {
    try {
        let postString = fs.readFileSync(
            path.join(__dirname, "../data/repositories.json")
        );
        return JSON.parse(postString);
    } catch (e) {
        return [];
    }
};

const addBookmark = bookmark => {
    let data = fetchBookmarks();
    data.push(bookmark);
    fs.writeFileSync(
        path.join(__dirname, "../data/repositories.json"),
        JSON.stringify(data)
    );
};

const deleteBookmark = id => {
    const data = fetchBookmarks();
    const newData = data.filter(bookmark => bookmark.id !== id);
    fs.writeFileSync(
        path.join(__dirname, "../data/repositories.json"),
        JSON.stringify(newData)
    );
};


module.exports = {
    fetchBookmarks,
    addBookmark,
    deleteBookmark,
};