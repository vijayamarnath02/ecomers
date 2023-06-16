const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const connections = require('./Connection/Db');
const Routes = require('./routers/dummy');
const Home = require('./routers/Home');
const sigup = require('./routers/signup');
const sigin = require('./routers/signin');
const Drop = require('./routers/drop');
const cart = require('./routers/add');
const nill = require('./routers/nill')
console.log(nill);
const app = express();
app.use(cors({}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/signupb', sigup);
app.use('/siginb', sigin);
app.use('/signin', Routes);
app.use('/home', Home);
app.use('/drop', Drop);
app.use('/temp', Home);
app.use('/cart', cart);
app.use('/last',nill)

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
