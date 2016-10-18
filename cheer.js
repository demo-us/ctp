var cheerio = require('cheerio');

var test_str = "<ul id=\"apple\" class=\"br1 br2\"><li class=\"site xyz 333\"><a href=\"1.html\">A</a><a href=\"2.html\">B</a></li></ul>";
console.log('=-------- strt ----------');
var $ = cheerio.load(test_str);
// var $ = cheerio.load(sres.text);
var items = [];
$('#apple li.333 a').each(function(i, e) { 
				// $('div.hao123-coolsite div #__wgt_0_34 li a').first(function(i, e) { 
				// $('#SortableTable tbody tr td a').first(function(i, e) { 
		console.log('----------->>');
		var $ele = $(e);

		// console.log( $ele.html() );
		console.log( $ele.text() );
		// console.log( $ele.attr('href') );
		// console.log( $ele.parent().text() );

		// make new URL addr
		// var newhref = url.resolve(baseUrl, $ele.attr('href'));
		// var url_all = 'https://abcde.xxx.se/jpT/demo/16-10-12/' + $ele.attr('href');
		// push to item list

});
