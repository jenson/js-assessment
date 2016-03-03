exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
	           
			   var l = arr.length;
			   
			   for (var i = 0; i < l; i++) {
				  if (arr[i] == item) {
					return i;
				  }
			}

            return (-1);
	
  },

  sum : function(arr) {
	  
	var s = 0;
    var l = arr.length;
	
    for (var i = 0; i < l; i++) {
      s += arr[i];
    }

    return s;
           
  },

  remove : function(arr, item) {
	  
	var newArr = [];
    var l = arr.length;
	
    for (var i = 0; i < l; i++) {
      if (arr[i] != item) {
        newArr.push(arr[i]);
      }
    }

    return newArr;

  },

  removeWithoutCopy : function(arr, item) {
          // >>
  },

  append : function(arr, item) {
	  
	   arr.push(item);
       return arr;

  },

  truncate : function(arr) {
	   
	    arr.pop();
		return arr;
 
  },

  prepend : function(arr, item) {
	  
	  arr.unshift(item);
	  return arr;

  },

  curtail : function(arr) {
	  
	  arr.shift(arr);
	  return arr;

  },

  concat : function(arr1, arr2) {
		return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {

  },

  count : function(arr, item) {
	  
	var c = 0;
	
	var l = arr.length

    for (var i = 0; i < l; i++) {
      
	  if (arr[i] == item) {
        c++;
      }
	  
    }

    return c;

  },

  duplicates : function(arr) {

  },

  square : function(arr) {
	  
	var newArr = [];
	
	l = arr.length

    for (var i = 0; i < l; i++) {
      newArr.push(arr[i] * arr[i]);
    }

    return newArr;

  },

  findAllOccurrences : function(arr, target) {
	
  }
};
