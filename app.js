var time = ["10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

function CookieStand(storeLocation, domID, minCustomer, maxCustomer, avgCookiesPer) {
  this.storeLocation = storeLocation;
  this.domID = domID;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookiesPer = avgCookiesPer;
  this.totalCookies = [];
  this.total = 0;



  this.customersPerHour = function() {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer)) + this.minCustomer;
  };

  this.cookiesPerHour = function() {
    for (var i = 0; i < time.length; i++){
      this.totalCookies.push(Math.floor(this.customersPerHour() * this.avgCookiesPer));
      this.total += this.totalCookies[i];
      console.log("@hour " + (10 + i) + " hourly amount is " + this.totalCookies[i] + " and the daily total is " + this.total);
    };
  };
}

var pikePlace = new CookieStand("Pike Place Market", 'pike', 17, 88, 5.2);
var seaTac = new CookieStand("SeaTac Airport", 'seaTac', 6, 44, 1.2);
var southcenter = new CookieStand('Southcenter Mall', 'southcenter', 11, 38, 1.9);
var bellevue = new CookieStand('Bellevue Square', 'bellevue', 20, 48, 3.3);
var alki = new CookieStand('Alki Beach', 'alki', 3, 24, 2.6);

var shopNames = [pikePlace, seaTac, southcenter, bellevue, alki];

function cookieCalculation () {
  for (var l = 0; l < shopNames.length; l++) {
    shopNames[l].cookiesPerHour();
  }
}

function makeTable () {
  var tbl = document.createElement('table');
  var thRow = document.createElement('tr');
  var emptyCell = document.createElement('th');
  thRow.appendChild(emptyCell);

  for (var k = 0; k < time.length; k++) {
    var thElement = document.createElement('th');
    thElement.textContent = time[k];
    thRow.appendChild(thElement);
  }

  var totalCell = document.createElement('th');
  totalCell.textContent = 'Total';
  thRow.appendChild(totalCell);
  tbl.appendChild(thRow);

  for (var j = 0; j < shopNames.length; j++) {
    var trElement = document.createElement('tr');
    var rowName = document.createElement('td');
    rowName.textContent = shopNames[j].storeLocation;
    trElement.appendChild(rowName);

    for (var i = 0; i < time.length; i++) {
      var tdElement = document.createElement('td');
      tdElement.textContent = shopNames[j].totalCookies[i];
      trElement.appendChild(tdElement);
    }

    var shopTotal = document.createElement('td');
    shopTotal.textContent = shopNames[j].total;
    trElement.appendChild(shopTotal);
    tbl.appendChild(trElement);
  }

  document.getElementById('table').appendChild(tbl);
}

cookieCalculation();
makeTable();
