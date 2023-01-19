const express = require('express');
const connectDB = require("./config/db"); 
const app = express();
const PORT = process.env.PORT || 5000

//connect to DB 
connectDB();

//initialize middleware
//we used to have to install body parser, but now it is built-in middleware
//function of express! It parses incoming JSON payloads
app.use(express.json({ extended : false }));


app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/users',require('./routes/api/users'));

app.listen(PORT, ()=> console.log(`server start on PORT ${PORT}`));

