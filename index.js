
/**
 * Expose `DateRange`.
 */

module.exports = DateRange;

/**
 * Initialize a new DateRange `from` one date `to` another.
 *
 * @param {Date} from
 * @param {Date} to
 * @api public
 */

function DateRange(from, to) {
  if (!(this instanceof DateRange)) return new DateRange(from, to);
  if (from) this.from(from);
  if (to) this.to(to);
}

/**
 * Set / get from `date`.
 *
 * @param {Date} date
 * @return {Date}
 * @api public
 */

DateRange.prototype.from = function(date){
  if (0 == arguments.length) return this._from;
  this._from = date;
  this.normalize();
};

/**
 * Set / get to `date`.
 *
 * @param {Date} date
 * @return {Date}
 * @api public
 */

DateRange.prototype.to = function(date){
  if (0 == arguments.length) return this._to;
  this._to = date;
  this.normalize();
};

/**
 * Normalize the dates.
 *
 * @api private
 */

DateRange.prototype.normalize = function(){
  if (this._from > this._to) {
    var from = this._from;
    this._from = this._to;
    this._to = from;
  } 
};

/**
 * Return diff in milliseconds
 *
 * @return {Number}
 * @api public
 */

DateRange.prototype.diff = function(){
  return this._to - this._from;
};

/**
 * Return JSON representation.
 *
 * @return {Object}
 * @api public
 */

DateRange.prototype.toJSON = function(){
  return {
    from: this._from,
    to: this._to
  };
};

/**
 * Return string representation.
 *
 * @return {String}
 * @api public
 */

DateRange.prototype.toString = function(){
  return '[DateRange ' + this._from + ' => ' + this._to + ']';
};
