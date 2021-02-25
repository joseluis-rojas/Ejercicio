//El siguiente código es un ejemplo de servidor web escrito en Node.js.

const http = require('http');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const hostname = '127.0.0.1';
const port = 3000;

const app = express();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
})

app.post('/calcnum', (req, res) => {
    let num = parseInt(req.body.num);
    let wholenums = [];
    for(let i = num ; i > 1 ; i--) {
        let nums = [];
        for(let j = i-1 ; j > 0 ; j--) {
            if(i % j == 0) {
                nums.push(i);
            }
        }
        if(nums.length == 1) {
            wholenums.push(i);
        }
    }
    wholenums.push(1);
    res.send({data: wholenums});
})


const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});