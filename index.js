const express = require('express');
const bodyParser = require('body-parser');
require('./db_schema/initialize_db');
const router = require('./routes');
const authRouter = require('./routes/auth');
const authIntercept = require('./middlewares/authIntercept');

const app = express();

app.use(bodyParser.json());
app.use('/auth',authRouter);
app.use('/api',authIntercept,router);


const PORT = process.env.PORT || 5000;
app.listen(PORT);