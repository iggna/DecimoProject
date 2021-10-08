const express = require('express');
const path = require('path');
const images = require('./static/images')
const cors = require('cors')
require('dotenv').config()

const app = express();
app.use(cors())

app.get('/images', (req, res) => res.json({data: images, count: images.length}))

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log(`App running on port: ${PORT}`));