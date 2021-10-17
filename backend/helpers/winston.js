const winston = require('winston');

const { format } = winston;
const {
  combine, label, timestamp, printf,
} = format;
const appRoot = require('path');

winston.loggers.add('app', {
  format: combine(
    timestamp(),
    label({ label: 'APP' }),
    printf((info) => `${info.label} ${info.level.toUpperCase()} ${info.timestamp} ${info.message}`),
  ),
  transports: [
    new winston.transports.Console({ level: 'info' }),
    new winston.transports.File({
      maxsize: 1024 * 1024 * 10,
      maxFiles: 3,
      level: 'info',
      filename: `${appRoot.resolve('./')}/logs/application.log`,
      datePattern: 'YYYY-MM-DD',
    }),
  ],
});

module.exports = winston;
