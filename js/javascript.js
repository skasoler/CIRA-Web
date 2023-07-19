//List of teachers, courses and intakes

const today = new Date();

let MDWDListOfTeachers = [
  "Daryl Askey",
  "Daniel Wedderien",
  "Daryl Askey",
  "Daniel Wedderien",
  "Daniel Wedderien",
  "Nazanin Hashemian",
  "Daryl Askey",
  "Daniel Wedderien",
  "Daniel Wedderien",
  "Daryl Askey",
  "Daryl Askey",
  "Daryl Askey",
  "Thomas Jones",
  "Daryl Askey",
  "Nazanin Hashemian",
  "Daryl Askey",
  "Daryl Askey",
  "Daryl Askey",
];

let MDWDListOfCourses = [
  "MDWD 100 | Communications for New Media",
  "MDWD 101 | Color Theory",
  "MDWD 102 | Introduction to Photoshop I",
  "MDWD 103 | Information Architecture",
  "MDWD 104 | Color Grading",
  "MDWD 105 | Introduction to Web Development",
  "MDWD 106 | Introduction to Illustrator I",
  "MDWD 107 | User Interface Design & User Experience",
  "MDWD 108 | Esthetics & Design",
  "MDWD 109 | Introduction to Photoshop II",
  "MDWD 110 | Portfolio I",
  "MDWD 111 | Project Management",
  "MDWD 112 | Internet Law",
  "MDWD 113 | Introduction to Illustrator II",
  "MDWD 114 | Introduction to Web Development II",
  "MDWD 115 | Web Marketing",
  "MDWD 116 | Introduction to Photoshop III",
  "MDWD 117 | Portfolio II ",
];

let MDWDListOfIntakes = [
  "Intake 2020",
  "January 2021",
  "September 2021",
  "January 2022",
  "May 2022",
  "September 2022",
  "January 2023",
  "September 2023",
];

let MDWDtoday = new Date();
let MDWDactiveIntakes = "";

if (
  new Date(2022, 8, 12) <= MDWDtoday &&
  MDWDtoday <= new Date(2023, 7, 31) &&
  new Date(2023, 0, 3) <= MDWDtoday &&
  MDWDtoday <= new Date(2023, 11, 16)
) {
  MDWDactiveIntakes = `${MDWDListOfIntakes[5]} and ${MDWDListOfIntakes[6]} `;
} else if (
  new Date(2023, 8, 1) <= MDWDtoday &&
  MDWDtoday <= new Date(2023, 11, 16)
) {
  MDWDactiveIntakes = `${MDWDListOfIntakes[6]}`;
} else if (
  new Date(2023, 0, 3) <= MDWDtoday &&
  MDWDtoday <= new Date(2023, 11, 16) &&
  new Date(2023, 8, 12) <= MDWDtoday &&
  MDWDtoday <= new Date(2024, 7, 26)
) {
  MDWDactiveIntakes = `${MDWDListOfIntakes[6]} and ${MDWDListOfIntakes[7]} `;
} else if (
  new Date(2023, 11, 17) <= MDWDtoday &&
  MDWDtoday <= new Date(2024, 7, 26)
) {
  MDWDactiveIntakes = `${MDWDListOfIntakes[7]}`;
} else {
  MDWDactiveIntakes = "error";
}

document.getElementById(
  "MDWDintakeOngoing"
).innerHTML = `Intakes ongoing: ${MDWDactiveIntakes}`;

//Specific student, course list and function for Intake 2020

const MDWDstudentsIntake2020 = [
  {
    Name: "Diego",
    lastname: "Flores",
    id: "A0004",
    email: "a0004@ciracollege.com",
  },
  {
    Name: "Kim",
    lastname: "Minjoung",
    id: "A0005",
    email: "a0005@ciracollege.com",
  },
  {
    Name: "Nicole",
    lastname: "Labussiere",
    id: "A0001",
    email: "a0001@ciracollege.com",
  },
  {
    Name: "Waleed",
    lastname: "Mustafa",
    id: "A0003",
    email: "a0003@ciracollege.com",
  },
  {
    Name: "Jose",
    lastname: "Velasco",
    id: "A0007",
    email: "a0007@ciracollege.com",
  },
];

const MDWDcoursesIntake2020 = [
  `<b>${MDWDListOfCourses[0]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[1]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[2]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[3]}</b> instructed by <b>${MDWDListOfTeachers[1]}</b><br>`,
  `<b>${MDWDListOfCourses[4]}</b> instructed by <b>${MDWDListOfTeachers[1]}</b><br>`,
  `<b>${MDWDListOfCourses[5]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[6]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[7]}</b> instructed by <b>${MDWDListOfTeachers[1]}</b><br>`,
  `<b>${MDWDListOfCourses[8]}</b> instructed by <b>${MDWDListOfTeachers[1]}</b><br>`,
  `<b>${MDWDListOfCourses[9]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[10]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[11]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[12]}</b> instructed by <b>${MDWDListOfTeachers[3]}</b><br>`,
  `<b>${MDWDListOfCourses[13]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[14]}</b> instructed by <b>${MDWDListOfTeachers[2]}</b><br>`,
  `<b>${MDWDListOfCourses[15]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[16]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[17]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b>`,
];

function MDWDIntake2020() {
  //Status Intake

  const statusTitleMDWDIntake2020 = document.querySelector(
    ".statusTitleMDWDIntake2020"
  );
  const statusContentMDWDIntake2020 = document.querySelector(
    ".statusContentMDWDIntake2020"
  );

  // Check if h4 element already exists
  let h4 = statusTitleMDWDIntake2020.querySelector("h4");
  if (!h4) {
    // Create the h4 element
    h4 = document.createElement("h4");
    h4.textContent = "Intake Status";
    statusTitleMDWDIntake2020.appendChild(h4);
  }

  text = ``;

  if(today<new Date("2020-09-03")){
    text= `<b>This intake has not started yet.</b>`;
  }else {
    text= "<b>This Intake has concluded.</b>";
  }

  // Assign the text to new div
  statusContentMDWDIntake2020.innerHTML = text;
  //Add styles to  new div
  statusContentMDWDIntake2020.style.border = "2px solid";
  statusContentMDWDIntake2020.style.marginTop = "1em";
  statusContentMDWDIntake2020.style.padding = "10px";

  //Table Students

  // Create table element
  var table = document.createElement("table");

  // Create table header
  var thead = document.createElement("thead");
  var headerRow = document.createElement("tr");
  var headerCell1 = document.createElement("th");
  headerCell1.textContent = "Name";
  var headerCell2 = document.createElement("th");
  headerCell2.textContent = "Last Name";
  var headerCell3 = document.createElement("th");
  headerCell3.textContent = "ID";
  var headerCell4 = document.createElement("th");
  headerCell4.textContent = "Email";
  headerRow.appendChild(headerCell1);
  headerRow.appendChild(headerCell2);
  headerRow.appendChild(headerCell3);
  headerRow.appendChild(headerCell4);
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create table body
  var tbody = document.createElement("tbody");

  // Create table rows and cells
  for (var i = 0; i < MDWDstudentsIntake2020.length; i++) {
    var row = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");
    var cell4 = document.createElement("td");

    cell1.textContent = MDWDstudentsIntake2020[i].Name;
    cell2.textContent = MDWDstudentsIntake2020[i].lastname;
    cell3.textContent = MDWDstudentsIntake2020[i].id;
    cell4.textContent = MDWDstudentsIntake2020[i].email;

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    tbody.appendChild(row);
  }
  table.appendChild(tbody);

  // Create the title
  var titleStudentsTable = document.createElement("h4");
  titleStudentsTable.textContent = "List of Students";

  // Select the target div
  var targetDiv = document.getElementById("studentsMDWDIntake2020");

  // Clear the target div content
  targetDiv.innerHTML = "";

  // Append the title and table to the target div
  targetDiv.appendChild(titleStudentsTable);
  targetDiv.appendChild(table);

  //Table Courses

  // Create table element
  var table = document.createElement("table");

  // Create table header
  var thead = document.createElement("thead");
  var headerRow = document.createElement("tr");
  var headerCell1 = document.createElement("th");
  headerCell1.textContent = "Courses";
  var headerCell2 = document.createElement("th");
  headerCell2.textContent = "Instructor";
  headerRow.appendChild(headerCell1);
  headerRow.appendChild(headerCell2);
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create table body
  var tbody = document.createElement("tbody");

  // Create table rows and cells
  for (var i = 0; i < MDWDListOfCourses.length; i++) {
    var row = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");

    cell1.textContent = MDWDListOfCourses[i];
    cell2.textContent = MDWDListOfTeachers[i];

    row.appendChild(cell1);
    row.appendChild(cell2);
    tbody.appendChild(row);
  }
  table.appendChild(tbody);

  // Create the title
  var titleCourseTable = document.createElement("h4");
  titleCourseTable.textContent = "List of Courses";

  // Select the target div
  var targetDiv = document.getElementById("coursesMDWDIntake2020");

  // Clear the target div content
  targetDiv.innerHTML = "";

  // Append the title and table to the target div
  targetDiv.appendChild(titleCourseTable);
  targetDiv.appendChild(table);
}

