var studentName = 'hanjuren';
var age = 25;
var studentId = 1;
var GenderType;
(function (GenderType) {
    GenderType["Male"] = "male";
    GenderType["Female"] = "female";
})(GenderType || (GenderType = {}));
;
function getStudent(studentName) {
    return {
        studentName: 'hahaha',
        age: 12,
        //gender: GenderType.Male,
        gender: 'male',
        studentId: 1
    };
}
function saveStudent(student) {
    //student.studentId = 2;
}
saveStudent({
    studentName: 'hahaha',
    age: 12,
    //gender: GenderType.Female,
    gender: 'female',
    studentId: 1
});
