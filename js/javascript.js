//List of teachers, courses and intakes

let MDWDListOfTeachers = [
  "Daryl Askey",
  "Daniel Wedderien",
  "Nazanin Hashemian",
  "Thomas Jones",
  "Daniel García",
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
  let text = `Intake Status: <br>`;

  text += "<b>This Intake has finished</b> <br><br><br>";

  let contentMDWDIntake2020 = `<b>List of the Students ${MDWDListOfIntakes[0]}</b>  <br><br>`;

  for (let i = 0; i < MDWDstudentsIntake2020.length; i++) {
    contentMDWDIntake2020 +=
      "<b>Student Name: </b>" + MDWDstudentsIntake2020[i].Name + " ";
    contentMDWDIntake2020 += MDWDstudentsIntake2020[i].lastname + "<br>";
    contentMDWDIntake2020 +=
      "<b>Student ID: </b>" + MDWDstudentsIntake2020[i].id + "<br>";
    contentMDWDIntake2020 +=
      "<b>Student Email: </b>" +
      MDWDstudentsIntake2020[i].email +
      "<br>" +
      "<br>";
  }

  contentMDWDIntake2020 += `<br><br><b>List of courses and Instructors ${MDWDListOfIntakes[0]}</b> <br><br>`;

  for (let course of MDWDcoursesIntake2020) {
    contentMDWDIntake2020 += course + "<br>";
  }

  return text + contentMDWDIntake2020;
}
document.getElementById("contentMDWDIntake2020").innerHTML = MDWDIntake2020();

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
  let text = `Intake Status: <br>`;

  text += "<b>This Intake has finished</b> <br><br><br>";

  let contentMDWDIntakeJanuary2021 = `<b>List of the Students ${MDWDListOfIntakes[1]}</b>  <br><br>`;

  for (let i = 0; i < studentsMDWDIntakeJanuary2021.length; i++) {
    contentMDWDIntakeJanuary2021 +=
      "<b>Student Name: </b>" + studentsMDWDIntakeJanuary2021[i].Name + " ";
    contentMDWDIntakeJanuary2021 +=
      studentsMDWDIntakeJanuary2021[i].lastname + "<br>";
    contentMDWDIntakeJanuary2021 +=
      "<b>Student ID: </b>" + studentsMDWDIntakeJanuary2021[i].id + "<br>";
    contentMDWDIntakeJanuary2021 +=
      "<b>Student Email: </b>" +
      studentsMDWDIntakeJanuary2021[i].email +
      "<br>" +
      "<br>";
  }

  contentMDWDIntakeJanuary2021 += `<br><br><b>List of courses and Instructors ${MDWDListOfIntakes[1]}</b> <br><br>`;

  for (let course of coursesMDWDIntakeJanuary2021) {
    contentMDWDIntakeJanuary2021 += course + "<br>";
  }

  return text + contentMDWDIntakeJanuary2021;
}
document.getElementById("contentMDWDIntakeJanuary2021").innerHTML =
  MDWDIntakeJanuary2021();

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
  let text = `Intake Status: <br>`;

  text += "<b>This Intake has finished</b> <br><br><br>";

  let contentMDWDIntakeSeptember2021 = `<b>List of the Students ${MDWDListOfIntakes[2]}</b>  <br><br>`;

  for (let i = 0; i < studentsMDWDIntakeSeptember2021.length; i++) {
    contentMDWDIntakeSeptember2021 +=
      "<b>Student Name: </b>" + studentsMDWDIntakeSeptember2021[i].Name + " ";
    contentMDWDIntakeSeptember2021 +=
      studentsMDWDIntakeSeptember2021[i].lastname + "<br>";
    contentMDWDIntakeSeptember2021 +=
      "<b>Student ID: </b>" + studentsMDWDIntakeSeptember2021[i].id + "<br>";
    contentMDWDIntakeSeptember2021 +=
      "<b>Student Email: </b>" +
      studentsMDWDIntakeSeptember2021[i].email +
      "<br>" +
      "<br>";
  }

  contentMDWDIntakeSeptember2021 += `<br><br><b>List of courses and Instructors ${MDWDListOfIntakes[2]}</b> <br><br>`;

  for (let course of coursesMDWDIntakeSeptember2021) {
    contentMDWDIntakeSeptember2021 += course + "<br>";
  }

  return text + contentMDWDIntakeSeptember2021;
}
document.getElementById("contentMDWDIntakeSeptember2021").innerHTML =
  MDWDIntakeSeptember2021();

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
  let text = `Intake Status: <br>`;

  text += "<b>This Intake has finished</b> <br><br><br>";

  let contentMDWDIntakeJanuary2022 = `<b>List of the Students ${MDWDListOfIntakes[3]}</b>  <br><br>`;

  for (let i = 0; i < studentsMDWDIntakeJanuary2022.length; i++) {
    contentMDWDIntakeJanuary2022 +=
      "<b>Student Name: </b>" + studentsMDWDIntakeJanuary2022[i].Name + " ";
    contentMDWDIntakeJanuary2022 +=
      studentsMDWDIntakeJanuary2022[i].lastname + "<br>";
    contentMDWDIntakeJanuary2022 +=
      "<b>Student ID: </b>" + studentsMDWDIntakeJanuary2022[i].id + "<br>";
    contentMDWDIntakeJanuary2022 +=
      "<b>Student Email: </b>" +
      studentsMDWDIntakeJanuary2022[i].email +
      "<br>" +
      "<br>";
  }

  contentMDWDIntakeJanuary2022 += `<br><br><b>List of courses and Instructors ${MDWDListOfIntakes[3]}</b> <br><br>`;

  for (let course of coursesMDWDIntakeJanuary2022) {
    contentMDWDIntakeJanuary2022 += course + "<br>";
  }

  return text + contentMDWDIntakeJanuary2022;
}
document.getElementById("contentMDWDIntakeJanuary2022").innerHTML =
  MDWDIntakeJanuary2022();

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
  let text = `Intake Status: <br>`;

  text += "<b>This Intake has finished</b> <br><br><br>";

  let contentMDWDIntakeMay2022 = `<b>List of the Students ${MDWDListOfIntakes[4]}</b>  <br><br>`;

  for (let i = 0; i < studentsMDWDIntakeMay2022.length; i++) {
    contentMDWDIntakeMay2022 +=
      "<b>Student Name: </b>" + studentsMDWDIntakeMay2022[i].Name + " ";
    contentMDWDIntakeMay2022 += studentsMDWDIntakeMay2022[i].lastname + "<br>";
    contentMDWDIntakeMay2022 +=
      "<b>Student ID: </b>" + studentsMDWDIntakeMay2022[i].id + "<br>";
    contentMDWDIntakeMay2022 +=
      "<b>Student Email: </b>" +
      studentsMDWDIntakeMay2022[i].email +
      "<br>" +
      "<br>";
  }

  contentMDWDIntakeMay2022 += `<br><br><b>List of courses and Instructors ${MDWDListOfIntakes[4]}</b> <br><br>`;

  for (let course of coursesMDWDIntakeMay2022) {
    contentMDWDIntakeMay2022 += course + "<br>";
  }

  return text + contentMDWDIntakeMay2022;
}
document.getElementById("contentMDWDIntakeMay2022").innerHTML =
  MDWDIntakeMay2022();

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

