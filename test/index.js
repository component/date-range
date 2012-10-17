
var DateRange = require('..')
  , assert = require('better-assert');

var now = new Date;
var future = new Date(Date.now() + (60000 * 5));

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