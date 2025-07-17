const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const User = require('./model/user.js')

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('');

app.get('/get')