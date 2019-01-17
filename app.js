var http = require('http');
var url = require('url');
var fs = require('fs');
var timeStamp = require('./timeStamp');
var nodeevent = require('./nodeevent');

http.createServer(function(req,res)
{
    //files system response
    /*
    fs.readFile('index.html', function(err, data){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write(data);
        res.end();
    });
    */

    nodeevent.nodeevents();
    res.write("<h1> Welcome to the Homepage! </h1>");
    res.write("The day and time is:" + timeStamp.timeStamp() + "<br>");
    res.write("This is the url you requested" + req.url  + "<br>")
    var q = url.parse(req.url, true).query;
    var resTxt = q.id + " " + q.user;
    var qList = url.parse(req.url,true);
    console.log(qList);
    console.log(qList.host);//localhost:3030
    console.log(qList.pathnname);//users.html
    console.log(qList.search);//id and userres.write(qu());
    res.end(resTxt);

    

}).listen(3030);

