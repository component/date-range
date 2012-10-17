
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

  it('should work without new', function(){
    var range = DateRange(now, future);
    assert(now == range.from());
    assert(future == range.to());
  })

  it('should be optional', function(){
    var range = new DateRange;
    assert(null == range.to());
    assert(null == range.from());

    range.from(now);
    range.to(future);
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

describe('DateRange#equals(other)', function(){
  describe('when identical', function(){
    it('should be true', function(){
      var a = new DateRange(now, future);
      var b = new DateRange(now, future);
      assert(true === a.equals(b));
    })
  })

  describe('when different', function(){
    it('should be false', function(){
      var a = new DateRange(now, new Date(5000));
      var b = new DateRange(now, future);
      assert(false === a.equals(b));
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