var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        //console.log(xhr.responseText);
        var employees = JSON.parse(xhr.responseText);
        //console.log(employees);
        var statusHTML = '<ul class="bulleted">';
        for (var i = 0; i < employees.length; i += 1) {
            statusHTML += '<li class=';
            statusHTML += employees[i].inoffice==true?'in':'out';
            statusHTML += '>' + employees[i].name + '</li>';
        }
        statusHTML += '</ul>';
        document.getElementById('employeeList').innerHTML = statusHTML;
    }
};
xhr.open('GET', 'data/employees.json');
xhr.send();

