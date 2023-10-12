# personal-finance

## About

This app uses the envelope budgeting system to keep track of your personal finances based on specific categories. This investopedia link explains how the system works: https://www.investopedia.com/envelope-budgeting-system-5208026. 

## Usage

### Accessing Page
Port: 4002

### Get Current Envelopes

GET endpoint `/Envelopes` to view all envelopes loaded into the budget.

### Get Current Balance of Specific Envelope

GET endpoint `/Envelopes/:envelopeName` for example: `/Envelopes/Groceries` to view the current balance of the `Groceries` envelope.

### Subtract an amount from an Envelope Balance

POST endpoint `/Envelopes/:envelopeName/Debit` for example: `/Envelopes/Groceries/Debit?Amount=<NUMBER>` to subtract `<NUMBER>` from the Envelope Balance.

### Transfer Balance from one Envelope to Another

POST endpoint `/Envelopes/Transfer/:From/:To` for example: `/Envelopes/Transfer/Groceries/Housing?Amount=<NUMBER>` to transfer `<NUMBER>` from `Groceries` to `Housing`.

### Delete an Envelope

DELETE endpoint `/Envelopes/:envelopeName/Delete` for example: `/Envelopes/Groceries/Delete` to delete the `Groceries` Envelope from the list of Envelopes.


