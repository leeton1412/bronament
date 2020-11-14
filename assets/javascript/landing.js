

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
// Street fight button function
  function dataFill() {
    var sf = document.getElementById('street-fighter');
    var displaySetting = sf.style.display;
        if (displaySetting == 'block') {
            sf.style.display = 'none';
        }
    else {
      sf.style.display = 'block';
    }
  }
// Tekken button function
  function dataFill2() {
    var sf = document.getElementById('tekken');
    var displaySetting = sf.style.display;
        if (displaySetting == 'block') {
            sf.style.display = 'none';
        }
    else {
      sf.style.display = 'block';
    }
  }
// Smash Bros button function
  function dataFill3() {
    var sf = document.getElementById('smash-bros');
    var displaySetting = sf.style.display;
        if (displaySetting == 'block') {
            sf.style.display = 'none';
        }
    else {
      sf.style.display = 'block';
    }
  }
// Mortal Kombat button function
  function dataFill4() {
    var sf = document.getElementById('mk');
    var displaySetting = sf.style.display;
        if (displaySetting == 'block') {
            sf.style.display = 'none';
        }
    else {
      sf.style.display = 'block';
    }
    
  }


document.getElementById("street-list").addEventListener("mouseout", mouseOut);
document.getElementById("tekken-list").addEventListener("mouseout", mouseOut);
document.getElementById("smash-list").addEventListener("mouseout", mouseOut);
document.getElementById("mk-list").addEventListener("mouseout", mouseOut);

function mouseOut(list){
    document.getElementById("street-fighter").style.display = 'none';
    document.getElementById("tekken").style.display = 'none';
    document.getElementById("smash-bros").style.display = 'none';
    document.getElementById("mk").style.display = 'none';
}

