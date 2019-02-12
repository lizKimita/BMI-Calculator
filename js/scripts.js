var divide = function(weight, height) {
 return weight / height;
};

var weight = prompt ("Enter your weight here:");
var height = prompt ("Enter your height here:");
var results = divide(weight, height);
alert(results.toFixed(2));
