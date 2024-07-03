const express = require('express');
const http = require('http'); 
const mongoose = require('mongoose');

const app = express();
const server = http.createServer(app);

const url = 'mongodb+srv://hgkhairnar255:v8gZAWjRHyH152Ly@cluster0.0pr75rq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

mongoose.connect(url, {}).then(() => {
    console.log('db connected')
});
const PORT = 5000;
server.listen(PORT, () => {
    console.log(`server is running at ${PORT}`);
});