//Specific student, course list and function for Intake January 2021

const studentsMDWDIntakeJanuary2021 = [
  {
    Name: "Naftali",
    lastname: "Hardhian",
    id: "A0006",
    email: "a0006@ciracollege.com",
  },
  {
    Name: "Carla",
    lastname: "Palafox",
    id: "A0014",
    email: "a0014@ciracollege.com",
  },
  {
    Name: "Fiorella",
    lastname: "Martinez",
    id: "A0015",
    email: "a0015@ciracollege.com",
  },
  {
    Name: "Skandar",
    lastname: "Soler",
    id: "A0020",
    email: "a0020@ciracollege.com",
  },
  {
    Name: "Constanza",
    lastname: "Parra",
    id: "A0021",
    email: "a0021@ciracollege.com",
  },
  {
    Name: "Saumya",
    lastname: "Joseph",
    id: "A0022",
    email: "a0022@ciracollege.com",
  },
];

const coursesMDWDIntakeJanuary2021 = [
  `<b>${MDWDListOfCourses[0]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[1]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[2]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[3]}</b> instructed by <b>${MDWDListOfTeachers[1]}</b><br>`,
  `<b>${MDWDListOfCourses[4]}</b> instructed by <b>${MDWDListOfTeachers[1]}</b><br>`,
  `<b>${MDWDListOfCourses[5]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[6]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[7]}</b> instructed by <b>${MDWDListOfTeachers[1]}</b><br>`,
  `<b>${MDWDListOfCourses[8]}</b> instructed by <b>${MDWDListOfTeachers[1]}</b><br>`,
  `<b>${MDWDListOfCourses[9]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[10]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[11]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[12]}</b> instructed by <b>${MDWDListOfTeachers[3]}</b><br>`,
  `<b>${MDWDListOfCourses[13]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[14]}</b> instructed by <b>${MDWDListOfTeachers[2]}</b><br>`,
  `<b>${MDWDListOfCourses[15]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[16]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[17]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b>`,
];

function MDWDIntakeJanuary2021() {
  //Status Intake

  const statusTitleMDWDIntakeJanuary2021 = document.querySelector(
    ".statusTitleMDWDIntakeJanuary2021"
  );
  const statusContentMDWDIntakeJanuary2021 = document.querySelector(
    ".statusContentMDWDIntakeJanuary2021"
  );

  // Check if h4 element already exists
  let h4 = statusTitleMDWDIntakeJanuary2021.querySelector("h4");
  if (!h4) {
    // Create the h4 element
    h4 = document.createElement("h4");
    h4.textContent = "Intake Status";
    statusTitleMDWDIntakeJanuary2021.appendChild(h4);
  }

  text = ``;

  if(today<new Date("2020-09-03")){
    text= `<b>This intake has not started yet.</b>`;
  }else {
    text= "<b>This Intake has concluded.</b>";
  }

  // Assign the text to new div
  statusContentMDWDIntakeJanuary2021.innerHTML = text;
  //Add styles to  new div
  statusContentMDWDIntakeJanuary2021.style.border = "2px solid";
  statusContentMDWDIntakeJanuary2021.style.marginTop = "1em";
  statusContentMDWDIntakeJanuary2021.style.padding = "10px";

  //Table Students

  // Create table element
  var table = document.createElement("table");

  // Create table header
  var thead = document.createElement("thead");
  var headerRow = document.createElement("tr");
  var headerCell1 = document.createElement("th");
  headerCell1.textContent = "Name";
  var headerCell2 = document.createElement("th");
  headerCell2.textContent = "Last Name";
  var headerCell3 = document.createElement("th");
  headerCell3.textContent = "ID";
  var headerCell4 = document.createElement("th");
  headerCell4.textContent = "Email";
  headerRow.appendChild(headerCell1);
  headerRow.appendChild(headerCell2);
  headerRow.appendChild(headerCell3);
  headerRow.appendChild(headerCell4);
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create table body
  var tbody = document.createElement("tbody");

  // Create table rows and cells
  for (var i = 0; i < studentsMDWDIntakeJanuary2021.length; i++) {
    var row = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");
    var cell4 = document.createElement("td");

    cell1.textContent = studentsMDWDIntakeJanuary2021[i].Name;
    cell2.textContent = studentsMDWDIntakeJanuary2021[i].lastname;
    cell3.textContent = studentsMDWDIntakeJanuary2021[i].id;
    cell4.textContent = studentsMDWDIntakeJanuary2021[i].email;

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    tbody.appendChild(row);
  }
  table.appendChild(tbody);

  // Create the title
  var titleStudentsTable = document.createElement("h4");
  titleStudentsTable.textContent = "List of Students";

  // Select the target div
  var targetDiv = document.getElementById("studentsMDWDIntakeJanuary2021");

  // Clear the target div content
  targetDiv.innerHTML = "";

  // Append the title and table to the target div
  targetDiv.appendChild(titleStudentsTable);
  targetDiv.appendChild(table);

  //Table Courses

  // Create table element
  var table = document.createElement("table");

  // Create table header
  var thead = document.createElement("thead");
  var headerRow = document.createElement("tr");
  var headerCell1 = document.createElement("th");
  headerCell1.textContent = "Courses";
  var headerCell2 = document.createElement("th");
  headerCell2.textContent = "Instructor";
  headerRow.appendChild(headerCell1);
  headerRow.appendChild(headerCell2);
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create table body
  var tbody = document.createElement("tbody");

  // Create table rows and cells
  for (var i = 0; i < MDWDListOfCourses.length; i++) {
    var row = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");

    cell1.textContent = MDWDListOfCourses[i];
    cell2.textContent = MDWDListOfTeachers[i];

    row.appendChild(cell1);
    row.appendChild(cell2);
    tbody.appendChild(row);
  }
  table.appendChild(tbody);

  // Create the title
  var titleCourseTable = document.createElement("h4");
  titleCourseTable.textContent = "List of Courses";

  // Select the target div
  var targetDiv = document.getElementById("coursesMDWDIntakeJanuary2021");

  // Clear the target div content
  targetDiv.innerHTML = "";

  // Append the title and table to the target div
  targetDiv.appendChild(titleCourseTable);
  targetDiv.appendChild(table);
}

//Specific student, course list and function for Intake September 2021

const studentsMDWDIntakeSeptember2021 = [
  {
    Name: "Lucie",
    lastname: "Sritrova",
    id: "A0028",
    email: "a0028@ciracollege.com",
  },
  {
    Name: "Samantha",
    lastname: "Villaseñor",
    id: "A0013",
    email: "a0013@ciracollege.com",
  },
  {
    Name: "Nicolas",
    lastname: "Riquelme",
    id: "A0026",
    email: "a0026@ciracollege.com",
  },
  {
    Name: "Barbara",
    lastname: "Barroso",
    id: "A0008",
    email: "a0008@ciracollege.com",
  },
  {
    Name: "Junting",
    lastname: "Su",
    id: "A0037",
    email: "a0037@ciracollege.com",
  },
];

const coursesMDWDIntakeSeptember2021 = [
  `<b>${MDWDListOfCourses[0]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[1]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[2]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[3]}</b> instructed by <b>${MDWDListOfTeachers[1]}</b><br>`,
  `<b>${MDWDListOfCourses[4]}</b> instructed by <b>${MDWDListOfTeachers[1]}</b><br>`,
  `<b>${MDWDListOfCourses[5]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[6]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[7]}</b> instructed by <b>${MDWDListOfTeachers[1]}</b><br>`,
  `<b>${MDWDListOfCourses[8]}</b> instructed by <b>${MDWDListOfTeachers[1]}</b><br>`,
  `<b>${MDWDListOfCourses[9]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[10]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[11]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[12]}</b> instructed by <b>${MDWDListOfTeachers[3]}</b><br>`,
  `<b>${MDWDListOfCourses[13]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[14]}</b> instructed by <b>${MDWDListOfTeachers[2]}</b><br>`,
  `<b>${MDWDListOfCourses[15]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[16]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[17]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b>`,
];

