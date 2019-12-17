var Request = require('request');
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("API Endpoints")
console.log("News API has 2 main end points and one minor end point")
console.log("1.Top headlines");//returns breaking news headlines for a country and category, or currently running on a single or multiple sources.
//Everything: every recent news and blog article published by over 30,000 different sources large and small,
console.log("2.Everything \n3. Sources ");//returns information (including name, description, and category) about the most notable sources indexed 
console.log("Please type to vie content of enpoint of your choice")

rl.question('Type option: ', function (option) {
    if (option === '1') {
        Request.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=e1f6aaadd26d4ced846348e1222b23d7", (error, response, body) => {

            if (error) {
                return console.log(error);
            }
            console.log(JSON.parse(body));
        });
    }
    if (option === '2') {
        Request.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=e1f6aaadd26d4ced846348e1222b23d7", (error, response, body) => {

            if (error) {
                return console.log(error);
            }
            console.log(JSON.parse(body));
        });
    }
    if (option === '3') {
        Request.get("https://newsapi.org/v2/sources?apiKey=e1f6aaadd26d4ced846348e1222b23d7", (error, response, body) => {

            if (error) {
                return console.log(error);
            }
            console.log(JSON.parse(body));
        });
    }
    rl.close();
});
