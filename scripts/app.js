const express = require('express')
const app = express()
const port = 3001
const path = require('path');

// var router = require('./scripts/router');
// import router from "./scripts/router";

app.use('/', express.static('./'));
// app.get("/settings",function(req))
// app.use('/', router);
app.get('/settings', (req, res) => {
    res.sendFile(path.join(__dirname, '/components/settings-page.html'));
})


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})