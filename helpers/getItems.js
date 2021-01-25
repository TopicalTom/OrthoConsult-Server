function getItems(invoice_items) {

    const { caseType, cephalometric } = invoice_items;
    const price = caseType === "New Case" ? 15000 : 10000;
    
    if (cephalometric) {
        return [
            {
                amount: price, // $150.00 or $100.00
                currency: 'cad',
                description: `${caseType} Evaluation`,
            },
            {
                amount: 5000, // $50.00
                currency: 'cad',
                description: 'Cephalometric',
            }
        ]
    } else {
        return [
            {
                amount: price, // $150.00 or $100.00
                currency: 'cad',
                description: `${caseType} Evaluation`,
            }
        ]
    }
}

module.exports = getItems;