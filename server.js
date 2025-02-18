const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/contact', (req, res) => {
    const { name, message } = req.body;
    console.log('Received Message:', name, message);
    res.json({ message: 'Message received successfully!' });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(Server running on http://localhost:${PORT});
});
