//document.write('Hello World!');
//document.write(' This is app.js file');
//
//var num = 1;
//var float_num = 3.14;
//
//console.log("Num: " + num);
//console.log("Float_num: " + float_num);
//
//console.log("Num data type" + typeof num);
//console.log("Float_num data type" + typeof float_num);
//
//var name = "Fatima";
//console.log(name + " type of name " + typeof name);
//
//var is_worked = true; //true, false
//console.log(is_worked + " " + typeof is_worked);
//
//var a; //undefined
//console.log(a + " " +typeof a);
//
//var empty = null;
//console.log (empty + " " + typeof empty);
//
//var array = [1, 3.14, 'my str', is_worked];
//console.log(array + " " + typeof array );
//
//var person = {
//    name: 'Fatima',
//    age : 22
//};
//
//console.log(person + " " + typeof person);

var numbers = [3, 1, 5, 8, 2, 7, 9]
console.log(numbers);
//console.log(numbers.length);
//console.log('i=0', numbers[0]);
//console.log('i=0', numbers[1]);
//console.log('i=2', numbers[2]);

numbers.push(10);
console.log(numbers);

numbers.pop();
console.log(numbers);

console.log(numbers.shift());

console.log(numbers.slice(2)); //ikinci elementden sorakilar cixir capa
console.log(numbers.slice(0, 2));
console.log(numbers.sort());
console.log(numbers.reverse());


var date_arr = [10, 12, 2020];

console.log(date_arr.join("/"));  
console.log(date_arr.toString());

//for, while, do while

var numbers = [9, 1, 2, 8, 5, 7, 4];
iterator = 0;

while(iterator < numbers.length){
    console.log('arr element ' + numbers[iterator]);
    iterator++;
}

console.log('loop ended');

do {
    console.log('arr element ' + numbers[iterator]);
    iterator++;
} while (iterator < numbers.length);

for( var i=0; i<numbers.length; i++){
    console.log('arr element' + numbers[i]);
}
console.log('loop ended');

for( var i of numbers) {
    console.log('arr element: ', i);
}
console.log('loop ended');


var person = {
    name: 'Fatima',
    surname: 'Askerova',
    age: 22,
}

console.log(person['name']);

for(var key in person){
    console.log(key, ':', person[key]);
}

