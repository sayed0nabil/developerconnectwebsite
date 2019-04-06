
// NPM Packages
const express = require('express'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      cors       = require('cors'),
      passport   = require('passport');
// Routes
const users   = require('./routes/api/users'),
      profile = require('./routes/api/profile'),
      posts   = require('./routes/api/posts');
// Default Settings
const app = express(),
      port  = process.env.PORT || 4000,
    //   mongodbURI = 'mongodb+srv://seko:seko@mernstackfronttoback-qiptm.mongodb.net/test?retryWrites=true';
         mongodbURI = require('./config/keys').localMongoURI;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());
mongoose
    .connect(mongodbURI, { useNewUrlParser: true })
    .then(() => console.log('Mongodb connected'))
    .catch(err => console.log(err));
app.use(passport.initialize());
require('./authentication/passport')(passport);
// Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);
app.listen(port, () => console.log(`listening on port ${port}`));