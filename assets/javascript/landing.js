

// Get request from wikipedia
var xhr = new XMLHttpRequest();
var url = "https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&pageids=19986238";
xhr.open('GET', url, true);
xhr.onload = function() {
    var data = JSON.parse(this.response);
    console.log(data);

   
    console.log(data.query.pages)

    
    for (var i in data.query.pages) {
        console.log(data.query.pages[i].title);
    }
}

xhr.send();
