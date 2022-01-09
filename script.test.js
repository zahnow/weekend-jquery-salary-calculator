function unitTests() {
    console.log('In unit tests');

    testAddUsers();
    testMonthlyCost(3000);
    const removedEmployee = employees.pop();
    testMonthlyCost(1000);
}

function testAddUsers(){
    populateList('Nick', 'Zahnow', '1', 'CEO', '12000');
    populateList('John', 'Doe', '2', 'CFO', '24000');
}


// This should add a user to the employee array without needing to deal with the form input.
function populateList(first, last, id, title, salary) {
    const newEmployee = {
        firstName: first,
        lastName: last,
        id: id,
        title: title,
        annualSalary: salary
    }
    employees.push(newEmployee);
    updateEmployeeList();
    updateMonthlyCost();
}

function testMonthlyCost(expectedValue) {
    console.log('Testing monthly cost matches expected value', calculateMonthlyCost() === expectedValue);
}