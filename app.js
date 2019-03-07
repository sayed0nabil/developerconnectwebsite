
// NPM Packages
const express = require('express'),
      mongoose = require('mongoose');
// Routes
const users   = require('./routes/api/users'),
      profile = require('./routes/api/profile'),
      posts   = require('./routes/api/posts');
// Default Settings
const app = express(),
      port  = process.env.PORT || 4000,
      mongodbURI = 'mongodb+srv://seko:seko@cluster0-qiptm.mongodb.net/test?retryWrites=true';
mongoose
    .connect(mongodbURI, { useNewUrlParser: true })
    .then(() => console.log('Mongodb connected'))
    .catch(err => console.log(err));
app.get('/', (req, res) => res.send("Main Page"));
// Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);
app.listen(port, () => console.log(`listening on port ${port}`));