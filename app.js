const fs = require("fs");
const request = require("request");
const cheerio = require("cheerio");
const yargs = require("yargs");

var argv = yargs.argv;

var n = argv.n;
console.log(n);
//'https://viblo.asia/newest'

request('https://itviec.com/blog/', (error, 
response, html) => {
    if (!error && response.statusCode == 200){
        const $ = cheerio.load(html, { decodeEntities: false });

        const section_widget_text = $('.section');
        let j = 1;
        $('.post').each((i, el) => {
            if (j < n) {
            const cats = $(el)
            .find('.cats')
            .html()
            .replace(/\s\s + /g, '');

            const title = $(el)
            .find('.title')
            .html()
            .replace(/\s\s + /g, '');

            const postmeta = $(el)
            .find('.postmeta')
            .html()
            .replace(/\s\s + /g, '');

            const content = $(el)
            .find('.content')
            .html()
            .replace(/\s\s + /g, '');

            const clear = $(el)
            .find('.clear')
            .html()
            .replace(/\s\s + /g, '');
            var writeStream = fs.createWriteStream(__dirname + '/2020_03_24/itviec.com/blog' + '/page' + j + '.html');
            writeStream.write(cats + '\n' + title + '\n' + content + '\n' + clear + '\n');
            //console.log(title);
            }
            j++;
        });
        
    }
});

request('https://viblo.asia/newest', (error, 
response, html) => {
    if (!error && response.statusCode == 200){
        const $ = cheerio.load(html, { decodeEntities: false });
        let j = 1;

        $('.post-feed-item').each((i, el) => {
            if (j <= n){
            const post_feed_item__info = $(el)
            .find('.post-feed-item__info')
            .html()
            .replace(/\s\s + /g, '');

            var writeStream = fs.createWriteStream(__dirname + '/2020_03_24/viblo.asia' + '/page' + j + '.html');
            writeStream.write(post_feed_item__info + '\n');
            //console.log(post_feed_item__info);
            }
            j++;
        });
        
    }
});

