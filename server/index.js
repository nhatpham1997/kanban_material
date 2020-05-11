const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
//Import Routes
const authRoute = require('./src/api/auth/route');
const boardsRoute = require('./src/api/board/route');


dotenv.config();

//Connect to DB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log('connected to db!')
);

//Middleware
app.use(express.json());


//Route Middlewares
app.use('/api/user', authRoute);
app.use('/api/board', boardsRoute);

app.listen(process.env.PORT, () => {
  console.log('Server listening on port', process.env.PORT);
});

