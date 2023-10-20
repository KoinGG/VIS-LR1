
const express = require('express');

const app = express();
const PORT = process.env.PORT || 4000;

app.get( '/', (req, res) => 
{
    res.status(200);
    res.send("Hello World from Stepanov M. T.")
});

app.listen(PORT, () => console.log(`App listening on port ${PORT} `));