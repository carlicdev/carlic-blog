const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('morgan');
const multer = require('multer');
const bodyParser = require('body-parser');
const app = express();

// Database
require('./db/db');

// Routers
const postRouter = require('./routes/posts');

// Settings
app.set('PORT', process.env.PORT || 5000);

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit: 50000}))
app.use(multer({dest: path.join(__dirname, '../client/src/images/temp')}).single('file'));


// Serve React static files
app.use(express.static(path.join(__dirname, './client/build')));

// Api
app.use('/api/posts', postRouter);

// Session

// Passport

// Start server
app.listen(app.get('PORT'), () => {
    console.log(`Server listening on PORT: ${app.get('PORT')}`);
});