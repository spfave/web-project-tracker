// DOM SELECTORS:
const dateTime = $("#date-time");
const projModal = $("#project-modal");
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

// Process project information input for table display
function submitProject(event) {
  event.preventDefault();
  console.log("test");

  // Create project object
  const project = {
    name: $("#proj-input-name").val().trim(),
    type: $("#proj-input-type").val().trim(),
    rate: $("#proj-input-rate").val().trim(),
    dueDate: $("#proj-input-due-date").val().trim(),
  };
  project.numDaysDue = calcDaysDue(project.dueDate);
  project.earning = calcProjEarnings(project.numDaysDue, project.rate);

  // Add project to list
  addProjectToList(project);

  // Clear and close project modal
  projForm[0].reset();
  projModal.modal("hide");
}

function calcDaysDue(dueDate) {
  const today = moment();
  return moment(dueDate, "MM/DD/YYYY").diff(today, "days") + 1;
}

function calcProjEarnings(numDaysDue, rate) {
  return numDaysDue * 8 * rate;
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
updateDateTime();
