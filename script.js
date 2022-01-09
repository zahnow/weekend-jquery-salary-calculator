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
    // Delete employee from the array
    employees.splice($(event.target).attr('data-index'), 1)
    
    // Remove the row from the table
    $(event.target).closest('tr').remove();

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
            <td class=right-align>${Number(employees[i].annualSalary).toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</td>
            <td style="text-align: center"><button class="deleteButton" data-index="${[i]}"><i class="fas fa-user-minus"></i> Remove</button></td>
        </tr>
        `);
    }
}

function updateMonthlyCost() {
    $('#monthly-cost').text(calculateMonthlyCost().toLocaleString('en-US', {style: 'currency', currency: 'USD'}));
    updateCostStyle();
}

function calculateMonthlyCost() {
    let annualCost = employees.reduce((prev, current) => prev += Number(current.annualSalary), 0);
    return annualCost / 12;
}

function updateCostStyle() {
    if(calculateMonthlyCost() > monthlyLimit) {
        $('#monthly-cost-section').addClass('highlight');
    } else {
        $('#monthly-cost-section').removeClass('highlight');
    }
}