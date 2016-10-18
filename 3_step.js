var express = require('express');
var superagent = require('superagent');
var cheerio = require('cheerio');
var url = require('url');

var count = 0;
var app = express();
var items = [];

var userUrl = 'https://abcde.xxx.se/jpT/demo/';
var curTime = new Date();
var yr = curTime.getYear()-100;
var mon = curTime.getMonth()+1;
var dy;
if( curTime.getDate() < 10 ){
		dy = '0' + curTime.getDate();
}else {
		dy = curTime.getDate();
}
var baseUrl = 'http://topdemo.xyz';
// var baseUrl = userUrl+yr+'-'+mon+'-'+dy+'/all_runs.html';

// setting baseUrl = 1st URL
var baseUrl1 = 'http://topdemo.xyz/index.html';
var baseUrl2 = 'http://topdemo.xyz/1.html';
var baseUrl3 = 'http://topdemo.xyz/2.html';
var baseUrl4 = 'http://topdemo.xyz/3.html';


console.log('baseUrl=' + baseUrl);
console.log('toString=' + curTime.toDateString() );

console.log('TIME:' + curTime.getFullYear() + '-' );


app.get('/', function (req, res, next) {

				superagent.get(baseUrl1)
				// superagent.get('https://abcde.xxx.se/jpT/demo/16-10-12/all_runs.html')
				.end(function (err, sres) {
								if (err) {
								console.log('=============== ERR 1st Get============');
								return ;
								}

								var $ = cheerio.load(sres.text);
								// move to start define - var items = [];
								$('div.content div.alert div.content a').each(function(i, e) { 
												console.log('---------->');
												var $ele = $(e);

												// console.log( $ele.html() );
												console.log( $ele.text() );
												console.log( $ele.attr('href') );
												// console.log( $ele.parent().text() );

												// make new URL addr
												var newhref = url.resolve(baseUrl, $ele.attr('href'));
												// var url_all = 'https://abcde.xxx.se/jpT/demo/16-10-12/' + $ele.attr('href');
												// push to item list
												items.push ({
number: i,
// none effective format tabfs:  '<br>0x13\r\n0x12',
// address:  newhref, 
addr:  $ele.attr('href'),
addrall: newhref
});
												// console.log('----start call fred()------');
												// console.log('----after call fred()---- return url2=' + url2);
});




res.send(items);
console.log('------------ End()-----------');

});
// res.send('Done');
});


function fred(getUrl) {
		// ############## Start -2nd HTTP Get 
		count++;
		if(count == 3 ){
				return ;
		}

		var newhref2 = '';
		superagent.get(getUrl)
				// superagent.get('https://abcde.xxx.se/jpT/demo/16-10-12/all_runs.html')
				.end(function (err, sres) {
								if (err) {
								console.log('ooooooooooooooo ERR oooooooooooo');
								return ;
								}
								// start 
								var $ = cheerio.load(sres.text);
								console.log('Entering fred() --- count:' + count);

								$('#SortableTable tbody tr td a').each(function(i, e) { 
												console.log('==========================================');
												console.log('select one');
												var $ele2 = $(e);
												// make new URL addr
												newhref2 = url.resolve(baseUrl, $ele2.attr('href'));
												// console.log('2nd URL--->' + newhref2);

												});

								if(newhref2.length != 0){
								console.log('newhref2 length != 0' + newhref2 );
								console.log('==========================================');
								fred(newhref2);
								//return newhref2;
								}else {
										console.log('newhref2 length == 0  Final Over');
										//return 'none url got so far';
								};

				})
}

app.listen(3000, function(req,res){

				console.log('------------ Start-----------');

				})


