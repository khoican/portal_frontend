const button = document.querySelectorAll('.generate');
const html2pdf = require('html2pdf');
const puppeteer = require('puppeteer');
const report = require('./../assets/report.html');
const html = require('html');

function click() {
    button.addEventListener('click', generatePdf());
}

function generatePdf() {
    html2pdf().from(report).save();
}

(async function() {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.setContent(report);
        await page.pdf({ path: 'report.pdf', format: 'A4' });
        await browser.close();
    } catch (error) {
        console.log(error);
    }
})();

html.createServer(async (req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/pdf' });
     const browser = await puppeteer.launch();
     const page = await browser.newPage();

     await page.goto('http://localhost:4000/report');
     
     const buffer = await page.pdf({ format: 'A4' });

     await browser.close();
     res.end(buffer);
}).listen(4000);