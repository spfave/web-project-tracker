// Render projects to table

// Create project row to add to table project
function addProjectToList() {
  const projList = $("project-list");

  const projRow = $("<tr>");
  projRow.innerHTML = `
    <td>${proj.name}</td>
    <td>${proj.type}</td>
    <td>${proj.rate}</td>
    <td>${proj.dueDate}</td>
    <td>${proj.numDaysDue}</td>
    <td>${proj.earning}</td>
    <td><button class="btn btn-danger btn-sm remove">X</button></td>
  `;
  projList.append(projRow);
}
