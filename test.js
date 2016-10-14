var express = require('express');
var superagent = require('superagent');
var cheerio = require('cheerio');
var url = require('url');

var count = 0;
var app = express();

var userUrl = 'https://abcde.xxx.com/jpT/demo/';
var curTime = new Date();
var baseUrl = baseUrl + (curTime.getYear()-100) + '-' + (curTime.getMonth()+1) + '-' + curTime.getDate();

console.log('curUrl=' + curUrl);
console.log('toString=' + curTime.toDateString() );

console.log('TIME:' + curTime.getFullYear() + '-' );


app.get('/', function (req, res, next) {

				superagent.get(baseUrl)
				// superagent.get('https://xxx/jpT/demo/16-10-12/all_runs.html')
				.end(function (err, sres) {

								if (err) {
								console.log('ooooooooooooooo ERR oooooooooooo');
								return next(err);
								}

								var $ = cheerio.load(sres.text);
								var items = [];
								$('#SortableTable tbody tr td a').each(function(i, e) { 
												console.log('----------->>');
												var $ele = $(e);

												// console.log( $ele.html() );
												// console.log( $ele.text() );
												// console.log( $ele.attr('href') );
												// console.log( $ele.parent().text() );

												// make new URL addr
												var href = url.resolve(cnodeUrl, $element.attr('href'));

												// var url_all = 'https://abcde.xxx.com/jpT/demo/16-10-12/' + $ele.attr('href');

												// push to item list
												items.push ({
number: i,
// tabfs:  '<br>0x13\r\n0x12',
address:  $ele.attr('href'),
// tabfs2:  '<br>',
url: url_all
});
});

res.send(items);
console.log('------------ End()-----------');
// res.send('----------- OUTPUT ---------- ');
});

// res.send('Done');
});


app.listen(3000, function(req,res){

				console.log('------------ Start-----------');

				})


