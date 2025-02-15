const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  // Missing error handling if user object is malformed or missing
  db.createUser(user) // Assume db.createUser is an asynchronous function
    .then(() => res.status(201).send())
    .catch(err => {
      console.error(err); // Logs the error but doesn't send a response
    });
});

app.listen(3000, () => console.log('Server listening on port 3000'));