function MDWDIntakeSeptember2022() {
  let text = `Intake Status: <br>`;
  let today = new Date();

  if (new Date(2022, 8, 12) <= today && today <= new Date(2022, 9, 20)) {
    text += `<b>${MDWDListOfCourses[0]}</b> and <b>${MDWDListOfCourses[1]}</b> are currently being instructed. <br><br>`;
  } else if (new Date(2022, 9, 21) <= today && today <= new Date(2022, 10, 4)) {
    text += `<b>${MDWDListOfCourses[0]}</b> and <b>${MDWDListOfCourses[2]}</b> are currently being instructed. <br><br>`;
  } else if (new Date(2022, 10, 5) <= today && today <= new Date(2023, 0, 3)) {
    text += `<b>${MDWDListOfCourses[2]}</b> and <b>${MDWDListOfCourses[3]}</b> are currently being instructed. <br><br>`;
  } else if (new Date(2022, 0, 4) <= today && today <= new Date(2023, 0, 15)) {
    text += `<b>${MDWDListOfCourses[4]}</b></b> is currently being instructed. <br><br>`;
  } else if (new Date(2023, 0, 16) <= today && today <= new Date(2023, 1, 7)) {
    text += `<b>${MDWDListOfCourses[5]}</b></b> is currently being instructed. <br><br>`;
  } else if (new Date(2023, 1, 8) <= today && today <= new Date(2023, 1, 27)) {
    text += `<b>${MDWDListOfCourses[6]}</b> is currently being instructed. <br><br>`;
  } else if (new Date(2023, 1, 27) <= today && today <= new Date(2023, 2, 10)) {
    text += `<b>${MDWDListOfCourses[7]}</b> is currently being instructed. <br><br>`;
  } else if (new Date(2023, 3, 10) <= today && today <= new Date(2023, 3, 28)) {
    text += `<b>${MDWDListOfCourses[8]}</b> is currently being instructed. <br><br>`;
  } else if (new Date(2023, 2, 29) <= today && today <= new Date(2023, 3, 25)) {
    text += `<b>${MDWDListOfCourses[9]}</b> is currently being instructed. <br><br>`;
  } else if (new Date(2023, 3, 26) <= today && today <= new Date(2023, 4, 5)) {
    text += `<b>${MDWDListOfCourses[10]}</b> is currently being instructed. <br><br>`;
  } else if (new Date(2023, 4, 6) <= today && today <= new Date(2023, 4, 17)) {
    text += `<b>${MDWDListOfCourses[11]}</b> is currently being instructed. <br><br>`;
  } else if (new Date(2023, 4, 18) <= today && today <= new Date(2023, 4, 31)) {
    text += `<b>${MDWDListOfCourses[12]}</b> is currently being instructed. <br><br>`;
  } else if (new Date(2023, 5, 1) <= today && today <= new Date(2023, 5, 23)) {
    text += `<b>${MDWDListOfCourses[13]}</b> is currently being instructed. <br><br>`;
  } else if (new Date(2023, 5, 24) <= today && today <= new Date(2023, 6, 18)) {
    text += `<b>${MDWDListOfCourses[14]}</b> is currently being instructed. <br><br>`;
  } else if (new Date(2023, 6, 19) <= today && today <= new Date(2023, 6, 28)) {
    text += `<b>${MDWDListOfCourses[15]}</b> is currently being instructed. <br><br>`;
  } else if (new Date(2023, 6, 29) <= today && today <= new Date(2023, 7, 23)) {
    text += `<b>${MDWDListOfCourses[16]}</b> is currently being instructed. <br><br>`;
  } else if (new Date(2023, 7, 22) <= today && today <= new Date(2023, 7, 31)) {
    text += `<b>${MDWDListOfCourses[17]}</b> is currently being instructed. <br><br>`;
  } else {
    text += "<b>This Intake has finished.</b> <br><br>";
  }

  let contentMDWDIntakeSeptember2022 = `<b>List of the Students ${MDWDListOfIntakes[5]}</b>  <br><br>`;

  for (let i = 0; i < studentsMDWDIntakeSeptember2022.length; i++) {
    contentMDWDIntakeSeptember2022 +=
      "<b>Student Name: </b>" + studentsMDWDIntakeSeptember2022[i].Name + " ";
    contentMDWDIntakeSeptember2022 +=
      studentsMDWDIntakeSeptember2022[i].lastname + "<br>";
    contentMDWDIntakeSeptember2022 +=
      "<b>Student ID: </b>" + studentsMDWDIntakeSeptember2022[i].id + "<br>";
    contentMDWDIntakeSeptember2022 +=
      "<b>Student Email: </b>" +
      studentsMDWDIntakeSeptember2022[i].email +
      "<br>" +
      "<br>";
  }

  contentMDWDIntakeSeptember2022 += `<br><br><b>List of courses and Instructors ${MDWDListOfIntakes[5]}</b> <br><br>`;

  for (let course of coursesMDWDIntakeSeptember2022) {
    contentMDWDIntakeSeptember2022 += course + "<br>";
  }

  return text + contentMDWDIntakeSeptember2022;
}
document.getElementById("contentMDWDIntakeSeptember2022").innerHTML =
  MDWDIntakeSeptember2022();

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

