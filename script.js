let employees = [];
const monthlyLimit = 20000;

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
    console.log($(event.target).attr('data-index'));    //THIS WORKS
    employees.splice($(event.target).attr('data-index'), 1)
    $(event.target).closest('tr').remove();
    //Need to remove from array
    updateMonthlyCost();
}


function updateEmployeeList() {
    $('#employee-table-body').empty();
    for (let i = 0; i < employees.length; i++) {
        $('#employee-table-body').append(`
        <tr>
            <td>${employees[i].firstName}</td>
            <td>${employees[i].lastName}</td>
            <td>${employees[i].id}</td>
            <td>${employees[i].title}</td>
            <td>${employees[i].annualSalary}</td>
            <td><button class="deleteButton" data-index="${[i]}">Delete</button></td>
        </tr>
        `);
    }
}

function updateMonthlyCost() {
    $('#monthly-cost').text(calculateMonthlyCost());
    checkMonthlyLimit();
}

function calculateMonthlyCost() {
    TODO: Formatting and rounding off to two digits
    let annualCost = employees.reduce((prev, current) => prev += Number(current.annualSalary), 0);
    return annualCost / 12;
}

function checkMonthlyLimit() {
    if(calculateMonthlyCost() > monthlyLimit) {
        $('#monthly-cost').addClass('highlight');
    } else {
        $('#monthly-cost').removeClass('highlight');
    }
}