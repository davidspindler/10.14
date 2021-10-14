const express = require("express");
const app = express();
const PORT = 3001

app.use(express.static('src'));
app.get("/", (req, res) => {
    res.json("recieved")
});
app.listen(PORT, () =>
console.log(`Example app listening at http://localhost:${PORT}`))