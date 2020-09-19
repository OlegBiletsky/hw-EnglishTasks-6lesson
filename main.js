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

