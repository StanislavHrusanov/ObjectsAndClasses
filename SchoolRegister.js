function schoolRegister(arr) {
    let students = [];
    for (let el of arr) {
        let elAsArr = el.split(', ');
        let studentInfo = {};
        for (let detail of elAsArr) {
            let detailAsArr = detail.split(': ');
            let property = detailAsArr[0];
            let value = detailAsArr[1];
            if (property == 'Graduated with an average score' && Number(value < 3)) {
                studentInfo = {};
                break;
            }
            if (property == 'Grade' || property == 'Graduated with an average score') {
                studentInfo[property] = Number(value);

            } else {
                studentInfo[property] = value;

            }
        }
        let studentInfoLength = Object.keys(studentInfo).length;
        if (studentInfoLength > 0) {
            students.push(studentInfo);
        }

    }

    students.sort((a, b) => a.Grade - b.Grade);

    let arrOfStudentsEntries = [];

    for (let student of students) {
        arrOfStudentsEntries.push(Object.entries(student));
    }

    let listOfStudents = '';
    let gradeOfStudents;
    let score = 0;
    let counter = 0;

    for (let i = 0; i < arrOfStudentsEntries.length - 1; i++) {

        let curStudentName = arrOfStudentsEntries[i][0][1];
        let currStudentGrade = arrOfStudentsEntries[i][1][1];
        let currStudentScore = arrOfStudentsEntries[i][2][1];
        let nextStudentName = arrOfStudentsEntries[i + 1][0][1];
        let nextStudentGrade = arrOfStudentsEntries[i + 1][1][1];
        let nextStudentScore = arrOfStudentsEntries[i + 1][2][1];

        if (currStudentGrade == nextStudentGrade) {
            if (counter == 0) {
                listOfStudents += curStudentName;
            } else {
                listOfStudents += ', ' + curStudentName;
            }
            gradeOfStudents = currStudentGrade + 1;
            score += currStudentScore;
            counter++;
        } else {
            if (counter == 0) {
                listOfStudents += curStudentName;
            } else {
                listOfStudents += ', ' + curStudentName;
            }
            gradeOfStudents = currStudentGrade + 1;
            score += currStudentScore;
            counter++;
            console.log(`${gradeOfStudents} Grade `);
            console.log(`List of students: ${listOfStudents}`);
            console.log(`Average annual grade from last year: ${(score / counter).toFixed(2)}`);
            console.log('');
            listOfStudents = '';
            gradeOfStudents = undefined;
            score = 0;
            counter = 0;
        }
        if (i == arrOfStudentsEntries.length - 2 && currStudentGrade == nextStudentGrade) {
            listOfStudents += ', ' + nextStudentName;
            gradeOfStudents = currStudentGrade + 1;
            score += nextStudentScore;
            counter++;
            console.log(`${gradeOfStudents} Grade `);
            console.log(`List of students: ${listOfStudents}`);
            console.log(`Average annual grade from last year: ${(score / counter).toFixed(2)}`);
            console.log('');
        } else if (i == arrOfStudentsEntries.length - 2 && gradeOfStudents == undefined) {
            console.log(`${nextStudentGrade + 1} Grade `);
            console.log(`List of students: ${nextStudentName}`);
            console.log(`Average annual grade from last year: ${(nextStudentScore).toFixed(2)}`);
            console.log('');
        }
    }
}

schoolRegister([
    'Student name: George, Grade: 5, Graduated with an average score: 2.75',
    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
    'Student name: John, Grade: 9, Graduated with an average score: 2.90',
    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
]);