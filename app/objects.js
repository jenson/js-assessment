exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
      return fn.call(obj);
  },

  alterObjects : function(constructor, greeting) {
      constructor.prototype.greeting = greeting;
  },

  iterate : function(obj) {
	  
	var newArr = [];

    for (var i in obj) {
      if (obj.hasOwnProperty(i)) {
        newArr.push(i +": "+ obj[i]);
      }
    }

    return newArr;

  }
};

