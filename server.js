const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const auth = require('./routes/api/auth');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');
const tokens = require('./routes/api/tokens');

const app = express();

//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

//Connect to MongoDB
mongoose
	.connect(db, {useNewUrlParser: true})
	.then(() => console.log('MongoDB Connected'))
	.catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

app.get('/', (req,res) => res.send('Hello'));

//User Routes

app.use('/api/auth', auth);
app.use('/api/profile', profile); 
app.use('/api/posts', posts);
app.use('/api', tokens)  

const port = process.env.PORT || 5000; 

app.listen(port, () => console.log(`Server running on port ${port}`));