function MDWDIntakeSeptember2021() {
  //Status Intake

  const statusTitleMDWDIntakeSeptember2021 = document.querySelector(
    ".statusTitleMDWDIntakeSeptember2021"
  );
  const statusContentMDWDIntakeSeptember2021 = document.querySelector(
    ".statusContentMDWDIntakeSeptember2021"
  );

  // Check if h4 element already exists
  let h4 = statusTitleMDWDIntakeSeptember2021.querySelector("h4");
  if (!h4) {
    // Create the h4 element
    h4 = document.createElement("h4");
    h4.textContent = "Intake Status";
    statusTitleMDWDIntakeSeptember2021.appendChild(h4);
  }

  text = ``;

  if(today<new Date("2020-09-03")){
    text= `<b>This intake has not started yet.</b>`;
  }else {
    text= "<b>This Intake has concluded.</b>";
  }

  // Assign the text to new div
  statusContentMDWDIntakeSeptember2021.innerHTML = text;
  //Add styles to  new div
  statusContentMDWDIntakeSeptember2021.style.border = "2px solid";
  statusContentMDWDIntakeSeptember2021.style.marginTop = "1em";
  statusContentMDWDIntakeSeptember2021.style.padding = "10px";

  //Table Students

  // Create table element
  var table = document.createElement("table");

  // Create table header
  var thead = document.createElement("thead");
  var headerRow = document.createElement("tr");
  var headerCell1 = document.createElement("th");
  headerCell1.textContent = "Name";
  var headerCell2 = document.createElement("th");
  headerCell2.textContent = "Last Name";
  var headerCell3 = document.createElement("th");
  headerCell3.textContent = "ID";
  var headerCell4 = document.createElement("th");
  headerCell4.textContent = "Email";
  headerRow.appendChild(headerCell1);
  headerRow.appendChild(headerCell2);
  headerRow.appendChild(headerCell3);
  headerRow.appendChild(headerCell4);
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create table body
  var tbody = document.createElement("tbody");

  // Create table rows and cells
  for (var i = 0; i < studentsMDWDIntakeSeptember2021.length; i++) {
    var row = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");
    var cell4 = document.createElement("td");

    cell1.textContent = studentsMDWDIntakeSeptember2021[i].Name;
    cell2.textContent = studentsMDWDIntakeSeptember2021[i].lastname;
    cell3.textContent = studentsMDWDIntakeSeptember2021[i].id;
    cell4.textContent = studentsMDWDIntakeSeptember2021[i].email;

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    tbody.appendChild(row);
  }
  table.appendChild(tbody);

  // Create the title
  var titleStudentsTable = document.createElement("h4");
  titleStudentsTable.textContent = "List of Students";

  // Select the target div
  var targetDiv = document.getElementById("studentsMDWDIntakeSeptember2021");

  // Clear the target div content
  targetDiv.innerHTML = "";

  // Append the title and table to the target div
  targetDiv.appendChild(titleStudentsTable);
  targetDiv.appendChild(table);

  //Table Courses

  // Create table element
  var table = document.createElement("table");

  // Create table header
  var thead = document.createElement("thead");
  var headerRow = document.createElement("tr");
  var headerCell1 = document.createElement("th");
  headerCell1.textContent = "Courses";
  var headerCell2 = document.createElement("th");
  headerCell2.textContent = "Instructor";
  headerRow.appendChild(headerCell1);
  headerRow.appendChild(headerCell2);
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create table body
  var tbody = document.createElement("tbody");

  // Create table rows and cells
  for (var i = 0; i < MDWDListOfCourses.length; i++) {
    var row = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");

    cell1.textContent = MDWDListOfCourses[i];
    cell2.textContent = MDWDListOfTeachers[i];

    row.appendChild(cell1);
    row.appendChild(cell2);
    tbody.appendChild(row);
  }
  table.appendChild(tbody);

  // Create the title
  var titleCourseTable = document.createElement("h4");
  titleCourseTable.textContent = "List of Courses";

  // Select the target div
  var targetDiv = document.getElementById("coursesMDWDIntakeSeptember2021");

  // Clear the target div content
  targetDiv.innerHTML = "";

  // Append the title and table to the target div
  targetDiv.appendChild(titleCourseTable);
  targetDiv.appendChild(table);
}

 
//Specific student, course list and function for Intake January 2022

const studentsMDWDIntakeJanuary2022 = [
  {
    Name: "Oscar",
    lastname: "Hernandez",
    id: "A0024",
    email: "a0024@ciracollege.com",
  },
  {
    Name: "Angelica",
    lastname: "Mendoza",
    id: "A0030",
    email: "a0030@ciracollege.com",
  },
  {
    Name: "Eduardo",
    lastname: "Ramirez",
    id: "A0041",
    email: "a0041@ciracollege.com",
  },
  {
    Name: "Sofia",
    lastname: "Curi",
    id: "A0039",
    email: "a0039@ciracollege.com",
  },
  {
    Name: "Jiajunxian",
    lastname: "Luo",
    id: "A0045",
    email: "a0045@ciracollege.com",
  },
  {
    Name: "Yiyang",
    lastname: "Gu",
    id: "A0052",
    email: "a0052@ciracollege.com",
  },
  {
    Name: "Kwok",
    lastname: "Ricky Lee",
    id: "A0049",
    email: "a0049@ciracollege.com",
  },
  {
    Name: "Jessa",
    lastname: "Elias",
    id: "A0033",
    email: "a0033@ciracollege.com",
  },
];

const coursesMDWDIntakeJanuary2022 = [
  `<b>${MDWDListOfCourses[0]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[1]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[2]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[3]}</b> instructed by <b>${MDWDListOfTeachers[1]}</b><br>`,
  `<b>${MDWDListOfCourses[4]}</b> instructed by <b>${MDWDListOfTeachers[1]}</b><br>`,
  `<b>${MDWDListOfCourses[5]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[6]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[7]}</b> instructed by <b>${MDWDListOfTeachers[1]}</b><br>`,
  `<b>${MDWDListOfCourses[8]}</b> instructed by <b>${MDWDListOfTeachers[1]}</b><br>`,
  `<b>${MDWDListOfCourses[9]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[10]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[11]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[12]}</b> instructed by <b>${MDWDListOfTeachers[3]}</b><br>`,
  `<b>${MDWDListOfCourses[13]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[14]}</b> instructed by <b>${MDWDListOfTeachers[2]}</b><br>`,
  `<b>${MDWDListOfCourses[15]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[16]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[17]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b>`,
];

function MDWDIntakeJanuary2022() {
  //Status Intake

  const statusTitleMDWDIntakeJanuary2022 = document.querySelector(
    ".statusTitleMDWDIntakeJanuary2022"
  );
  const statusContentMDWDIntakeJanuary2022 = document.querySelector(
    ".statusContentMDWDIntakeJanuary2022"
  );

  // Check if h4 element already exists
  let h4 = statusTitleMDWDIntakeJanuary2022.querySelector("h4");
  if (!h4) {
    // Create the h4 element
    h4 = document.createElement("h4");
    h4.textContent = "Intake Status";
    statusTitleMDWDIntakeJanuary2022.appendChild(h4);
  }

  text = ``;

  if(today<new Date("2020-09-03")){
    text= `<b>This intake has not started yet.</b>`;
  }else {
    text= "<b>This Intake has concluded.</b>";
  }

  // Assign the text to new div
  statusContentMDWDIntakeJanuary2022.innerHTML = text;
  //Add styles to  new div
  statusContentMDWDIntakeJanuary2022.style.border = "2px solid";
  statusContentMDWDIntakeJanuary2022.style.marginTop = "1em";
  statusContentMDWDIntakeJanuary2022.style.padding = "10px";

  //Table Students

  // Create table element
  var table = document.createElement("table");

  // Create table header
  var thead = document.createElement("thead");
  var headerRow = document.createElement("tr");
  var headerCell1 = document.createElement("th");
  headerCell1.textContent = "Name";
  var headerCell2 = document.createElement("th");
  headerCell2.textContent = "Last Name";
  var headerCell3 = document.createElement("th");
  headerCell3.textContent = "ID";
  var headerCell4 = document.createElement("th");
  headerCell4.textContent = "Email";
  headerRow.appendChild(headerCell1);
  headerRow.appendChild(headerCell2);
  headerRow.appendChild(headerCell3);
  headerRow.appendChild(headerCell4);
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create table body
  var tbody = document.createElement("tbody");

  // Create table rows and cells
  for (var i = 0; i < studentsMDWDIntakeJanuary2022.length; i++) {
    var row = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");
    var cell4 = document.createElement("td");

    cell1.textContent = studentsMDWDIntakeJanuary2022[i].Name;
    cell2.textContent = studentsMDWDIntakeJanuary2022[i].lastname;
    cell3.textContent = studentsMDWDIntakeJanuary2022[i].id;
    cell4.textContent = studentsMDWDIntakeJanuary2022[i].email;

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    tbody.appendChild(row);
  }
  table.appendChild(tbody);

  // Create the title
  var titleStudentsTable = document.createElement("h4");
  titleStudentsTable.textContent = "List of Students";

  // Select the target div
  var targetDiv = document.getElementById("studentsMDWDIntakeJanuary2022");

  // Clear the target div content
  targetDiv.innerHTML = "";

  // Append the title and table to the target div
  targetDiv.appendChild(titleStudentsTable);
  targetDiv.appendChild(table);

  //Table Courses

  // Create table element
  var table = document.createElement("table");

  // Create table header
  var thead = document.createElement("thead");
  var headerRow = document.createElement("tr");
  var headerCell1 = document.createElement("th");
  headerCell1.textContent = "Courses";
  var headerCell2 = document.createElement("th");
  headerCell2.textContent = "Instructor";
  headerRow.appendChild(headerCell1);
  headerRow.appendChild(headerCell2);
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create table body
  var tbody = document.createElement("tbody");

  // Create table rows and cells
  for (var i = 0; i < MDWDListOfCourses.length; i++) {
    var row = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");

    cell1.textContent = MDWDListOfCourses[i];
    cell2.textContent = MDWDListOfTeachers[i];

    row.appendChild(cell1);
    row.appendChild(cell2);
    tbody.appendChild(row);
  }
  table.appendChild(tbody);

  // Create the title
  var titleCourseTable = document.createElement("h4");
  titleCourseTable.textContent = "List of Courses";

  // Select the target div
  var targetDiv = document.getElementById("coursesMDWDIntakeJanuary2022");

  // Clear the target div content
  targetDiv.innerHTML = "";

  // Append the title and table to the target div
  targetDiv.appendChild(titleCourseTable);
  targetDiv.appendChild(table);
}

