const express = require('express');
const usersRouter = require('./routes/users');

const app = express();
app.use(express.json());

app.get('/health', (req, res) => res.json({ status: 'ok' }));
app.use('/api/users', usersRouter);

if (require.main === module) {
  app.listen(3000, () => console.log('Server listening on port 3000'));
}

module.exports = app;
