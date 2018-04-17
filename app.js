const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('lifeclock'));

const router = require('./routes/routes.js');
app.use(router);

app.listen(PORT, function(){ console.log(`Express listening on port ${PORT}`); });
