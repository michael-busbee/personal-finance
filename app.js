const express = require('express');

const app = express();
const PORT = process.env.PORT || 4001;

const envelopes = {

    Housing: 1200,
    Utilities: 210,
    Groceries: 400,
    Gas: 60,

};

app.get('/envelopes', (req, res, next) => {
    const message = `${JSON.stringify(envelopes)}`;
    res.send(message);
});

app.get('/envelopes/:envelopeName', (req, res, next) => {
    const envelopeName = req.params.envelopeName;
    const message = `${envelopeName}: ${envelopes[envelopeName]}`;
    res.send(message);
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});