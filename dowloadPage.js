var request = require("request");
var util = require("util");
var fs = require('fs-extra');

exports.page = (n, linkPage, linkroot, date) => {
    let j = -1;
    linkPage.map(async(x) => {
        j++;
        let dir = `${__dirname}/${date.getFullYear()}_${date.getMonth()}_${date.getDate()}/${linkroot[j].substr(8)}`;
        console.log(dir);
        for (let i = 1; i <= n; i++){
            let respone = await util.promisify(request)(x+i);
            fs.createWriteStream(`${dir}page${i}.html`).write(respone.body);
        };      
    })
}