function MDWDIntakeJanuary2023() {
  let text = `Intake Status: <br>`;
  let today = new Date();

  if (new Date(2023, 0, 3) <= today && today <= new Date(2023, 1, 2)) {
    text += `<b>${MDWDListOfCourses[0]}</b> and <b>${MDWDListOfCourses[1]}</b> are currently being instructed. <br><br>`;
  } else if (new Date(2023, 1, 3) <= today && today <= new Date(2023, 1, 14)) {
    text += `<b>${MDWDListOfCourses[0]}</b> and <b>${MDWDListOfCourses[2]}</b> are currently being instructed. <br><br>`;
  } else if (new Date(2023, 1, 15) <= today && today <= new Date(2023, 2, 21)) {
    text += `<b>${MDWDListOfCourses[2]}</b> and <b>${MDWDListOfCourses[3]}</b> are currently being instructed. <br><br>`;
  } else if (new Date(2023, 2, 22) <= today && today <= new Date(2023, 2, 28)) {
    text += `<b>${MDWDListOfCourses[2]}</b> and <b>${MDWDListOfCourses[4]}</b> are currently being instructed. <br><br>`;
  } else if (new Date(2023, 2, 29) <= today && today <= new Date(2023, 3, 25)) {
    text += `<b>${MDWDListOfCourses[4]}</b> and <b>${MDWDListOfCourses[5]}</b> are currently being instructed. <br><br>`;
  } else if (new Date(2023, 3, 26) <= today && today <= new Date(2023, 3, 6)) {
    text += `<b>${MDWDListOfCourses[5]}</b> and <b>${MDWDListOfCourses[6]}</b> are currently being instructed. <br><br>`;
  } else if (new Date(2023, 5, 7) <= today && today <= new Date(2023, 5, 15)) {
    text += `<b>${MDWDListOfCourses[6]}</b> and <b>${MDWDListOfCourses[7]}</b> are currently being instructed. <br><br>`;
  } else if (new Date(2023, 5, 16) <= today && today <= new Date(2023, 6, 11)) {
    text += `<b>${MDWDListOfCourses[7]}</b> and <b>${MDWDListOfCourses[8]}</b> are currently being instructed. <br><br>`;
  } else if (new Date(2023, 6, 12) <= today && today <= new Date(2023, 7, 8)) {
    text += `<b>${MDWDListOfCourses[8]}</b> and <b>${MDWDListOfCourses[9]}</b> are currently being instructed. <br><br>`;
  } else if (new Date(2023, 7, 9) <= today && today <= new Date(2023, 8, 13)) {
    text += `<b>${MDWDListOfCourses[9]}</b>and <b>${MDWDListOfCourses[10]}</b> are currently being instructed. <br><br>`;
  } else if (new Date(2023, 8, 14) <= today && today <= new Date(2023, 8, 18)) {
    text += `<b>${MDWDListOfCourses[9]}</b> and <b>${MDWDListOfCourses[11]}</b> are currently being instructed. <br><br>`;
  } else if (new Date(2023, 8, 19) <= today && today <= new Date(2023, 9, 10)) {
    text += `<b>${MDWDListOfCourses[11]}</b> and <b>${MDWDListOfCourses[12]}</b are currently being instructed. <br><br>`;
  } else if (new Date(2023, 9, 11) <= today && today <= new Date(2023, 9, 15)) {
    text += `<b>${MDWDListOfCourses[12]}</b> and <b>${MDWDListOfCourses[13]}</b> are currently being instructed. <br><br>`;
  } else if (
    new Date(2023, 9, 16) <= today &&
    today <= new Date(2023, 10, 19)
  ) {
    text += `<b>${MDWDListOfCourses[13]}</b> and <b>${MDWDListOfCourses[14]}</b> are currently being instructed. <br><br>`;
  } else if (
    new Date(2023, 10, 20) <= today &&
    today <= new Date(2023, 10, 29)
  ) {
    text += `<b>${MDWDListOfCourses[15]}</b> and <b>${MDWDListOfCourses[16]}</b> are currently being instructed. <br><br>`;
  } else if (
    new Date(2023, 10, 30) <= today &&
    today <= new Date(2023, 11, 15)
  ) {
    text += `<b>${MDWDListOfCourses[16]}</b> is currently being instructed. <br><br>`;
  } else if (
    new Date(2023, 11, 16) <= today &&
    today <= new Date(2023, 11, 29)
  ) {
    text += `<b>${MDWDListOfCourses[17]}</b> is currently being instructed. <br><br>`;
  } else {
    text += "<b>This Intake has finished.</b> <br><br>";
  }

  let contentMDWDIntakeJanuary2023 = `<b>List of the Students ${MDWDListOfIntakes[6]}</b>  <br><br>`;

  for (let i = 0; i < studentsMDWDIntakeJanuary2023.length; i++) {
    contentMDWDIntakeJanuary2023 +=
      "<b>Student Name: </b>" + studentsMDWDIntakeJanuary2023[i].Name + " ";
    contentMDWDIntakeJanuary2023 +=
      studentsMDWDIntakeJanuary2023[i].lastname + "<br>";
    contentMDWDIntakeJanuary2023 +=
      "<b>Student ID: </b>" + studentsMDWDIntakeJanuary2023[i].id + "<br>";
    contentMDWDIntakeJanuary2023 +=
      "<b>Student Email: </b>" +
      studentsMDWDIntakeJanuary2023[i].email +
      "<br>" +
      "<br>";
  }

  contentMDWDIntakeJanuary2023 += `<br><br><b>List of courses and Instructors ${MDWDListOfIntakes[6]}</b> <br><br>`;

  for (let course of coursesMDWDIntakeJanuary2023) {
    contentMDWDIntakeJanuary2023 += course + "<br>";
  }

  return text + contentMDWDIntakeJanuary2023;
}
document.getElementById("contentMDWDIntakeJanuary2023").innerHTML =
  MDWDIntakeJanuary2023();

  //IN PROGRESS



  const studentsMDWDIntakeSeptember2023 = [
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

  const coursesMDWDIntakeSeptember2023 = [
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
function MDWDIntakeSeptember2023() {
  let text = `Intake Status: <br>`;
  let today = new Date();

  if(today< new Date(2023,9,11)){
    text += `<b>This Intake has not started yet</b> <br><br>`;
  }
  else if (new Date(2023, 9, 12) <= today && today <= new Date(2023, 10, 12)) {
    text += `<b>${MDWDListOfCourses[0]}</b> and <b>${MDWDListOfCourses[1]}</b> are currently being instructed. <br><br>`;
  } else if (new Date(2023, 10, 13) <= today && today <= new Date(2023, 10, 31)) {
    text += `<b>${MDWDListOfCourses[0]}</b> and <b>${MDWDListOfCourses[3]}</b> are currently being instructed. <br><br>`;
  } else if (new Date(2023, 11, 1) <= today && today <= new Date(2023,11, 9)) {
    text += `<b>${MDWDListOfCourses[2]}</b> and <b>${MDWDListOfCourses[3]}</b> are currently being instructed. <br><br>`;
  } else if (new Date(2023,11, 10) <= today && today <= new Date(2023, 12, 5)) {
    text += `<b>${MDWDListOfCourses[2]}</b> and <b>${MDWDListOfCourses[4]}</b> are currently being instructed. <br><br>`;
  } else if (new Date(2023, 12, 6) <= today && today <= new Date(2023, 12, 11)) {
    text += `<b>${MDWDListOfCourses[2]}</b> and <b>${MDWDListOfCourses[5]}</b> are currently being instructed. <br><br>`;
  } else if (new Date(2023, 12, 12) <= today && today <= new Date(2023, 12, 22)) {
    text += `<b>${MDWDListOfCourses[4]}</b> and <b>${MDWDListOfCourses[5]}</b> are currently being instructed. <br><br>`;
  } else if (new Date(2024, 1, 8) <= today && today <= new Date(2024, 2, 11)) {
    text += `<b>${MDWDListOfCourses[5]}</b> and <b>${MDWDListOfCourses[6]}</b> are currently being instructed. <br><br>`;
  } else if (new Date(2024, 2, 12) <= today && today <= new Date(2024, 2, 16)) {
    text += `<b>${MDWDListOfCourses[5]}</b> and <b>${MDWDListOfCourses[7]}</b> are currently being instructed. <br><br>`;
  } else if (new Date(2024, 2, 17) <= today && today <= new Date(2024, 2, 22)) {
    text += `<b>${MDWDListOfCourses[7]}</b> is currently being instructed. <br><br>`;
  } else if (new Date(2024, 2, 23) <= today && today <= new Date(2024, 3, 4)) {
    text += `<b>${MDWDListOfCourses[7]}</b>and <b>${MDWDListOfCourses[8]}</b> are currently being instructed. <br><br>`;
  } else if (new Date(2024, 3, 5) <= today && today <= new Date(2024, 3, 27)) {
    text += `<b>${MDWDListOfCourses[8]}</b> and <b>${MDWDListOfCourses[9]}</b> are currently being instructed. <br><br>`;
  } else if (new Date(2024, 3, 28) <= today && today <= new Date(2024, 4, 4)) {
    text += `<b>${MDWDListOfCourses[9]}</b> is currently being instructed. <br><br>`;
  } else if (new Date(2024, 4, 5) <= today && today <= new Date(2024, 4, 24)) {
    text += `<b>${MDWDListOfCourses[9]}</b> and <b>${MDWDListOfCourses[10]}</b> are currently being instructed. <br><br>`;
  } else if (new Date(2024, 4, 25) <= today && today <= new Date(2024, 4, 26)) {
    text += `<b>${MDWDListOfCourses[10]}</b> and <b>${MDWDListOfCourses[11]}</b> are currently being instructed. <br><br>`;
  } else if (new Date(2024, 4, 27) <= today && today <= new Date(2024, 5, 21) ) {
    text += `<b>${MDWDListOfCourses[11]}</b> and <b>${MDWDListOfCourses[13]}</b> are currently being instructed. <br><br>`;
  } else if (new Date(2024, 5, 22) <= today && today <= new Date(2024, 6, 14)) {
    text += `<b>${MDWDListOfCourses[13]}</b> and <b>${MDWDListOfCourses[14]}</b> are currently being instructed. <br><br>`;
  } else if (new Date(2024, 6, 15) <= today && today <= new Date(2024, 7, 5)) {
    text += `<b>${MDWDListOfCourses[14]}</b> and <b>${MDWDListOfCourses[15]}</b> are currently being instructed. <br><br>`;
  }  else if (new Date(2024, 7, 6) <= today && today <= new Date(2024, 7, 9)) {
    text += `<b>${MDWDListOfCourses[13]}</b> and <b>${MDWDListOfCourses[14]}</b> are currently being instructed. <br><br>`;
  } else if (new Date(2024, 7, 10) <= today && today <= new Date(2024, 7, 12)) {
    text += `<b>${MDWDListOfCourses[13]}</b> and <b>${MDWDListOfCourses[15]}</b> are currently being instructed. <br><br>`;
  } else if (new Date(2024, 7, 13) <= today && today <= new Date(2024, 7, 26)) {
    text += `<b>${MDWDListOfCourses[13]}</b> and <b>${MDWDListOfCourses[16]}</b> are currently being instructed. <br><br>`;
  } else if (new Date(2024, 7, 27) <= today && today <= new Date(2024, 8, 15)) {
    text += `<b>${MDWDListOfCourses[16]}</b> is currently being instructed. <br><br>`;
  } else if (new Date(2024, 8, 16) <= today && today <= new Date(2024, 8, 30)) {
    text += `<b>${MDWDListOfCourses[17]}</b> is currently being instructed. <br><br>`;
  }
  else {
    text += "<b>This Intake has finished.</b> <br><br>";
  }

  let contentMDWDIntakeSeptember2023 = `<b>List of the Students ${MDWDListOfIntakes[7]}</b>  <br><br>`;

  for (let i = 0; i < studentsMDWDIntakeSeptember2023.length; i++) {
    contentMDWDIntakeSeptember2023 +=
      "<b>Student Name: </b>" + studentsMDWDIntakeSeptember2023[i].Name + " ";
      contentMDWDIntakeSeptember2023 +=
      studentsMDWDIntakeSeptember2023[i].lastname + "<br>";
      contentMDWDIntakeSeptember2023 +=
      "<b>Student ID: </b>" + studentsMDWDIntakeSeptember2023[i].id + "<br>";
      contentMDWDIntakeSeptember2023 +=
      "<b>Student Email: </b>" +
      studentsMDWDIntakeSeptember2023[i].email +
      "<br>" +
      "<br>";
  }

  contentMDWDIntakeSeptember2023 += `<br><br><b>List of courses and Instructors ${MDWDListOfIntakes[7]}</b> <br><br>`;

  for (let course of coursesMDWDIntakeSeptember2023) {
    contentMDWDIntakeSeptember2023 += course + "<br>";
  }

  return text + contentMDWDIntakeSeptember2023;
}

document.getElementById("contentMDWDIntakeSeptember2023").innerHTML =
  MDWDIntakeSeptember2023();