//Specific student, course list and function for Intake May 2022

const studentsMDWDIntakeMay2022 = [
  {
    Name: "Laisa",
    lastname: "Gusi",
    id: "A0054",
    email: "a0054@ciracollege.com",
  },
  {
    Name: "Junko",
    lastname: "Ichikawa",
    id: "A0058",
    email: "a0058@ciracollege.com",
  },
  {
    Name: "Razan",
    lastname: "Ayman",
    id: "A0060",
    email: "a0060@ciracollege.com",
  },
  {
    Name: "Oluwaseun",
    lastname: "Adekunle",
    id: "A0027",
    email: "a0027@ciracollege.com",
  },
  {
    Name: "Bruna",
    lastname: "Rodrigues",
    id: "A0057",
    email: "a0057@ciracollege.com",
  },
  {
    Name: "Neify",
    lastname: "Zavaleta",
    id: "A0047",
    email: "a0047@ciracollege.com",
  },
];

const coursesMDWDIntakeMay2022 = [
  `<b>${MDWDListOfCourses[0]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[1]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[2]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[3]}</b> instructed by <b>${MDWDListOfTeachers[1]}</b><br>`,
  `<b>${MDWDListOfCourses[4]}</b> instructed by <b>${MDWDListOfTeachers[1]}</b><br>`,
  `<b>${MDWDListOfCourses[5]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[6]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[7]}</b> instructed by <b>${MDWDListOfTeachers[1]}</b><br>`,
  `<b>${MDWDListOfCourses[8]}</b> instructed by <b>${MDWDListOfTeachers[1]}</b><br>`,
  `<b>${MDWDListOfCourses[9]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[10]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[11]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[12]}</b> instructed by <b>${MDWDListOfTeachers[3]}</b><br>`,
  `<b>${MDWDListOfCourses[13]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[14]}</b> instructed by <b>${MDWDListOfTeachers[2]}</b><br>`,
  `<b>${MDWDListOfCourses[15]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[16]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b><br>`,
  `<b>${MDWDListOfCourses[17]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b>`,
];

function MDWDIntakeMay2022() {
  //Status Intake

  const statusTitleMDWDIntakeMay2022 = document.querySelector(
    ".statusTitleMDWDIntakeMay2022"
  );
  const statusContentMDWDIntakeMay2022 = document.querySelector(
    ".statusContentMDWDIntakeMay2022"
  );

  // Check if h4 element already exists
  let h4 = statusTitleMDWDIntakeMay2022.querySelector("h4");
  if (!h4) {
    // Create the h4 element
    h4 = document.createElement("h4");
    h4.textContent = "Intake Status";
    statusTitleMDWDIntakeMay2022.appendChild(h4);
  }

  text = ``;

  if(today<new Date("2020-09-03")){
    text= `<b>This intake has not started yet.</b>`;
  }else {
    text= "<b>This Intake has concluded.</b>";
  }

  // Assign the text to new div
  statusContentMDWDIntakeMay2022.innerHTML = text;
  //Add styles to  new div
  statusContentMDWDIntakeMay2022.style.border = "2px solid";
  statusContentMDWDIntakeMay2022.style.marginTop = "1em";
  statusContentMDWDIntakeMay2022.style.padding = "10px";

  //Table Students

  // Create table element
  var table = document.createElement("table");

  // Create table header
  var thead = document.createElement("thead");
  var headerRow = document.createElement("tr");
  var headerCell1 = document.createElement("th");
  headerCell1.textContent = "Name";
  var headerCell2 = document.createElement("th");
  headerCell2.textContent = "Last Name";
  var headerCell3 = document.createElement("th");
  headerCell3.textContent = "ID";
  var headerCell4 = document.createElement("th");
  headerCell4.textContent = "Email";
  headerRow.appendChild(headerCell1);
  headerRow.appendChild(headerCell2);
  headerRow.appendChild(headerCell3);
  headerRow.appendChild(headerCell4);
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create table body
  var tbody = document.createElement("tbody");

  // Create table rows and cells
  for (var i = 0; i < studentsMDWDIntakeMay2022.length; i++) {
    var row = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");
    var cell4 = document.createElement("td");

    cell1.textContent = studentsMDWDIntakeMay2022[i].Name;
    cell2.textContent = studentsMDWDIntakeMay2022[i].lastname;
    cell3.textContent = studentsMDWDIntakeMay2022[i].id;
    cell4.textContent = studentsMDWDIntakeMay2022[i].email;

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    tbody.appendChild(row);
  }
  table.appendChild(tbody);

  // Create the title
  var titleStudentsTable = document.createElement("h4");
  titleStudentsTable.textContent = "List of Students";

  // Select the target div
  var targetDiv = document.getElementById("studentsMDWDIntakeMay2022");

  // Clear the target div content
  targetDiv.innerHTML = "";

  // Append the title and table to the target div
  targetDiv.appendChild(titleStudentsTable);
  targetDiv.appendChild(table);

  //Table Courses

  // Create table element
  var table = document.createElement("table");

  // Create table header
  var thead = document.createElement("thead");
  var headerRow = document.createElement("tr");
  var headerCell1 = document.createElement("th");
  headerCell1.textContent = "Courses";
  var headerCell2 = document.createElement("th");
  headerCell2.textContent = "Instructor";
  headerRow.appendChild(headerCell1);
  headerRow.appendChild(headerCell2);
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create table body
  var tbody = document.createElement("tbody");

  // Create table rows and cells
  for (var i = 0; i < MDWDListOfCourses.length; i++) {
    var row = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");

    cell1.textContent = MDWDListOfCourses[i];
    cell2.textContent = MDWDListOfTeachers[i];

    row.appendChild(cell1);
    row.appendChild(cell2);
    tbody.appendChild(row);
  }
  table.appendChild(tbody);

  // Create the title
  var titleCourseTable = document.createElement("h4");
  titleCourseTable.textContent = "List of Courses";

  // Select the target div
  var targetDiv = document.getElementById("coursesMDWDIntakeMay2022");

  // Clear the target div content
  targetDiv.innerHTML = "";

  // Append the title and table to the target div
  targetDiv.appendChild(titleCourseTable);
  targetDiv.appendChild(table);
}

//Specific student, course list and function for Intake September 2022

const studentsMDWDIntakeSeptember2022 = [
  {
    Name: "Richard",
    lastname: "Datko",
    id: "A0053",
    email: "a0053@ciracollege.com",
  },
  {
    Name: "Wing",
    lastname: "Fok",
    id: "A0073",
    email: "a0073@ciracollege.com",
  },
  {
    Name: "Kwan",
    lastname: "Fong",
    id: "A0072",
    email: "a0072@ciracollege.com",
  },
  {
    Name: "Yuika",
    lastname: "Kudo",
    id: "A0091",
    email: "a0091@ciracollege.com",
  },
  {
    Name: "Hyeeun",
    lastname: "Lee",
    id: "A0083",
    email: "a0083@ciracollege.com",
  },
  {
    Name: "Hana",
    lastname: "Melekkhosravi",
    id: "A0064",
    email: "a0064@ciracollege.com",
  },
  {
    Name: "Sadra",
    lastname: "Melekkhosravi",
    id: "A0066",
    email: "a0066@ciracollege.com",
  },
  {
    Name: "Armando",
    lastname: "Medina",
    id: "A0069",
    email: "a0069@ciracollege.com",
  },
  {
    Name: "Hiu Hung",
    lastname: "Mok",
    id: "A0078",
    email: "a0078@ciracollege.com",
  },
  {
    Name: "Isabela",
    lastname: "Pinto",
    id: "A0046",
    email: "a0046@ciracollege.com",
  },
  {
    Name: "Zefan",
    lastname: "Sun",
    id: "A0068",
    email: "a0068@ciracollege.com",
  },
  {
    Name: "Cho Yau",
    lastname: "Wong",
    id: "A0063",
    email: "a0063@ciracollege.com",
  },
  {
    Name: "Suk Kwan",
    lastname: "Woo",
    id: "A0059",
    email: "a0059@ciracollege.com",
  },
];

