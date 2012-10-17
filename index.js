
module.exports = DateRange;

function DateRange(from, to) {
  if (from) this.from(from);
  if (to) this.to(to);
}

DateRange.prototype.from = function(date){
  this._from = date;
  this.normalize();
};

DateRange.prototype.to = function(date){
  this._to = date;
  this.normalize();
};

DateRange.prototype.normalize = function(){
  if (this._from > this._to) {
    var from = this._from;
    this._from = this._to;
    this._to = from;
  } 
};

DateRange.prototype.toJSON = function(){
  return {
    from: this._from,
    to: this._to
  };
};

DateRange.prototype.toString = function(){
  return '[DateRange\n  ' + this._from + '\n  ' + this._to + ']';
};

