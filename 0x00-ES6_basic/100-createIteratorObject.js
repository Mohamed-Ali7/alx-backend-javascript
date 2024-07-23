export default function createIteratorObject(report) {
  const keys = Object.keys(report.allEmployees);
  const employees = [];

  for (const key of keys) {
    employees.push(...report.allEmployees[key]);
  }

  return employees;
}
