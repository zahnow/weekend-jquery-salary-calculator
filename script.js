let employees = [];

$(document).ready(onReady);

function onReady() {
    console.log('document ready');
    $('#add-employee-button').on('click', addEmployee);
    $('')
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
}


function removeEmployee() {

}


function updateEmployeeList() {
    $('#employee-table-body').empty();
    for (employee of employees) {
        console.log(employee.firstName);
        $('#employee-table-body').append(`
        <tr>
            <td>NAME</td>
            <td>NAME</td>
            <td>ID</td>
            <td>ASDF</td>
            <td>23000</td>
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