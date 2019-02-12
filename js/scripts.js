var divide = function(weight, height) {
 return weight / (height);
};

var weight = prompt ("Enter your weight in KGS here:");
var height = prompt ("Enter your height in centimeters here:");
var results = divide(weight, (height*height));
alert(results.toFixed(2));
