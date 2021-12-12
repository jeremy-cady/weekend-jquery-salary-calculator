console.log('in client.js');

// create empty employee array to store employee objects
let employeesArray = [];

// incantation
$(document).ready(onReady);

function onReady() {
    console.log('so ready');

    // Listener for the submit button
    $('#submitButton').on('click', submitEmployeeInfo);

    // Listener for delete buttons
    $(document).on('click', '.deleteEmployee', deleteEmployeeInfo);
    
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

    // get employee annual salary totals
    let annualSalaryTotal = sumAnnualSalaries();

    // empty annualNumber field
    $('#annualNumber').empty();

    // display annualSalaryTotal to DOM
    $('#annualNumber').append(annualSalaryTotal.toFixed(2));

    // empty monthly number field
    $('#monthlyNumber').empty();

    // get monthly salary total
    let monthlySalaryTotal = calculateTotalMonthlySalaries();

    // Display monthly salary totals to the DOM
    $('#monthlyNumber').append(monthlySalaryTotal.toFixed(2));
    
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



// function to append employee objects to the DOM
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
} // end addEmployeesToTable


// function to sum all employee annual salaries
function sumAnnualSalaries() {
    let annualSalaryTotal = 0;
    for (employee of employeesArray) {
        annualSalaryTotal += employee.annualSalary;
    }
    return annualSalaryTotal;
}// end sumAnnualSalaries


// function to calculate total monthly salaries
function calculateTotalMonthlySalaries() {
    let annualSalaryTotal = sumAnnualSalaries();
    let monthlySalaryTotal = 0;
    monthlySalaryTotal = annualSalaryTotal / 12;
    if (monthlySalaryTotal>20000) {
        $('#monthlySalaryTotal').css('background-color', 'red');
    } // end if
    return monthlySalaryTotal;
} // end calculateTotalMonthlySalaries



// function to delete employee data from the DOM
function deleteEmployeeInfo(event) {
    console.log('delete button clicked');
    $(this).closest('tr').remove();
    console.log('employee info deleted');
} //end deleteEmployeeInfo
