const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const User = require('./model/user.js')
require('dotenv').config();

const app = express();
app.use(express.json());

app.use(cors({
    origin: [ "http://localhost:5173" ],
    credentials: true
}));

mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.get('/get', (req, res) => {
    User.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})


app.listen(3000, () => {
    console.log("Server is started on port 3000");
});
