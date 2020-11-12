

// Get request from wikipedia
var xhr = new XMLHttpRequest();
var url = "https://cors-anywhere.herokuapp.com/https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&pageids=19986238|1577869|43295977|40775102";
xhr.open('GET', url, true);
xhr.onload = function() {
    var data = JSON.parse(this.response);
   
    
    for (var i in data.query.pages) {
        console.log(data.query.pages[i].title);
        document.getElementById('street-fighter').textContent = data.query.pages['19986238'].extract
        document.getElementById('smash-bros').textContent = data.query.pages['1577869'].extract
        document.getElementById('tekken').textContent = data.query.pages['43295977'].extract
        document.getElementById('mk').textContent = data.query.pages['40775102'].extract

    }
}

xhr.send();
