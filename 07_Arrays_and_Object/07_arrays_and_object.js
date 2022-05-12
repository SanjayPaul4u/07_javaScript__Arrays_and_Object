console.log("This tutorial is for array and object.");

// // Array📌📌📌
// const Name = ['Rahul', 'Mou', 'Sanjay', 'Ricki', 'Bornali'];
// const marks = [25, 20, 45, 90, 100];
let mixArr = [88, "str", false, 88.55,[2, 1, 10, 'sanjay']];

// const arr = new Array(25, 30, 20, 'sanjay');
// console.log(arr);
// console.log(Name);
// console.log(marks);

console.log(mixArr);
// console.log(mixArr.length);
// console.log(Array.isArray(mixArr));

// mixArr[0] ="Changed";
// console.log(mixArr);

let fromMixArr = mixArr[3];
// console.log("This value is from mix array: ",fromMixArr);

let Length = mixArr.length;
// console.log("The length of this array is: ", Length);

let io = mixArr.indexOf(88.55);
console.log(io);




// // MUTATING AND MODIFYING ARRAYS📌
// mixArr.push(58888);
// mixArr.unshift(55555)
// mixArr.pop()
// mixArr.shift()
// mixArr.splice(2, 2)
// mixArr.reverse();

let numbers = [4, 25, 35, 78];// We have to do use "let" data type in main array.
mixArr = mixArr.concat(numbers);

console.log(mixArr);



// // Object📌📌📌

let myObject = {
    Name : "sanjay",
    'full name':"sanjayPaul",
    age : 45,
    isGraduation : false,
    marks : [25, 22, 100, 25, 2]

}
console.log(myObject.Name);// 1st rule for print obj
console.log(myObject["full name"]);// 2nd rule for print obj
console.log(myObject.age);
console.log(myObject["age"]);

console.table(myObject);



