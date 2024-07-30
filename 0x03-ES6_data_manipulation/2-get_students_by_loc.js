export default function getStudentsByLocation(students, location) {
  return students.filter((ele) => ele.location === location);
}
