export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsCity = students.filter((obj) => obj.location === city);

  return studentsCity.map((student) => {
    const studentGrade = newGrades.filter((obj) => obj.studentId == student.id);
    if (studentGrade.length > 0) {
      return {
        ...student,
        grade: studentGrade[0].grade,
      };
    }
    return {
      ...student,
      grade: 'N/A',
    };
  });
}
