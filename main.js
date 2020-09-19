let studentList  = [80, 77 , 68, 88, 95];

let sum = 0, averageMark;
for (i = 0; i < studentList.length; i++) {
    sum += studentList[i];

}
averageMark = sum / studentList.length;
console.log(averageMark);

// alert(` Середній бал: ${averageMark} . Оцінка за ECTS: ${} . `);
