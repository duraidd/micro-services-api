const express = require('express');
const app = express();
app.use(express.json());

app.get('/auth/login', (req, res) => {
  res.send('User logged in!');
});

app.listen(3001, () => console.log('Auth Service running on port 3001'));