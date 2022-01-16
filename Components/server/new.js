const needle = require('needle')
const config = require('dotenv').config()
const TOKEN = process.env.BEARER_TOKEN

const endpointURL = "https://api.twitter.com/2/tweets?ids=";


async function getRequest() {

    // These are the parameters for the API request
    // specify Tweet IDs to fetch, and any additional fields that are required
    // by default, only the Tweet ID and text are returned
    const params = {
        "ids": "1476896453008277504,1470204526024089607,1482004670084415489,1482537238303068167", // Edit Tweet IDs to look up
        "tweet.fields": "created_at,attachments", // Edit optional query parameters here
        "expansions": "author_id", // Edit optional query parameters here
    }

    // this is the HTTP header that adds bearer token authentication
    const res = await needle('get', endpointURL, params, {
        headers: {
            "User-Agent": "v2TweetLookupJS",
            "authorization": `Bearer ${TOKEN}`
        }
    })
    // const promise=fetch(res)
    // promise.then(res=>res.json()).then(data=>{
    //     console.log(data);
    // })
    if (res.body) {
        console.log(res.body.data);
        res.body.data.forEach(element => {
            console.log(element);
        });
        return res.body;
    } else {
        throw new Error('Unsuccessful request');
    }
}

// (async () => {

//     try {
//         // Make request
//         const response = await getRequest();
//         // console.dir(response, {
//         //     depth: null
//         // });

//     } catch (e) {
//         console.log(e);
//         process.exit(-1);
//     }
//     process.exit();
// })();

// var http = require('http');
// http.createServer(function (request, response) {
//     response.writeHead(200, {'Content-Type': 'application/json'});
//     getRequest().then(data=>{response.end(JSON.stringify(data));});
// }).listen(9000);

//////////////////////////////////////////////////////////

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){

    if(req.url === '/Tweets'){

        res.writeHead(200, { 'Content-Type':'application/json'});
        getRequest().then(data=>{console.log(typeof(data));
            res.end(JSON.stringify(data))}).catch(error=>{
            console.log(error)
        }
        );
    }
    else if (req.url === '/welcome.html'){
        res.writeHead(200, { 'Content-Type':'text/html'});
        html = fs.readFileSync('./welcome.html');
        res.end(html);
    }
    else{
        res.writeHead(404);
        res.end();
    }
}).listen(3000, '127.0.0.1');