const coursesMDWDIntakeSeptember2022 = [
  `<b>${MDWDListOfCourses[0]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b> from <b>September 12th,2022 to November 4th, 2022</b>. <br>`,
  `<b>${MDWDListOfCourses[1]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b> from <b>September 12th,2022 to October 17th, 2022</b>. <br>`,
  `<b>${MDWDListOfCourses[2]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b> from <b>October 21st,2022 to December 12th, 2022</b>. <br>`,
  `<b>${MDWDListOfCourses[3]}</b> instructed by <b>${MDWDListOfTeachers[1]}</b> from <b>November 7th,2022 to December 12th, 2022</b>. <br>`,
  `<b>${MDWDListOfCourses[4]}</b> instructed by <b>${MDWDListOfTeachers[1]}</b> from <b>January 4th,2023 to January 13th, 2023</b>. <br>`,
  `<b>${MDWDListOfCourses[5]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b> from <b>January 16th,2023 to February 6th, 2023</b>.<br>`,
  `<b>${MDWDListOfCourses[6]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b> from <b>February 8th,2023 to February 27th, 2023</b>.<br>`,
  `<b>${MDWDListOfCourses[7]}</b> instructed by <b>${MDWDListOfTeachers[1]}</b> from <b>February 27th,2023 to March 10th, 2023</b>.<br>`,
  `<b>${MDWDListOfCourses[8]}</b> instructed by <b>${MDWDListOfTeachers[1]}</b> from <b>March 10th,2023 to March 27th, 2023</b>. <br>`,
  `<b>${MDWDListOfCourses[9]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b> from <b>March 29th,2023 to April 24th, 2023</b>.<br>`,
  `<b>${MDWDListOfCourses[10]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b> from <b>April 26th,2023 to May 5th, 2023</b>.<br>`,
  `<b>${MDWDListOfCourses[11]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b> from <b>May 8th,2023 to May 17th, 2023</b>.<br>`,
  `<b>${MDWDListOfCourses[12]}</b> instructed by <b>${MDWDListOfTeachers[3]}</b> from <b>May 19th,2023 to May 31th, 2023</b>.<br>`,
  `<b>${MDWDListOfCourses[13]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b> from <b>June 2nd,2023 to June 23th, 2023</b>.<br>`,
  `<b>${MDWDListOfCourses[14]}</b> instructed by <b>${MDWDListOfTeachers[2]}</b>from <b>June 26th,2023 to July 17th, 2023</b>.<br>`,
  `<b>${MDWDListOfCourses[15]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b> from <b>July 19th,2023 to July 28th, 2023</b>.<br>`,
  `<b>${MDWDListOfCourses[16]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b> from <b>July 31st,2023 to August 23rd, 2023</b>.<br>`,
  `<b>${MDWDListOfCourses[17]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b> from <b>August 22th,2023 to August 31st, 2023</b>.`,
];

function MDWDIntakeSeptember2022() {
  //Status Intake

  const statusTitleMDWDIntakeSeptember2022 = document.querySelector(
    ".statusTitleMDWDIntakeSeptember2022"
  );
  const statusContentMDWDIntakeSeptember2022 = document.querySelector(
    ".statusContentMDWDIntakeSeptember2022"
  );

  // Check if h4 element already exists
  let h4 = statusTitleMDWDIntakeSeptember2022.querySelector("h4");
  if (!h4) {
    // Create the h4 element
    h4 = document.createElement("h4");
    h4.textContent = "Intake Status";
    statusTitleMDWDIntakeSeptember2022.appendChild(h4);
  }

  text = ``;
  const today = new Date();

  if (new Date(2022, 8, 12) <= today && today <= new Date(2022, 9, 20)) {
    text= `<b>${MDWDListOfCourses[0]}</b> and <b>${MDWDListOfCourses[1]}</b> are currently being instructed by <b>${MDWDListOfTeachers[0]}</b>.`;
  } else if (new Date(2022, 9, 21) <= today && today <= new Date(2022, 10, 4)) {
    text= `<b>${MDWDListOfCourses[0]}</b> and <b>${MDWDListOfCourses[2]}</b> are currently being instructed by <b>${MDWDListOfTeachers[0]}</b>.`;
  } else if (new Date(2022, 10, 5) <= today && today <= new Date(2023, 0, 3)) {
    text= `<b>${MDWDListOfCourses[2]}</b> and <b>${MDWDListOfCourses[3]}</b> are currently being instructed by <b>${MDWDListOfTeachers[0]}</b> and <b>${MDWDListOfTeachers[1]}</b> respectively.`;
  } else if (new Date(2022, 0, 4) <= today && today <= new Date(2023, 0, 15)) {
    text= `<b>${MDWDListOfCourses[4]}</b></b> is currently being instructed by <b>${MDWDListOfTeachers[1]}</b>.`;
  } else if (new Date(2023, 0, 16) <= today && today <= new Date(2023, 1, 7)) {
    text= `<b>${MDWDListOfCourses[5]}</b></b> is currently being instructed by <b>${MDWDListOfTeachers[0]}</b>.`;
  } else if (new Date(2023, 1, 8) <= today && today <= new Date(2023, 1, 27)) {
    text= `<b>${MDWDListOfCourses[6]}</b> is currently being instructed by <b>${MDWDListOfTeachers[0]}</b>.`;
  } else if (new Date(2023, 1, 27) <= today && today <= new Date(2023, 2, 10)) {
    text= `<b>${MDWDListOfCourses[7]}</b> is currently being instructed by <b>${MDWDListOfTeachers[1]}</b>.`;
  } else if (new Date(2023, 3, 10) <= today && today <= new Date(2023, 3, 28)) {
    text= `<b>${MDWDListOfCourses[8]}</b> is currently being instructed by <b>${MDWDListOfTeachers[1]}</b>.`;
  } else if (new Date(2023, 2, 29) <= today && today <= new Date(2023, 3, 25)) {
    text= `<b>${MDWDListOfCourses[9]}</b> is currently being instructed by <b>${MDWDListOfTeachers[0]}</b>.`;
  } else if (new Date(2023, 3, 26) <= today && today <= new Date(2023, 4, 5)) {
    text= `<b>${MDWDListOfCourses[10]}</b> is currently being instructed by <b>${MDWDListOfTeachers[0]}</b>.`;
  } else if (new Date(2023, 4, 6) <= today && today <= new Date(2023, 4, 17)) {
    text= `<b>${MDWDListOfCourses[11]}</b> is currently being instructed by <b>${MDWDListOfTeachers[0]}</b>.`;
  } else if (new Date(2023, 4, 18) <= today && today <= new Date(2023, 4, 31)) {
    text= `<b>${MDWDListOfCourses[12]}</b> is currently being instructed by <b>${MDWDListOfTeachers[3]}</b>.`;
  } else if (new Date(2023, 5, 1) <= today && today <= new Date(2023, 5, 23)) {
    text= `<b>${MDWDListOfCourses[13]}</b> is currently being instructed by <b>${MDWDListOfTeachers[0]}</b>.`;
  } else if (new Date("2023-06-24") <= today && today <= new Date("2023-07-18")) {
    text= `<b>${MDWDListOfCourses[14]}</b> is currently being instructed by <b>${MDWDListOfTeachers[14]}</b>.`;
  } else if (new Date("2023-07-19") <= today && today <= new Date("2023-07-28")) {
    text= `<b>${MDWDListOfCourses[15]}</b> is currently being instructed by <b>${MDWDListOfTeachers[0]}</b>.`;
  } else if (new Date("2023-07-29") <= today && today <= new Date("2023-08-23")) {
    text= `<b>${MDWDListOfCourses[16]}</b> is currently being instructed by <b>${MDWDListOfTeachers[0]}</b>.`;
  } else if (new Date("2023-08-22") <= today && today <= new Date("2023-08-31")) {
    text= `<b>${MDWDListOfCourses[17]}</b> is currently being instructed by <b>${MDWDListOfTeachers[0]}</b>.`;
  } else {
    text= "<b>This Intake has concluded.</b>";
  }

  // Assign the text to div2
  statusContentMDWDIntakeSeptember2022.innerHTML = text;
  statusContentMDWDIntakeSeptember2022.style.border = "2px solid";
  statusContentMDWDIntakeSeptember2022.style.marginTop = "1em";
  statusContentMDWDIntakeSeptember2022.style.padding = "10px";

  //Table Students

  // Create table element
  var table = document.createElement("table");

  // Create table header
  var thead = document.createElement("thead");
  var headerRow = document.createElement("tr");
  var headerCell1 = document.createElement("th");
  headerCell1.textContent = "Name";
  var headerCell2 = document.createElement("th");
  headerCell2.textContent = "Last Name";
  var headerCell3 = document.createElement("th");
  headerCell3.textContent = "ID";
  var headerCell4 = document.createElement("th");
  headerCell4.textContent = "Email";
  headerRow.appendChild(headerCell1);
  headerRow.appendChild(headerCell2);
  headerRow.appendChild(headerCell3);
  headerRow.appendChild(headerCell4);
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create table body
  var tbody = document.createElement("tbody");

  // Create table rows and cells
  for (var i = 0; i < studentsMDWDIntakeSeptember2022.length; i++) {
    var row = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");
    var cell4 = document.createElement("td");

    cell1.textContent = studentsMDWDIntakeSeptember2022[i].Name;
    cell2.textContent = studentsMDWDIntakeSeptember2022[i].lastname;
    cell3.textContent = studentsMDWDIntakeSeptember2022[i].id;
    cell4.textContent = studentsMDWDIntakeSeptember2022[i].email;

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    tbody.appendChild(row);
  }
  table.appendChild(tbody);

  // Create the title
  var titleStudentsTable = document.createElement("h4");
  titleStudentsTable.textContent = "List of Students";

  // Select the target div
  var targetDiv = document.getElementById("studentsMDWDIntakeSeptember2022");

  // Clear the target div content
  targetDiv.innerHTML = "";

  // Append the title and table to the target div
  targetDiv.appendChild(titleStudentsTable);
  targetDiv.appendChild(table);

  //Table Courses

  // Create table element
  var table = document.createElement("table");

  // Create table header
  var thead = document.createElement("thead");
  var headerRow = document.createElement("tr");
  var headerCell1 = document.createElement("th");
  headerCell1.textContent = "Courses";
  var headerCell2 = document.createElement("th");
  headerCell2.textContent = "Instructor";
  headerRow.appendChild(headerCell1);
  headerRow.appendChild(headerCell2);
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create table body
  var tbody = document.createElement("tbody");

  // Create table rows and cells
  for (var i = 0; i < MDWDListOfCourses.length; i++) {
    var row = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");

    cell1.textContent = MDWDListOfCourses[i];
    cell2.textContent = MDWDListOfTeachers[i];

    row.appendChild(cell1);
    row.appendChild(cell2);
    tbody.appendChild(row);
  }
  table.appendChild(tbody);

  // Create the title
  var titleCourseTable = document.createElement("h4");
  titleCourseTable.textContent = "List of Courses";

  // Select the target div
  var targetDiv = document.getElementById("coursesMDWDIntakeSeptember2022");

  // Clear the target div content
  targetDiv.innerHTML = "";

  // Append the title and table to the target div
  targetDiv.appendChild(titleCourseTable);
  targetDiv.appendChild(table);
}

