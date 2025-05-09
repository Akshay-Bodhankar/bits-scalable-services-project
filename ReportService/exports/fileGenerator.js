const { Parser } = require('json2csv');
const PDFDocument = require('pdfkit');
const ExcelJS = require('exceljs');
const stream = require('stream');

exports.generateCSV = (data) => {
  const parser = new Parser();
  return parser.parse(data);
};

exports.generatePDF = (data) => {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument();
    const buffers = [];

    doc.on('data', buffers.push.bind(buffers));
    doc.on('end', () => {
      const pdfData = Buffer.concat(buffers);
      resolve(pdfData);
    });

    data.forEach((item, index) => {
      doc.text(`${index + 1}. ${JSON.stringify(item)}`);
    });

    doc.end();
  });
};

exports.generateXLS = (data) => {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Data');

  worksheet.columns = Object.keys(data[0]).map(key => ({ header: key, key }));

  data.forEach(item => worksheet.addRow(item));

  return workbook.xlsx.writeBuffer();
};
