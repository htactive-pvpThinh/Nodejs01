
const fs = require("fs-extra");

exports.saveDownloadPage = (root, rule, date) => {
    const downloadPage = root.map(x => {
        //create path
        fs.ensureDir(`${__dirname}/${date.getFullYear()}_${date.getMonth()}_${date.getDate()}/${x.substr(8)}`)
        .then(() => {
        })
        .catch(err => {
            console.error(err)
        });
        return rule[x];
    }); 
    console.log('success');
    return downloadPage
}




