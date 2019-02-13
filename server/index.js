const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const logger = require('morgan');
const app = express();
const helmet = require('helmet');
const { connect } = require('./model');
const postsRoutes = require('./routes/posts');
const commentsRoutes = require('./routes/comments');
const userRoutes = require('./routes/user');

app.use(helmet());

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', userRoutes);
app.use('/posts', postsRoutes);
app.use('/comments', commentsRoutes);

const port = process.env.PORT || 3001;

connect()
  .then(client => {
    console.log('db connected');
    app.listen(port, () =>
      console.log(`server running listening on port ${port}`)
    );
  })
  .catch(console.log);
