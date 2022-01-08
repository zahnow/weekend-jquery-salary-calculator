let employees = [];

$(document).ready(onReady);

function onReady() {
    console.log('document ready');
    $('#add-employee-button').on('click', addEmployee);
    $('#employee-table-body').on('click', ".deleteButton" , removeEmployee);
    unitTests();    //Comment this line to disable unit tests
}


// addEmployee adds the employee to the employees array.
// To display the users in the table, use updatEmployeeList.
function addEmployee() {
    // TODO: Could add some basic input validation
    // TODO: Could clear form after submission

    const newEmployee = {
        firstName: $('#first-name-input').val(),
        lastName: $('#last-name-input').val(),
        id: $('#id-number-input').val(),
        title: $('#job-title-input').val(),
        annualSalary: $('#annual-salary-input').val()
    }
    employees.push(newEmployee);
    updateEmployeeList();
    updateMonthlyCost();
}


function removeEmployee(event) {
    console.log('delete button clicked');
    $(event.target).closest('tr').remove();
    //Need to remove from array
}


function updateEmployeeList() {
    $('#employee-table-body').empty();
    for (employee of employees) {
        console.log(employee.firstName);
        $('#employee-table-body').append(`
        <tr>
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.id}</td>
            <td>${employee.title}</td>
            <td>${employee.annualSalary}</td>
            <td><button class="deleteButton">Delete</button></td>
        </tr>
        `);
    }
}

function updateMonthlyCost() {
    $('#monthly-cost').text(calculateMonthlyCost());
}

function calculateMonthlyCost() {
    return "$150,000";
}