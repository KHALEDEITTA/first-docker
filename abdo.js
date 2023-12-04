const express = require('express');
const app = express();
const port = 3000; // You can choose a different port

// Define a route to print "Abdelhamid Salah"
app.get('/printName', (req, res) => {
  res.send('khaled said eita');
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
