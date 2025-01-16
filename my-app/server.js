const express = require('express');
const { logger } = require('./middleware/logEvents');
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler');
const corsOptions = require('./config/corsOptions');
const cookieParser = require('cookie-parser');
const credentials = require('./middleware/credentials');
const app = express();

const PORT = process.env.PORT;
const path = require('path');

// custom middleware logger
app.use(logger);

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
app.use(credentials);

// CROSS ORIGIN RESOURCE SHARING
app.use(cors(corsOptions));

// middleware
app.use(express.json())

// middleware for cookies
app.use(cookieParser());

// routes
app.use('/', require('./routes/root'));
// app.use('/shutdown', require('./routes/shutdown'));
app.use('/create-template', require('./routes/createTemplate'));
app.use('/get-templates', require('./routes/getTemplates'));

// custom error handling
app.use(errorHandler);

// start listening to PORT
app.listen(PORT, () => {
    console.log('Server running on http://localhost:${PORT}');
})