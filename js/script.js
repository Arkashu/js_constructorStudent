'use strict';

function Student (name, lastName, birthYear) {
    this.name = name;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.age = function () {
        const today = new Date();
        return today.getFullYear() - birthYear;
    };
    this.attendance = new Array(10).fill(null);
    this.estimates = new Array(10).fill(null);
    this.present = function () {
        if (this.attendance.indexOf(null) === -1) return;
        this.attendance[this.attendance.indexOf(null)] = true;
    };
    this.absent = function () {
        if (this.attendance.indexOf(null) === -1) return;
        this.attendance[this.attendance.indexOf(null)] = false;
    };
    this.mark = function (evaluation) {
        if (this.estimates.indexOf(null) === -1) return;
        this.estimates[this.estimates.indexOf(null)] = evaluation;
    };
    this.summary = function () {
        const averageMark = this.estimates.reduce((a, b) => {
            return (a + b)
        }) / (this.estimates.length - this.estimates.filter(arg => { return arg === null}).length)
        const averagePresent = this.attendance.filter((element) => {
            return element === true
        }).length / (this.attendance.length - this.attendance.filter(arg2 => { return arg2 === null}).length);
        if (averageMark >= 9 && averagePresent >= 0.9) return 'Ути какой молодчинка!';
        if (averageMark < 9 && averagePresent < 0.9) return 'Редиска!';
        return 'Норм, но можно лучше';
    }

}
const student_test = new Student('Vova', 'Cooper', 1990);
student_test.present()
student_test.present()
student_test.absent()
student_test.present()
student_test.present()
student_test.present()
student_test.present()
student_test.present()
student_test.present()
student_test.mark(10)
student_test.mark(10)
student_test.mark(2)
student_test.mark(2)
student_test.mark(2)
student_test.mark(2)
student_test.mark(10)
student_test.mark(10)
student_test.mark(9)
console.log(student_test.summary());

