export default function getStudentIdsSum(students) {
  if (!Array.isArray(students)) {
    return [];
  }

  return students.reduce((accumulator, obj) => accumulator + obj.id);
}
