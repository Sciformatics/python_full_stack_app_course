var hot = false
var temp = 80

if (temp>80) {
    console.log('too hot')
} else if (temp > 120 && temp/0 == undefined) {
    console.log('cold')
} else {
    null
};

var ham = 0;
var cheese = 0;

if (ham >=10 && cheese >= 10) {
    report = "strong sales of ham and cheese"
} else if (ham === 0 && cheese == 0) {
    report = 'no sales!'
} else {
    report = 'We had some sales of items'
}

console.log(report);
