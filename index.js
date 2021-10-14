const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(express.static('src'));
app.get("/", (req, res) => {
    res.json("recieved")
});
app.listen(PORT, () =>
console.log(`Example app listening at http://localhost:${PORT}`))

