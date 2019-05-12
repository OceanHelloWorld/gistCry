const express = require('express');

const app = express();

app.get('/api/users', (req, res) => {
  const user = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Ghost', lastName: 'Pepper'},
    {id: 3, firstName: 'Jala', lastName: 'Peno'}    
  ]

  res.json(user);
})

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));