//Specific student, course list and function for Intake January 2023

const studentsMDWDIntakeJanuary2023 = [
  {
    Name: "Wing Sum Wince",
    lastname: "Chan",
    id: "A0099",
    email: "a0099@ciracollege.com",
  },
  {
    Name: "Hei Wen",
    lastname: "Chen",
    id: "A0095",
    email: "a0095@ciracollege.com",
  },
  {
    Name: "Wai Shun",
    lastname: "Cheung",
    id: "A0094",
    email: "a0094@ciracollege.com",
  },
  {
    Name: "Jeeun",
    lastname: "Jang",
    id: "A0082",
    email: "a0082@ciracollege.com",
  },
  {
    Name: "Hyeyoon",
    lastname: "Lee",
    id: "A0087",
    email: "a0087@ciracollege.com",
  },
  {
    Name: "Hei Yin",
    lastname: "Lo",
    id: "A0100",
    email: "a0100@ciracollege.com",
  },
  {
    Name: "Ching Yan",
    lastname: "Lui",
    id: "A0076",
    email: "a0076@ciracollege.com",
  },
  {
    Name: "Ho Lam Brandon",
    lastname: "Mak",
    id: "A0070",
    email: "a0070@ciracollege.com",
  },
  {
    Name: "Akifumi",
    lastname: "Murakami",
    id: "A0074",
    email: "a0074@ciracollege.com",
  },
  {
    Name: "Tsz Ching Nicola",
    lastname: "Ng",
    id: "A0084",
    email: "a0084@ciracollege.com",
  },
  {
    Name: "Mariya",
    lastname: "Ramesh",
    id: "A0098",
    email: "a0098@ciracollege.com",
  },
  {
    Name: "Larissa",
    lastname: "Sanchez",
    id: "A0090",
    email: "a0090@ciracollege.com",
  },
  {
    Name: "Ho Wun Hawood",
    lastname: "Tong",
    id: "A0132",
    email: "a0132@ciracollege.com",
  },
  {
    Name: "Wai Hang",
    lastname: "Wong",
    id: "A0088",
    email: "a0088@ciracollege.com",
  },
  {
    Name: "Yuxi",
    lastname: "Yang",
    id: "A0086",
    email: "a0086@ciracollege.com",
  },
  {
    Name: "Zhang",
    lastname: "Zhang",
    id: "A0077",
    email: "a0077@ciracollege.com",
  },
];


const coursesMDWDIntakeJanuary2023 = [
  `<b>${MDWDListOfCourses[0]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b> from <b>January 3rd,2023 to February 14th, 2023</b>. <br>`,
  `<b>${MDWDListOfCourses[1]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b> from <b>January 3rd,2023 to February 2nd, 2023</b>.<br>`,
  `<b>${MDWDListOfCourses[2]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b> from <b>February 7th,2023 to March 28th, 2023</b>.<br>`,
  `<b>${MDWDListOfCourses[3]}</b> instructed by <b>${MDWDListOfTeachers[1]}</b> from <b>February 16th,2023 to March 21st, 2023</b>.<br>`,
  `<b>${MDWDListOfCourses[4]}</b> instructed by <b>${MDWDListOfTeachers[1]}</b> from <b>March 24th,2023 to April 20th, 2023</b>.<br>`,
  `<b>${MDWDListOfCourses[5]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b> from <b>March 30th,2023 to June 6th, 2023</b>.<br>`,
  `<b>${MDWDListOfCourses[6]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b> from <b>April 27th,2023 to June 15th, 2023</b>.<br>`,
  `<b>${MDWDListOfCourses[7]}</b> instructed by <b>${MDWDListOfTeachers[1]}</b> from <b>June 8th,2023 to July 11th, 2023</b>.<br>`,
  `<b>${MDWDListOfCourses[8]}</b> instructed by <b>${MDWDListOfTeachers[1]}</b> from <b>June 20th,2023 to August 8th, 2023</b>.<br>`,
  `<b>${MDWDListOfCourses[9]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b> from <b>July 13th,2023 to September 18th, 2023</b>.<br>`,
  `<b>${MDWDListOfCourses[10]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b> from <b>August 10th,2023 to September 13th, 2023</b>.<br>`,
  `<b>${MDWDListOfCourses[11]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b> from <b>September 15th,2023 to October 6th, 2023</b>.<br>`,
  `<b>${MDWDListOfCourses[12]}</b> instructed by <b>${MDWDListOfTeachers[3]}</b> from <b>September 20th,2023 to October 13th, 2023</b>.<br>`,
  `<b>${MDWDListOfCourses[13]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b> from <b>October 11th,2023 to November 17th, 2023</b>.<br>`,
  `<b>${MDWDListOfCourses[14]}</b> instructed by <b>${MDWDListOfTeachers[2]}</b> from <b>October 16th,2023 to October 17th, 2023</b>.<br>`,
  `<b>${MDWDListOfCourses[15]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b> from <b>November 20th,2023 to November 29th, 2023</b>.<br>`,
  `<b>${MDWDListOfCourses[16]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b> from <b>November 21st,2023 to December 15th, 2023</b>.<br>`,
  `<b>${MDWDListOfCourses[17]}</b> instructed by <b>${MDWDListOfTeachers[0]}</b> from <b>December 18th,2023 to December 28th, 2023</b>.`,
];

