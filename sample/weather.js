var request = require('request');
var parseString = require('xml2js').parseString;


request('http://www.weather.go.kr/weather/forecast/mid-term-rss3.jsp?stnld=109', function (error, response, body) { 
    parseString(body, function (err, result) {
        console.dir(result.rss.channel[0].item[0].description[0].header[0].wf[0]);

        // console.dir(result.channel.link);
        // console.dir(result.channel.description);
        // console.dir(result.channel.generator);
        // console.dir(result.channel.pubDate);
        // console.dir(result.channel.item);
    });
});