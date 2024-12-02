const PDFDocument = require('pdfkit');
const fs = require('fs');

function generateInvoice(invoiceData){
    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream('./invoice.pdf'));
    doc.text(`Invoice for Driver ID: ${invoiceData.driverId}`, {align:'center'});
    doc.text(`Total Earnings: $${invoiceData.totalEarnings}`,{align:'center'});
    doc.end();
    console.log('Invoice generated');
}

generateInvoice({driverId:'75439438', totalEarnings:100.75})