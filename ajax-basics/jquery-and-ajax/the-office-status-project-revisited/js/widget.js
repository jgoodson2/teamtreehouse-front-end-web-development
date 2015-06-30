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

$(document).ready(function () {
    var url = "data/rooms.json";
    $.getJSON(url, function (response) {
        var roomsHTML = '<ul class="rooms">';
        $.each(response, function (index, room) {
            roomsHTML += '<li class="' + (room.available === true ? 'empty' : 'full') + '">' + room.room + '</li>';
        });//end each;
        roomsHTML += '</ul>';
        $('#roomList').html(roomsHTML);
    });//end getJSON
});//end ready