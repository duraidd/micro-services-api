const express = require('express');
const app = express();
app.use(express.json());

app.get('/orders', (req, res) => {
  res.send('List of orders');
});

app.listen(3002, () => console.log('Orders Service running on port 3002'));