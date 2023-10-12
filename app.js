const express = require('express');

const app = express();
const PORT = process.env.PORT || 4002;

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

app.get('/', (req, res, next) => {
    res.redirect('/Envelopes');
});

app.get('/Envelopes', (req, res, next) => {
    const message = `${JSON.stringify(Envelopes)}`;
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
    const message = `<h1>${envelopeName}</h1>\n<p>Original Balance: ${originalBalance}\nAmount Debited: ${debit}\nNew Balance: ${Envelopes[envelopeName].Balance}\n</p>`;
    if (Envelopes[envelopeName].Balance < 0) {
        res.send("This Envelope is empty! Please add more to the budget or reconsider purchase.");
    }
    res.send(message);
});

app.delete('/Envelopes/:envelopeName/Delete', (req, res, next) => {
    const envelopeName = req.params.envelopeName;
    if (Envelopes[envelopeName]){
        delete Envelopes[envelopeName];
        res.send("Envelope Deleted");
    } else {
        const message = `Envelope ${envelopeName} does not exist!`;
        res.send(message);
    }
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});