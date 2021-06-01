let studentName: string = 'hanjuren';
let age: number = 25;
let studentId: number = 1;

interface Student {
  studentName: string;
  age?: number;
  readonly studentId: number;
  addComment?: (comment: string) => string;
}

function getStudent(studentName: string): Student{
  return {
    studentName: 'hahaha',
    //age: 12,
    studentId: 1,
  }
}

function saveStudent (student: Student):void {
  //student.studentId = 2;
}

saveStudent({
  studentName: 'hahaha',
  age: 12,
  studentId: 1,
});
