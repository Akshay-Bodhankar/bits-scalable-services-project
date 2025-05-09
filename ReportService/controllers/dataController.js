const { generateCSV, generatePDF, generateXLS } = require('../exports/fileGenerator');

const data = require('../data/sampleData.json'); // Assume this is your data source

exports.getData = (req, res) => {
  let filtered = data;

  // Example filtering logic
  if (req.query.category) {
    filtered = filtered.filter(item => item.category === req.query.category);
  }

  // Pagination
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const start = (page - 1) * limit;
  const paginated = filtered.slice(start, start + limit);

  res.json({
    total: filtered.length,
    page,
    data: paginated
  });
};

exports.exportData = async (req, res) => {
  const format = req.params.format.toLowerCase();
  let fileBuffer, fileType;

  try {
    switch (format) {
      case 'csv':
        fileBuffer = generateCSV(data);
        fileType = 'text/csv';
        break;
      case 'pdf':
        fileBuffer = await generatePDF(data);
        fileType = 'application/pdf';
        break;
      case 'xls':
        fileBuffer = generateXLS(data);
        fileType = 'application/vnd.ms-excel';
        break;
      default:
        return res.status(400).send('Invalid format');
    }

    res.setHeader('Content-Type', fileType);
    res.setHeader('Content-Disposition', `attachment; filename=data.${format}`);
    res.send(fileBuffer);
  } catch (err) {
    res.status(500).send('Export failed');
  }
};
