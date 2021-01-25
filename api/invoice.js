const firebase = require('../firebase');
const getItems = require('../helpers/getItems');

async function createInvoice(req, res) {
    const { customer_email, invoice_items } = req.body;
    // check req body has email
    if (!customer_email || !invoice_items) {
        return res.status(400).json({ error: 'Missing required session parameters' });
    }

    invoiceItems = getItems(invoice_items);

    try {
        await firebase.firestore.collection('invoices')
        .add({
            email: customer_email,
            items: invoiceItems,
        })
        .then(() => console.log("Invoice stored"))
        .catch(error => console.log(error))
        res.status(200).json({response: 'Invoice successfully sent'})
    } catch (error) {
        res.status(400).json({ error: 'An error occured, unable to create session' })
    }
}

module.exports = createInvoice;

/*
const firebase = require('../firebase');

async function createInvoice(req, res) {
    const { customer_email } = req.body;
    // check req body has email
    if (!customer_email) {
        return res.status(400).json({ error: 'Missing required session parameters' });
    }

    try {
        await firebase.firestore.collection('invoices')
        .add({
            email: customer_email,
            items: [
                {
                    amount: 15000, // $150.00
                    currency: 'cad',
                    description: 'Case Evaluation Feedback',
                },
            ],
        })
        .then(() => console.log("Invoice stored"))
        .catch(error => console.log(error))
        res.status(200).json({ response: 'Success' })
    } catch (error) {
        res.status(400).json({ error: 'An error occured, unable to create session' })
    }
}

module.exports = createInvoice;

*/