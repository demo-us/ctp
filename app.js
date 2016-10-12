var express = require('express');
var superagent = require('superagent');
var cheerio = require('cheerio');


var app = express();
app.get('/', function (req, res, next) {
		// 用 superagent 去抓取 https://cnodejs.org/ 的内容
		superagent.get('http://tuijian.hao123.com/?type=military')
		.end(function (err, sres) {
				// 常规的错误处理
				if (err) {
				return next(err);
				}
				var $ = cheerio.load(sres.text);
				var items = [];
				$('div.s-mr >ul >li.even >a').each(function (idx, element) {
					//OK-Get-3-li => $('#erji-v2-header #tuijian div.s-mr >ul >li').each(function (idx, element) {
					//$('#topic_list .topic_title').each(function (idx, element) {
					console.log('>>>>>>>');
					var $element = $(element);
					items.push({
number: idx + '<br>',
// number: $element.attr('target'),
href: $element.attr('href')+'\n'
});
});

console.log('over');
// NG - res.send('<html><head>ABC</title><head><body>');
res.send(items);
// NG -res.sendbody('</body></html>');
});
						});


app.listen(3000, function(req,res){

		console.log('------------ Get One Request -----------');

		})
