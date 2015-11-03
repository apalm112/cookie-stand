var time = [" ", "10AM", "11Am", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "Total"];

//  var totalCookies = [];

var pikePlace = {
  storeLocation: "Pike Place Market",
  domID: document.getElementById('pike'),
  minCustomer: 17,
  maxCustomer: 88,
  //avgPerCust: 5.2,
  //hourlyTotals: [],
  //dailycookieTotals: [],

  avgCookiesPer: 5.2 ,
  totalCookies: [],
  total: 0,

  customersPerHour: function() {
    return Math.floor(Math.random() * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer;
  },

  cookiesPerHour: function() {
    for (var i = o; i < time.length; i++){
      this.totalCookies.push(Math.floor(this.customersPerHour() * this.avgCookiesPer));
      this.total += this.totalCookies[i];
    },

    display: function() {
       console.log("@hour " + (10 + i) + " hourly amount is " + this.totalCookies[i] + " and the daily total is " + this.total);

      var hour = document.createElement('li');
      hour.innerHTML = time[i] + this.totalCookies[i];
      this.domID.appendChild(hour);
    }
    var dailyTotal = document.createElement('li');
    hour.innerHTML = 'Total: ' + this.total;
    this.domID.appendChild(dailyTotal);
  }


makeList: function() {
  this.cookiePerHr();
  var tbl = document.createElement('table');

  var trElement = document.createElement('tr');
  for (var i = 0; i < hours.length; i++) {
    var tdElement = document.createElement('th');
    thElement.textContent = hours[i];
    trElement.appendChild(thElement);
  }
  tbl.appendChild(trElement);
    document.body.appendChild(tbl);


};

pikePlace.cookiesPerHour();





 /* generateRandom: function() {
  return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
  },

  callHourlyTotal: function() {
    for (var i = 0; i < hoursOfOperation.length; i++){
    this.hourlyTotals.push(this.generateRandom() * this.avgPerCust);
    console.log(i);  // removed Math.floor() from line 18 after push.
     }
  }

};*/

//  pikePlace.callHourlyTotal();
