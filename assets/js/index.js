// Render projects to table

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
function removeProjectFromList(el) {
  if (el.classList.contains("remove")) {
    el.parent().parent().remove();
  }
}

// DOM Selectors
// const projList = $("project-list");

// Event listener on project remove button
$("project-list").on("click", (e) => {
  //
  removeProjectFromList(e.target);
});

// Webpage Execution
const project = {
  name: "project1",
  type: "web dev",
  rate: "120",
  dueDate: "8/1/21",
  numDaysDue: "100",
  earning: "1200",
};

addProjectToList(project);
