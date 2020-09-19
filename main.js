//1.Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade.

alert("task 1");
let studentList  = [80, 77 , 68, 88, 95];
let sum = 0, averageMark, markECTS;

for (i = 0; i < studentList.length; i++) {
    sum += studentList[i];

}
averageMark = sum / studentList.length;
console.log(averageMark);



if (averageMark < 60 ) {
    markECTS = "F";
} else if (averageMark < 70 ) {
    markECTS = "D";
} else if (averageMark < 80 ) {
    markECTS = "C";
} else if (averageMark < 90 ) {
    markECTS = "B";
} else {
    markECTS = "A";
}

console.log(markECTS);

alert(` Середній бал: ${averageMark} . Оцінка за ECTS: ${markECTS} . `);








//2. Write a JavaScript program to sum the multiples of 3 or 5 under 1000.

alert("task 2");
const NUM1 = 3;
const NUM2 = 5;
let sums = 0;
for (let i=1; i < 1000; i++) {
    if (i%NUM1 == 0 || i%NUM2 == 0 ) {
        sums +=i;
        console.log(i);
    }
}
console.log(sums);
alert(sums);










//3. Write a JavaScript program to construct the following pattern, using a nested for loop./*
/*  
    *
    * *
    * * *
    * * * *
    * * * * *
*/
alert("task 3");
let n = prompt("Скільки рядків драбинки малюємо?");
let element = "";
for (let i = 1; i <= n; i++) {
    element += "* ";
    document.write(element + "<br>");
}

