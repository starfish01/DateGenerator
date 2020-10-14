const http = require('http');
const moment = require('moment');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
  moment.locale('en-au'); 
  const startDate = moment('2021-01-08');

  const dates = [];
  dates.push(startDate.format('L'));

  let currentDay = startDate.add(14,'days');

  dates.push(currentDay.format('L'));

  for (i = 0; i < 26; i++) {
    currentDay = currentDay.add(14,'days');
    dates.push(currentDay.format('L'));
  }
  console.log(dates);
});