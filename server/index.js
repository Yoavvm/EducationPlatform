const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', require('./routes/users'));


app.listen(3001, () => console.log("listening on port 3001"));