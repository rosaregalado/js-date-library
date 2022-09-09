// months
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const shortMon = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// days
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const shortDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


class D {
	constructor(...args) {
		this._date = new Date(...args);
  }
  

  // 2021 - full year
  get year() {
    return this._date.getFullYear();
  }

  // 21 - short year
  get yr() {
    return this._date.getFullYear().toString().substring(2);
  }

  // July - full month
  get month() {
    return months[this._date.getMonth()];
  }

  // Jul - short month
  get mon() {
    return shortMon[this._date.getMonth()];
  }

  // Tuesday - full day
  get day() {
    return days[this._date.getDay()];
  }

  // Tue - short day
  get dy() {
    return shortDays[this._date.getDay()];
  }

  // 27 - day as a number
  get date() {
    return this._date.getDate();
  }

  // 18 - hour
  get hours() {
    return this._date.getHours();
  }

  // 6 - minutes
  get mins() {
    return this._date.getMinutes();
  }

  // 5 - seconds
  get secs() {
    return this._date.getSeconds();
  }

  /* 
    * @param {String} input string
    * @returns {String} date string
  */

  // format method: mask string
  format(mask = '') {
    let dateString = '';

    for (let i = 0; i < mask.length; i++) {
      // full year
      if (mask[i] === 'Y') {
        dateString += this.year;
        // short year
      } else if (mask[i] === 'y') {
        dateString += this.yr;
        // full month
      } else if (mask[i] === 'M') {
        dateString += this.month;
        // short month
      } else if (mask[i] === 'm') {
        dateString += this.mon;
        // date padded - '01'
      } else if (mask[i] === 'D') {
        dateString = dateString + '0' + this.date;
        // date number
      } else if (mask[i] === 'd') {
        dateString += this.date;
        // hours padded - '05'
      } else if (mask[i] === 'H') {
        dateString = dateString + '0' + this.hours;
        // hours 
      } else if (mask[i] === 'h') {
        dateString += this.hours;
        // minutes padded - '08'
      } else if (mask[i] === 'I') {
        dateString = dateString + '0' + this.mins; 
        // minutes
      } else if (mask[i] === 'i') {
        dateString += this.mins;
        // seconds padded - '04'
      } else if (mask[i] === 'S') {
        dateString = dateString + '0' + this.secs;
        // seconds
      } else if (mask[i] === 's') {
        dateString += this.secs;
      } else {
        dateString += mask[i]
      }
    }
    return dateString;
  }
}


module.exports = D;

const d = new D(2017, 0, 2, 3, 4, 5)
console.log(d.format('Y M D'))       // 2017 January 02
console.log(d.format('y/m/d'))       // 17/Jan/2
console.log(d.format('H:I:S'))       // 03:04:05
console.log(d.format('h:i:s'))       // 3:4:5
console.log(d.format('Y-M-D h:I:S')) // 2017-January-02 3:04:05




// console.log( d.year )  // 2021 - Full year
// console.log( d.yr )    // 21   - Short year
// console.log( d.month ) // July - Full month
// console.log( d.mon )   // Jul  - Short month
// console.log( d.day )   // Tuesday - Full day
// console.log( d.dy )    // Tue  - Short day
// console.log( d.date )  // 27   - Date
// console.log( d.hours ) // 18   - Hour
// console.log( d.mins )  // 6    - Minutes
// console.log( d.secs )  // 5    - Seconds


// With no parameters: 
// const a = new D()
// // Create a date from a string (single parameter)
// const b = new D('9/26/1965') 
// // Create a date from some numbers (list of parameters)
// const c = new D(1970, 1, 1, 0, 0, 0)
// // With a Date
// const d = new D(new Date())

