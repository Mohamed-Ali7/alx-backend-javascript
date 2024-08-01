interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
};

const student1: Student = {
  firstName: "Mohamed",
  lastName: "Ali",
  age: 29,
  location: "Egypt"
};

const student2: Student = {
  firstName: "Mostafa",
  lastName: "Ahmed",
  age: 25,
  location: "Egypt"
};

const students: Array<Student> = [student1, student2];

const table: HTMLTableElement = document.createElement('table');
const tableHeader: HTMLTableSectionElement = document.createElement('thead');
const firstNameHeader: HTMLTableCellElement = document.createElement('th');
const locationHeader: HTMLTableCellElement = document.createElement('th');

firstNameHeader.style.border = '1px solid gray';
locationHeader.style.border = '1px solid gray';
firstNameHeader.style.padding = '.10px';
locationHeader.style.padding = '.10px';
table.style.border = '1px solid gray';


firstNameHeader.innerText = 'First Name';
locationHeader.innerText = 'Location';

tableHeader.append(firstNameHeader, locationHeader);
table.append(tableHeader);

students.forEach((student) => {
  const row: HTMLTableRowElement = table.insertRow();

  const firstNameColumn: HTMLTableCellElement = row.insertCell();
  const locationColumn: HTMLTableCellElement = row.insertCell();

  firstNameColumn.innerText = student.firstName;
  locationColumn.innerText = student.location;

  firstNameColumn.style.border = '1px solid gray';
  locationColumn.style.border = '1px solid gray';
  firstNameColumn.style.padding = '10px';
  locationColumn.style.padding = '10px';
});

document.body.append(table);
