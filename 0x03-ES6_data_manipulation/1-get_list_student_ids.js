export default function getListStudentIds(students) {
  if (!Array.isArray(students)) {
    return [];
  }
  const ids = students.map((ele) => ele.id);
  return ids;
}
