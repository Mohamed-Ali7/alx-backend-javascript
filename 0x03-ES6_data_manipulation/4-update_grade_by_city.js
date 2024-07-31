export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city)
    .map((student) => {
      const foundGrade = newGrades.find((grade) => student.id === grade.studentId);

      return {
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: foundGrade ? foundGrade.grade : 'N/A',
      };
    });
}
