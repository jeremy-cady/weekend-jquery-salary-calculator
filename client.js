console.log('in client.js');

// create empty employee array to store employee objects
let employeesArray = [];

// incantation
$(document).ready(onReady);

function onReady() {
    console.log('so ready');

    // Listener for the submit button
    $('#submitButton').on('click', submitEmployeeInfo);
    
}

function submitEmployeeInfo(event) {
    console.log('this is:', $(this));
    console.log('event', event);

    console.log('clicked Submit');

    // create a variable to store new employees
    let newEmployee = createEmployeeObject();

    // push the new employee to the array
    employeesArray.push(newEmployee);
    console.log('All employees:', employeesArray);
    
} 


function createEmployeeObject() {
    // declare employee object
    let employee = {
        firstName: $('#firstNameInput').val(),
        lastName: $('#lastNameInput').val(),
        idNumber: $('#idNumberInput').val(),
        jobTitle: $('#jobTitleInput').val(),
        annualSalary: Number($('#annualSalaryInput').val())
    };
    return employee;
}
