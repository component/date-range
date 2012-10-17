
/**
 * Module dependencies.
 */

var DateRange = require('./');

var now = new Date;
var future = new Date(Date.now() + (60000 * 5));

console.log();
console.log(JSON.stringify(new DateRange(now, future), null, 2));
console.log();
console.log(new DateRange(future, now).toString());
console.log();