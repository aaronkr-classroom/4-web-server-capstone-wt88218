// utils.js
"use strict";

// Listing 7.5 p. 123
const fs = require('fs'),
    httpStatus = require('http-status-codes'),
    contentTypes = require('./content-types');

module.exports = {
    getFile: (file_path, res) => {
        fs.readFile(`./${file_path}`, (error, data) => {
            if (error) {
                res.writeHead(
                    httpStatus.INTERNAL_SERVER_ERROR,
                    contentTypes.html
                );
                res.end("<h1>500</h1><h2>Server Error.</h2>");
            }
            res.end(data);
        });
    }
}