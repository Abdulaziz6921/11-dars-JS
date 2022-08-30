const myArr = ["damas", "nexia", "gentra", "spark"];

const myArr2 = ["tesla model S", "Camaro", "Sanata"];

console.log(myArr);

// push metodi
myArr.push("tico");
console.log(myArr);

let concatMethod = myArr.concat(myArr2);

console.log(concatMethod);

console.log(myArr.reverse());

myArr.forEach((item) => console.log(item + " moshina2"));

// shift metodi arraydan birinchisni o'chiradi
myArr.shift();
console.log(myArr);

// pop metodi oxiridan birichisini o'chiradi
myArr.pop();
console.log(myArr);
