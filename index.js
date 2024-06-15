const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('port', process.env.PORT || 5000);
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.post('/submit', async (req, res) => {
   console.log(req.body);
   res.redirect('/');
});
app.listen(app.get('port'), () => {
    console.log(`Listening on port `+app.get('port'));
  });