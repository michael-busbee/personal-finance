const express = require('express');

const app = express();
const PORT = process.env.PORT || 4001;

const envelopes = {
    Housing: {
        Balance: 1200,
    },
    Utilities: {
        Balance: 400,
    },
    Groceries: {
        Balance: 400
    }
};

app.get('/envelopes', (req, res, next) => {
    const message = `${JSON.stringify(envelopes)}`;
    res.send(message);
});

app.get('/envelopes/:envelopeName', (req, res, next) => {
    const envelopeName = req.params.envelopeName;
    if(!envelopes[envelopeName]){
        res.send("Envelope not found! Please check your spelling and try again.")
    }
    const message = `${envelopeName}: ${envelopes[envelopeName].Balance}`;
    res.send(message);
});

app.post('/envelopes/:envelopeName/:debit', (req, res, next) => {
    const debit = req.params.debit;
    const envelopeName = req.params.envelopeName;
    const message = `${envelopeName}: ${debit}`;
    res.send(message);
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});