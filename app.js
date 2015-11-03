var hoursOfOperation = ["10AM", "11Am", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "Total"];

var totalCookies = [];

var pikePlace = {
  minCustHr: 17,
  maxCustHr: 88,
  avgPerCust: 5.2,
  hourlyTotals: [],
  dailycookieTotals: [],

  generateRandom: function() {
  return Math.floor(Math.random() * (this.maxCustHr - this.minCustHr + 1)) + this.minCustHr;
  },

  callHourlyTotal: function() {
    for (var i = 0; i < hoursOfOperation.length; i++){
    this.hourlyTotals.push(this.generateRandom() * this.avgPerCust);
    console.log(i);  // removed Math.floor() from line 18 after push.
     }
  }

};

pikePlace.callHourlyTotal();