function MDWDIntakeJanuary2023() {
 
  //Status Intake

  const statusTitleMDWDIntakeJanuary2023 = document.querySelector(
    ".statusTitleMDWDIntakeJanuary2023"
  );
  const statusContentMDWDIntakeJanuary2023 = document.querySelector(
    ".statusContentMDWDIntakeJanuary2023"
  );

  // Check if h4 element already exists
  let h4 = statusTitleMDWDIntakeJanuary2023.querySelector("h4");
  if (!h4) {
    // Create the h4 element
    h4 = document.createElement("h4");
    h4.textContent = "Intake Status";
    statusTitleMDWDIntakeJanuary2023.appendChild(h4);
  }

  text = ``;
  const today = new Date();
  if (new Date(2023, 0, 3) <= today && today <= new Date(2023, 1, 2)) {
    text += `<b>${MDWDListOfCourses[0]}</b> and <b>${MDWDListOfCourses[1]}</b> are currently being instructed by <b>${MDWDListOfTeachers[0]}</b>. <br><br>`;
  } else if (new Date(2023, 1, 3) <= today && today <= new Date(2023, 1, 14)) {
    text += `<b>${MDWDListOfCourses[0]}</b> and <b>${MDWDListOfCourses[2]}</b> are currently being instructed by <b>${MDWDListOfTeachers[0]}</b>. <br><br>`;
  } else if (new Date(2023, 1, 15) <= today && today <= new Date(2023, 2, 21)) {
    text += `<b>${MDWDListOfCourses[2]}</b> and <b>${MDWDListOfCourses[3]}</b> are currently being instructed by <b>${MDWDListOfTeachers[0]}</b> and <b>${MDWDListOfTeachers[1]}</b> respectively. <br><br>`;
  } else if (new Date(2023, 2, 22) <= today && today <= new Date(2023, 2, 28)) {
    text += `<b>${MDWDListOfCourses[2]}</b> and <b>${MDWDListOfCourses[4]}</b> are currently being instructed by <b>${MDWDListOfTeachers[0]}</b> and <b>${MDWDListOfTeachers[1]}</b> respectively. <br><br>`;
  } else if (new Date(2023, 2, 29) <= today && today <= new Date(2023, 3, 25)) {
    text += `<b>${MDWDListOfCourses[4]}</b> and <b>${MDWDListOfCourses[5]}</b> are currently being instructed by <b>${MDWDListOfTeachers[1]}</b> and <b>${MDWDListOfTeachers[2]}</b> respectively. <br><br>`;
  } else if (new Date(2023, 3, 26) <= today && today <= new Date(2023, 3, 6)) {
    text += `<b>${MDWDListOfCourses[5]}</b> and <b>${MDWDListOfCourses[6]}</b> are currently being instructed by <b>${MDWDListOfTeachers[0]}</b>. <br><br>`;
  } else if (new Date(2023, 5, 7) <= today && today <= new Date(2023, 5, 15)) {
    text += `<b>${MDWDListOfCourses[6]}</b> and <b>${MDWDListOfCourses[7]}</b> are currently being instructed by <b>${MDWDListOfTeachers[0]}</b> and <b>${MDWDListOfTeachers[1]}</b> respectively. <br><br>`;
  } else if (new Date(2023, 5, 16) <= today && today <= new Date(2023, 6, 11)) {
    text += `<b>${MDWDListOfCourses[7]}</b> and <b>${MDWDListOfCourses[8]}</b> are currently being instructed by <b>${MDWDListOfTeachers[1]}</b>. <br><br>`;
  } else if (new Date(2023, 6, 12) <= today && today <= new Date(2023, 7, 8)) {
    text += `<b>${MDWDListOfCourses[8]}</b> and <b>${MDWDListOfCourses[9]}</b> are currently being instructed by <b>${MDWDListOfTeachers[1]}</b> and <b>${MDWDListOfTeachers[0]}</b> respectively. <br><br>`;
  } else if (new Date(2023, 7, 9) <= today && today <= new Date(2023, 8, 13)) {
    text += `<b>${MDWDListOfCourses[9]}</b>and <b>${MDWDListOfCourses[10]}</b> are currently being instructed by <b>${MDWDListOfTeachers[0]}</b>. <br><br>`;
  } else if (new Date(2023, 8, 14) <= today && today <= new Date(2023, 8, 18)) {
    text += `<b>${MDWDListOfCourses[9]}</b> and <b>${MDWDListOfCourses[11]}</b> are currently being instructed by <b>${MDWDListOfTeachers[0]}</b>. <br><br>`;
  } else if (new Date(2023, 8, 19) <= today && today <= new Date(2023, 9, 10)) {
    text += `<b>${MDWDListOfCourses[11]}</b> and <b>${MDWDListOfCourses[12]}</b are currently being instructed by <b>${MDWDListOfTeachers[0]}</b> and <b>${MDWDListOfTeachers[3]}</b> respectively. <br><br>`;
  } else if (new Date(2023, 9, 11) <= today && today <= new Date(2023, 9, 15)) {
    text += `<b>${MDWDListOfCourses[12]}</b> and <b>${MDWDListOfCourses[13]}</b> are currently being instructed by <b>${MDWDListOfTeachers[3]}</b> and <b>${MDWDListOfTeachers[0]}</b> respectively. <br><br>`;
  } else if (
    new Date(2023, 9, 16) <= today &&
    today <= new Date(2023, 10, 19)
  ) {
    text += `<b>${MDWDListOfCourses[13]}</b> and <b>${MDWDListOfCourses[14]}</b> are currently being instructed by <b>${MDWDListOfTeachers[0]}</b> and <b>${MDWDListOfTeachers[2]}</b> respectively. <br><br>`;
  } else if (
    new Date(2023, 10, 20) <= today &&
    today <= new Date(2023, 10, 29)
  ) {
    text += `<b>${MDWDListOfCourses[15]}</b> and <b>${MDWDListOfCourses[16]}</b> are currently being instructed by <b>${MDWDListOfTeachers[0]}</b>. <br><br>`;
  } else if (
    new Date(2023, 10, 30) <= today &&
    today <= new Date(2023, 11, 15)
  ) {
    text += `<b>${MDWDListOfCourses[16]}</b> is currently being instructed by <b>${MDWDListOfTeachers[0]}</b>. <br><br>`;
  } else if (
    new Date(2023, 11, 16) <= today &&
    today <= new Date(2023, 11, 29)
  ) {
    text += `<b>${MDWDListOfCourses[17]}</b> is currently being instructed by <b>${MDWDListOfTeachers[0]}</b>. <br><br>`;
  } else {
    text += "<b>This Intake has finished.</b> <br><br>";
  }


  // Assign the text to div2
  statusContentMDWDIntakeJanuary2023.innerHTML = text;
  statusContentMDWDIntakeJanuary2023.style.border = "2px solid";
  statusContentMDWDIntakeJanuary2023.style.marginTop = "1em";
  statusContentMDWDIntakeJanuary2023.style.padding = "10px";



  //Table Students

  // Create table element
  var table = document.createElement("table");

  // Create table header
  var thead = document.createElement("thead");
  var headerRow = document.createElement("tr");
  var headerCell1 = document.createElement("th");
  headerCell1.textContent = "Name";
  var headerCell2 = document.createElement("th");
  headerCell2.textContent = "Last Name";
  var headerCell3 = document.createElement("th");
  headerCell3.textContent = "ID";
  var headerCell4 = document.createElement("th");
  headerCell4.textContent = "Email";
  headerRow.appendChild(headerCell1);
  headerRow.appendChild(headerCell2);
  headerRow.appendChild(headerCell3);
  headerRow.appendChild(headerCell4);
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create table body
  var tbody = document.createElement("tbody");

  // Create table rows and cells
  for (var i = 0; i < studentsMDWDIntakeJanuary2023.length; i++) {
    var row = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");
    var cell4 = document.createElement("td");

    cell1.textContent = studentsMDWDIntakeJanuary2023[i].Name;
    cell2.textContent = studentsMDWDIntakeJanuary2023[i].lastname;
    cell3.textContent = studentsMDWDIntakeJanuary2023[i].id;
    cell4.textContent = studentsMDWDIntakeJanuary2023[i].email;

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    tbody.appendChild(row);
  }
  table.appendChild(tbody);

  // Create the title
  var titleStudentsTable = document.createElement("h4");
  titleStudentsTable.textContent = "List of Students";

  // Select the target div
  var targetDiv = document.getElementById("studentsMDWDIntakeJanuary2023");

  // Clear the target div content
  targetDiv.innerHTML = "";

  // Append the title and table to the target div
  targetDiv.appendChild(titleStudentsTable);
  targetDiv.appendChild(table);

  //Table Courses

  // Create table element
  var table = document.createElement("table");

  // Create table header
  var thead = document.createElement("thead");
  var headerRow = document.createElement("tr");
  var headerCell1 = document.createElement("th");
  headerCell1.textContent = "Courses";
  var headerCell2 = document.createElement("th");
  headerCell2.textContent = "Instructor";
  headerRow.appendChild(headerCell1);
  headerRow.appendChild(headerCell2);
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create table body
  var tbody = document.createElement("tbody");

  // Create table rows and cells
  for (var i = 0; i < MDWDListOfCourses.length; i++) {
    var row = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");

    cell1.textContent = MDWDListOfCourses[i];
    cell2.textContent = MDWDListOfTeachers[i];

    row.appendChild(cell1);
    row.appendChild(cell2);
    tbody.appendChild(row);
  }
  table.appendChild(tbody);

  // Create the title
  var titleCourseTable = document.createElement("h4");
  titleCourseTable.textContent = "List of Courses";

  // Select the target div
  var targetDiv = document.getElementById("coursesMDWDIntakeJanuary2023");

  // Clear the target div content
  targetDiv.innerHTML = "";

  // Append the title and table to the target div
  targetDiv.appendChild(titleCourseTable);
  targetDiv.appendChild(table);
}

