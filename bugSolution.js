const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  if (!user || !user.name || !user.email) {
    return res.status(400).send({ error: 'Missing user data' });
  }
  db.createUser(user)
    .then(() => res.status(201).send())
    .catch(err => {
      console.error('Error creating user:', err);
      res.status(500).send({ error: 'Failed to create user' });
    });
});

app.listen(3000, () => console.log('Server listening on port 3000'));