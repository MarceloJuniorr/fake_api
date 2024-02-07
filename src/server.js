import get from './return/get.json' assert { type: "json" }
import post from './return/post.json' assert { type: "json" }

import express from 'express';

const app = express();
const port = 8888

app.get("/*", (req, res) => {
    res.json(get)
});

app.post("/*", (req, res) => {
    res.json(post)
});

app.listen(port);
console.log(`Escutando a porta: ${port}`);
