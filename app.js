/** @format */

// import express from "express";
const express = require('express');

const app = express();
const PORT = 3000 || process.env.PORT;

app.listen(PORT, () => console.log(`Server is running on: http://localhost:${PORT}`));

app.get('/', (req, res) => res.send('Hello, It\'s working! ..')); 