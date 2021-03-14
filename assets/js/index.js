// DOM SELECTORS:
const dateTime = $("#date-time");
const projForm = $("#project-form");
const projList = $("#project-list");

// FUNCTIONS:
//Show date and time immediately and update per second
function updateDateTime() {
  // Get current date and time and display to header
  const displayDateTime = () => {
    const now = moment().format("dddd, MMM D, YYYY - h:mm:ss a");
    dateTime.text(now);
  };

  displayDateTime;
  setInterval(displayDateTime, 1000);
}

//
function submitProject(event) {
  event.preventDefault();
}

// Create project row to add to table project
function addProjectToList(proj) {
  const projList = $("#project-list");

  // Create table row element, fill in text content, append to table body
  const projRow = $("<tr>");
  projRow.html(`
    <td>${proj.name}</td>
    <td>${proj.type}</td>
    <td>${proj.rate}</td>
    <td>${proj.dueDate}</td>
    <td>${proj.numDaysDue}</td>
    <td>${proj.earning}</td>
    <td><button class="btn btn-danger btn-sm remove">&times;</button></td>
  `);
  projList.append(projRow);
}

// Remove project row
function removeProjectFromList(event) {
  // console.log(event.target); // is HTML element tag content
  // console.log($(event.target)); // is HTML collection of event.target element(s)

  const el = event.target;
  el.closest("tr").remove();
  // $(el).parent().parent().remove(); // .parent() only works on JQ found element
}

// EVENT CONTROL:
// Event listener on project form submit button
projForm.on("submit", submitProject);

// Event listener on project remove button
projList.on("click", ".remove", removeProjectFromList);

// JQuery UI datepicker on due date input
$("#proj-input-due-date").datepicker({ minDate: "+1d" });

// Webpage Execution

// Testing
updateDateTime();

$(function () {
  $("#datepicker").datepicker();
});

const project = {
  name: "project1",
  type: "web dev",
  rate: "120",
  dueDate: "8/1/21",
  numDaysDue: "100",
  earning: "1200",
};
addProjectToList(project);
