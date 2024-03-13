import get from './return/get.json' assert { type: "json" }
import post from './return/post.json' assert { type: "json" }
import put from './return/put.json' assert { type: "json" }

import dotenv from 'dotenv'
dotenv.config();

import express from 'express';

const app = express();
const port = process.env.PORT || 8888 ;
const getStatusCode = process.env.GET_STATUS_CODE || 200 ;
const postStatusCode = process.env.POST_STATUS_CODE || 200 ;
const putStatusCode = process.env.PUT_STATUS_CODE ? parseInt( process.env.PUT_STATUS_CODE )  : 200 ;



app.get("/*", (req, res) => {
    console.log('GET: ', req.url);
    res.status(200).json(get || "")
});

app.post("/*", (req, res) => {
    console.log('POST: ', req.url);
    res.status(200).json(post || "")
});

app.put ("/*", (req, res) => {
    console.log('PUT: ', req.url);
    res.status( putStatusCode ).send(put || "")
});

app.listen(port);
console.log(`Escutando a porta: ${port}`);