//BUSINESS DIPLOMA

const BUSIListOfTeachers = ["Kamal Gill"];

const BUSIListOfIntakes = ["September 2023"];

const BUSIListOfCourses = [
  "BUSI 1000 | Introduction to Financial Accounting",
  "BUSI 1001 | Business Mathematics",
  "BUSI 2000 | Microeconomic",
  "BUSI 2001 | Business Law",
  "BUSI 2002 | Business Statistics",
  "BUSI 2003 | Macroeconomics",
  "BUSI 2004 | Introductory Marketing",
  "BUSI 2005 | Introduction to Managerial Accounting",
  "BUSI 2006 | Business and Technical Communication",
  "BUSI 2007 | Organizational Behaviour",
  "BUSI 2008 | Introduction to Managerial Finance",
  "BUSI 2009 | Introduction to Economics for Managers",
  "BUSI 2010 | Entrepreneurship",
  "BUSI 3000 | Operations Management",
  "BUSI 3001 | Decision Analysis",
  "BUSI 3002 | Project Management",
  "BUSI 3003 | Management of Technology",
];

const studentsBUSIIntakeSeptember2023 = [
  {
    Name: "XX",
    lastname: "XX",
    id: "A0099",
    email: "a0099@ciracollege.com",
  },
  {
    Name: "XX XX",
    lastname: "XX",
    id: "A0095",
    email: "a0095@ciracollege.com",
  },
  {
    Name: "XX XX",
    lastname: "XX",
    id: "A0094",
    email: "a0094@ciracollege.com",
  },
  {
    Name: "XX",
    lastname: "XX",
    id: "A0082",
    email: "a0082@ciracollege.com",
  },
  {
    Name: "XX",
    lastname: "XX",
    id: "A0087",
    email: "a0087@ciracollege.com",
  },
  {
    Name: "XX XX",
    lastname: "XX",
    id: "A0100",
    email: "a0100@ciracollege.com",
  },
  {
    Name: "XX XX",
    lastname: "XX",
    id: "A0076",
    email: "a0076@ciracollege.com",
  },
  {
    Name: "XX XX XX",
    lastname: "XX",
    id: "A0070",
    email: "a0070@ciracollege.com",
  },
  {
    Name: "XX",
    lastname: "XX",
    id: "A0074",
    email: "a0074@ciracollege.com",
  },
  {
    Name: "XX XX XX",
    lastname: "XX",
    id: "A0084",
    email: "a0084@ciracollege.com",
  },
  {
    Name: "XX",
    lastname: "XX",
    id: "A0098",
    email: "a0098@ciracollege.com",
  },
  {
    Name: "XX",
    lastname: "XX",
    id: "A0090",
    email: "a0090@ciracollege.com",
  },
  {
    Name: "XX XX XX",
    lastname: "XX",
    id: "A0132",
    email: "a0132@ciracollege.com",
  },
  {
    Name: "XX XX",
    lastname: "XX",
    id: "A0088",
    email: "a0088@ciracollege.com",
  },
  {
    Name: "XX",
    lastname: "XX",
    id: "A0086",
    email: "a0086@ciracollege.com",
  },
  {
    Name: "XX",
    lastname: "XX",
    id: "A0077",
    email: "a0077@ciracollege.com",
  },
];
// Status general of intakes

let BUSItoday = new Date();
let BUSIactiveIntakes = "";

if (new Date("2023-09-03") <= BUSItoday && BUSItoday <= new Date("2024-08-31")) {
  BUSIactiveIntakes = `${BUSIListOfIntakes[0]}`;
} else {
  BUSIactiveIntakes = "No active Intake yet";
}

document.getElementById(
  "BUSIintakeOngoing"
).innerHTML = `Intakes ongoing: ${BUSIactiveIntakes} `;

//Function BUSI SEPTEMBER 2023

function BUSIIntakeSeptember2023() {
  //Status Intake

  const statusTitleBUSIIntakeSeptember2023 = document.querySelector(
    ".statusTitleBUSIIntakeSeptember2023"
  );
  const statusContentBUSIIntakeSeptember2023 = document.querySelector(
    ".statusContentBUSIIntakeSeptember2023"
  );

  // Check if h4 element already exists
  let h4 = statusTitleBUSIIntakeSeptember2023.querySelector("h4");
  if (!h4) {
    // Create the h4 element
    h4 = document.createElement("h4");
    h4.textContent = "Intake Status";
    statusTitleBUSIIntakeSeptember2023.appendChild(h4);
  }

  text = ``;

  if(today<new Date("2023-09-03")){
    text= `<b>This intake has not started yet.</b>`;
  }else {
    text= "<b>This Intake has concluded.</b>";
  }

  // Assign the text to new div
  statusContentBUSIIntakeSeptember2023.innerHTML = text;
  //Add styles to  new div
  statusContentBUSIIntakeSeptember2023.style.border = "2px solid";
  statusContentBUSIIntakeSeptember2023.style.marginTop = "1em";
  statusContentBUSIIntakeSeptember2023.style.padding = "10px";

  //Table Students

  // Create table element
  var table = document.createElement("table");

  // Create table header
  var thead = document.createElement("thead");
  var headerRow = document.createElement("tr");
  var headerCell1 = document.createElement("th");
  headerCell1.textContent = "Name";
  var headerCell2 = document.createElement("th");
  headerCell2.textContent = "Last Name";
  var headerCell3 = document.createElement("th");
  headerCell3.textContent = "ID";
  var headerCell4 = document.createElement("th");
  headerCell4.textContent = "Email";
  headerRow.appendChild(headerCell1);
  headerRow.appendChild(headerCell2);
  headerRow.appendChild(headerCell3);
  headerRow.appendChild(headerCell4);
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create table body
  var tbody = document.createElement("tbody");

  // Create table rows and cells
  for (var i = 0; i < studentsBUSIIntakeSeptember2023.length; i++) {
    var row = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var cell3 = document.createElement("td");
    var cell4 = document.createElement("td");

    cell1.textContent = studentsBUSIIntakeSeptember2023[i].Name;
    cell2.textContent = studentsBUSIIntakeSeptember2023[i].lastname;
    cell3.textContent = studentsBUSIIntakeSeptember2023[i].id;
    cell4.textContent = studentsBUSIIntakeSeptember2023[i].email;

    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    tbody.appendChild(row);
  }
  table.appendChild(tbody);

  // Create the title
  var titleStudentsTable = document.createElement("h4");
  titleStudentsTable.textContent = "List of Students";

  // Select the target div
  var targetDiv = document.getElementById("studentsBUSIIntakeSeptember2023");

  // Clear the target div content
  targetDiv.innerHTML = "";

  // Append the title and table to the target div
  targetDiv.appendChild(titleStudentsTable);
  targetDiv.appendChild(table);

  //Table Courses

  // Create table element
  var table = document.createElement("table");

  // Create table header
  var thead = document.createElement("thead");
  var headerRow = document.createElement("tr");
  var headerCell1 = document.createElement("th");
  headerCell1.textContent = "Courses";
  var headerCell2 = document.createElement("th");
  headerCell2.textContent = "Instructor";
  headerRow.appendChild(headerCell1);
  headerRow.appendChild(headerCell2);
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create table body
  var tbody = document.createElement("tbody");

  // Create table rows and cells
  for (var i = 0; i < BUSIListOfCourses.length; i++) {
    var row = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");

    cell1.textContent = BUSIListOfCourses[i];
    cell2.textContent = BUSIListOfTeachers[i % BUSIListOfTeachers.length];

    row.appendChild(cell1);
    row.appendChild(cell2);
    tbody.appendChild(row);
  }
  table.appendChild(tbody);

  // Create the title
  var titleCourseTable = document.createElement("h4");
  titleCourseTable.textContent = "List of Courses";

  // Select the target div
  var targetDiv = document.getElementById("coursesBUSIIntakeSeptember2023");

  // Clear the target div content
  targetDiv.innerHTML = "";

  // Append the title and table to the target div
  targetDiv.appendChild(titleCourseTable);
  targetDiv.appendChild(table);
}


