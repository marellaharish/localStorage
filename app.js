// DOM Elements
const studentForm = document.getElementById("studentForm");
const studentsContainer = document.querySelector(".students");
const nameInput = studentForm["name"];
const ageInput = studentForm["age"];
const rollInput = studentForm["roll"];
const priceInput = studentForm["price"];

/* 
{
  name: '',
  age: number,
  roll: number
}
*/

const students = JSON.parse(localStorage.getItem("students")) || [];

const addStudent = (name, age, roll, price) => {
  students.push({
    name,
    age,
    roll,
    price,
  });

  localStorage.setItem("students", JSON.stringify(students));

  return { name, age, roll, price };
};

const createStudentElement = ({ name, age, roll, price }) => {
  // Create elements
  const studentDiv = document.createElement("div");
  const studentName = document.createElement("p");
  const studentAge = document.createElement("p");
  const studentRoll = document.createElement("p");
  const itemprice = document.createElement("p");

  // Fill the content
  studentName.innerText = "Custome name: " + name;
  studentAge.innerText = "Item Name: " + age;
  studentRoll.innerText = "Item Quantitty: " + roll;
  itemprice.innerText = "Item Price: " + price;

  // Add to the DOM
  studentDiv.append(studentName, studentAge, studentRoll, itemprice);
  studentsContainer.appendChild(studentDiv);

  studentsContainer.style.display = students.length === 0 ? "none" : "flex";
};

studentsContainer.style.display = students.length === 0 ? "none" : "flex";

students.forEach(createStudentElement);

studentForm.onsubmit = e => {
  e.preventDefault();

  const newStudent = addStudent(
    nameInput.value,
    ageInput.value,
    rollInput.value,
    priceInput.value
  );

  createStudentElement(newStudent);

  nameInput.value = "";
  ageInput.value = "";
  rollInput.value = "";
  priceInput.value = "";
};
