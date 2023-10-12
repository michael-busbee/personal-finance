const express = require('express');

const app = express();
const PORT = process.env.PORT || 4001;

const Envelopes = {
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

app.get('/Envelopes', (req, res, next) => {
    const message = `${JSON.stringify(envelopes)}`;
    res.send(message);
});

app.get('/Envelopes/:envelopeName', (req, res, next) => {
    const envelopeName = req.params.envelopeName;
    if(!Envelopes[envelopeName]){
        res.send("Envelope not found! Please check your spelling and try again.")
    }
    const message = `<h1>${envelopeName}</h1>\nBalance: ${Envelopes[envelopeName].Balance}`;
    res.send(message);
});

app.post('/Envelopes/:envelopeName/', (req, res, next) => {
    const debit = req.query.Debit;
    const envelopeName = req.params.envelopeName;
    const originalBalance = Envelopes[envelopeName].Balance;
    Envelopes[envelopeName].Balance -= debit;
    const message = `<h1>${envelopeName}</h1>\nOriginal Balance: ${originalBalance}\nAmount Debited: ${debit}\nNew Balance: ${Envelopes[envelopeName].Balance}\n`;
    res.send(message);
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});