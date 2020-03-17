const readJSON = require("./readJSON");
const downloadPage = require('./dowloadPage');
const fs = require("fs-extra");
const process = require('process');
const date = new Date();

const rule = {
    "https://viblo.asia/" : "https://viblo.asia/newest?page=",
    "https://itviec.com/" : "https://itviec.com/blog/page/"
}

const root = JSON.parse(fs.readFileSync('./link.json', 'utf8'));


var linkPage = readJSON.saveDownloadPage(root, rule, date);
var download = downloadPage.page(process.argv[2], linkPage, root, date);