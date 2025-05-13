const express = require('express');
const app = express();
app.use(express.json());

app.get('/payments', (req, res) => {
  res.send('Payment processed');
});

app.listen(3003, () => console.log('Payments Service running on port 3003'));