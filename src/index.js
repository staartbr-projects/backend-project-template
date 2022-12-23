const express = require('express');

const app = express();
app.use(express.json());

app.get('/', (_, res) => {
  return res.json({
    message: 'Staart API'
  })
});

app.listen(3333, () => {
  console.log('API executando na porta 3333!')
});