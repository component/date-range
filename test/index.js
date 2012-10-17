
var DateRange = require('..')
  , assert = require('better-assert');

var min = 60000;
var now = new Date;
var future = new Date(Date.now() + (min * 5));

describe('DateRange(from, to)', function(){
  it('should initialize the range', function(){
    var range = new DateRange(now, future);
    assert(now == range.from());
    assert(future == range.to());
  })

  describe('when reversed', function(){
    it('should normalize the range', function(){
      var range = new DateRange(future, now);
      assert(now == range.from());
      assert(future == range.to());
    })
  })
})

describe('DateRange#diff()', function(){
  it('should return diff in milliseconds', function(){
    var range = new DateRange(now, future);
    assert((min * 5) == range.diff());
  })
})

describe('DateRange#toJSON()', function(){
  it('should return a json representation', function(){
    var range = new DateRange(future, now);
    var json = JSON.stringify(range);
    var obj = JSON.parse(json);
    assert(obj.from);
    assert(obj.to);
  })
})

describe('DateRange#toString()', function(){
  it('should return a string representation', function(){
    var range = new DateRange(future, now);
    assert(~range.toString().indexOf('[DateRange'));
  })
})