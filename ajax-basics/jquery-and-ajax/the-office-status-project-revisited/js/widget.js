$(document).ready(function () {
    var url = "data/employees.json";
    $.getJSON(url, function (response) {
        var statusHTML = '<ul class="bulleted">';
        $.each(response, function (index, employee) {
            statusHTML += '<li class="' + (employee.inoffice === true ? 'in' : 'out') + '">' + employee.name + '</li>';
        });//end each;
        statusHTML += '</ul>';
        $('#employeeList').html(statusHTML);
    });//end getJSON
});//end ready