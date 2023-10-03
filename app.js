const express = require('express');

const app = express();
const PORT = process.env.PORT || 4001;

app.get('/', (req, res, next) => {
    res.send("Hello World!");
});

app.listen(PORT, () => {
	console.log(`Server is listening on port ${PORT}`);
});