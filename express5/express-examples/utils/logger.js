
const winston = require('winston');
 
winston.add(
  winston.transports.File, {
    filename: '/Users/amit/Documents/logs/apps.log',
    level: 'debug',
    json: true,
    //eol: 'rn', // for Windows, or `eol: ‘n’,` for *NIX OSs
    timestamp: true
  }
)
 console.log("Logger Run....");
winston.log('debug', 'Hello log files!');
module.exports = winston;