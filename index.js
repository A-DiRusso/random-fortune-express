//require express
const express = require('express');
const app = express();
const port = 3000;
const fortune = 'http://yerkee.com/api/fortune';

app.get('/', (req, res) => {
    const axios = require('axios');
    axios.get(fortune)
        .then(response => {
            console.log(response.data.fortune);
            res.send(response.data.fortune);
        })
        .catch(error => {
            console.log(error);
        });
})




app.listen(port, () => {
    console.log(`Your express app is running as ${port}`);
})



