const { start } = require('n8n');

module.exports = async (req, res) => {
  try {
    await start();
    res.status(200).json({ message: 'n8n started' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
