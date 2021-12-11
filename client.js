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

// function to call 'createEmployeeObject' after gathering 
// info from input fields and the pushing the new employee 
// object to the employeeArray
function submitEmployeeInfo(event) {
    console.log('this is:', $(this));
    console.log('event', event);

    console.log('clicked Submit');

    // create a variable to store new employees
    let newEmployee = createEmployeeObject();

    // push the new employee to the array
    employeesArray.push(newEmployee);
    console.log('All employees:', employeesArray);

    // empty form fields
    $('.formInputs').val('');

    // show employee objects in the table on the DOM
    addEmployeesToTable();
    
} //end submitEmployeeInfo

// function to create employee objects
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
} //end createEmployeeObject

function addEmployeesToTable() {

    // empty table to start
    $('#employeeList').empty();

    // loop through employeeArray to display info to table on the DOM
    for (let employee of employeesArray) {
        $('#employeeList').append(`
            <tr>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.idNumber}</td>
                <td>${employee.jobTitle}</td>
                <td>${employee.annualSalary}</td>
                <td><button class="deleteEmployee">Delete</button></td>
            <tr>
        `);
    }
}
