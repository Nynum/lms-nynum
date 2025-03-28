const sendTelegramMessage = require('../utils/telegram');

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);

  const msg = `⚠️ *SYSTEM ERROR*\n\n*Message:* ${err.message}\n*Path:* ${req.path}`;
  sendTelegramMessage(msg);

  res.status(500).json({ error: 'Internal server error' });
};

module.exports = errorHandler;
