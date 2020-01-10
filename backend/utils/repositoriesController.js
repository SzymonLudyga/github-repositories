const fs = require('fs');
const path = require('path');

const fetchBookmarks = () => {
    try {
        const bookmarks = fs.readFileSync(
            path.join(__dirname,
                process.env.NODE_ENV === 'test'
                    ? '../data/repositories-test.json'
                    : '../data/repositories.json')
        );
        return JSON.parse(bookmarks);
    } catch (e) {
        return [];
    }
};

const addBookmark = (bookmark) => {
    const data = fetchBookmarks();
    if (data.some((el) => el.id === bookmark.id)) {
        throw new Error('duplicate');
    }
    data.push(bookmark);
    fs.writeFileSync(
        path.join(__dirname,
            process.env.NODE_ENV === 'test'
                ? '../data/repositories-test.json'
                : '../data/repositories.json'),
        JSON.stringify(data)
    );
};

const deleteBookmark = (id) => {
    const data = fetchBookmarks();
    const newData = data.filter((bookmark) => bookmark.id !== id);
    fs.writeFileSync(
        path.join(__dirname,
            process.env.NODE_ENV === 'test'
                ? '../data/repositories-test.json'
                : '../data/repositories.json'),
        JSON.stringify(newData)
    );
    return newData;
};


module.exports = {
    fetchBookmarks,
    addBookmark,
    deleteBookmark,
};
