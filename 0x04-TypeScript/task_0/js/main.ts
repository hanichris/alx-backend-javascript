interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Nathan',
    lastName: 'Drake',
    age: 22,
    location: 'Cairo',
};

const student2: Student = {
    firstName: 'Sully',
    lastName: 'Sullivan',
    age: 26,
    location: 'Alexandria',
};

const studentsList: Array<Student> = [student1, student2];

// get the reference for the body tag
const myBody: HTMLBodyElement = document.getElementsByTagName('body')[0];
// create <table> and <thead> elements
const myTable: HTMLTableElement = document.createElement('table');
const tableHeader: HTMLTableSectionElement = document.createElement('thead');
const rowHeader: HTMLTableRowElement = tableHeader.insertRow(0);
const rowCell1: HTMLTableCellElement = rowHeader.insertCell(0);
const rowCell2: HTMLTableCellElement = rowHeader.insertCell(1);
rowCell1.innerHTML = '<b>First Name</b>';
rowCell2.innerHTML = '<b>Location</b>'
myTable.append(tableHeader);

// create <tbody> element
const tableBody: HTMLTableSectionElement = document.createElement('tbody');

// Populate the table with data
studentsList.map((student) => {
    const row: HTMLTableRowElement = tableBody.insertRow(-1);
    const cell1: HTMLTableCellElement = row.insertCell(0);
    const cell2: HTMLTableCellElement = row.insertCell(1);
    cell1.innerHTML = student.firstName;
    cell2.innerHTML = student.location;

});

myTable.append(tableBody);
myBody.append(myTable);