const express = require('express');
const app = express();
const api=require("./server/api");
const path=require("path");
const port = 5000;

app.use("/api",api);    

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
    console.log(`listening on ${port}`);
})