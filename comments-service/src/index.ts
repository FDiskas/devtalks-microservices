import path from "path";
import express from "express";


const app = express();


app.get('/', (req, res) => {
    res.send(req)
})


app.listen(3000, () => {
    console.log('Labas 3000')
})

console.log('hello comments-service', path.basename(__filename))