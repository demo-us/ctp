var express = require('express');
var superagent = require('superagent');
var cheerio = require('cheerio');


var app = express();
app.get('/', function (req, res, next) {
		// superagent.get('http://tuijian.hao123.com/?type=military')
		superagent.get('http://tuijian.hao123.com/?type=military')
		.end(function (err, sres) {
				// 常规的错误处理
				if (err) {
				return next(err);
				}
				var $ = cheerio.load(sres.text);
				var items = [];
				// OK-Get-A list $('div.s-mr >ul >li.even >a').each(function (idx, element) {
						$('#news.section h3.headline a').each(function (idx, element) {
						//OK-Get-3-li => $('#erji-v2-header #tuijian div.s-mr >ul >li').each(function (idx, element) {
						//$('#topic_list .topic_title').each(function (idx, element) {
					console.log('>>>>>>>');
					var $element = $(element);
					items.push({
number: idx + '<br>',
// number: $element.attr('target'),
title: $element.attr('title'),
href: $element.attr('href')+'\n',
text: ($element).text()
// --------------- sample -for-A------------------- 
// data: $element.data(),
// html: ($element).html(),
// [{"number":"0<br>",
// "title":"最高绝密工程震惊世界：才知道于敏多可怕",
// "href":"http://www.top81.com.cn/2016/1013/521083.html?hao123tt\n",
// "data":{},
// "html":"&#x6734;&#x69FF;&#x60E0;&#x5DF2;&#x75AF;&#xFF01;&#x6025;&#x9700;&#x5317;&#x4EAC;&#x4E00;&#x5DF4;&#x638C;&#x6253;&#x9192;&#x5979;",
// "text":"朴槿惠已疯！急需北京一巴掌打醒她"}]
// -------------------------------------------
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
