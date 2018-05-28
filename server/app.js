const path = require("path");
const express = require("express");

const app = express();
const staticPath = path.join(__dirname, '..', "public");

app.use(express.static(staticPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(staticPath, 'index.html'))
});

app.listen(3000, () => {
    console.log("listening");
});