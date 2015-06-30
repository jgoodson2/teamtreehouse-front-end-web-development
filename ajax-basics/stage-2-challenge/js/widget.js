var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        var employees = JSON.parse(xhr.responseText);
        var statusHTML = '<ul class="bulleted">';
        for (var i = 0; i < employees.length; i += 1) {
            if (employees[i].inoffice === true) {
                statusHTML += '<li class="in">';
            } else {
                statusHTML += '<li class="out">';
            }
            statusHTML += employees[i].name;
            statusHTML += '</li>';
        }
        statusHTML += '</ul>';
        document.getElementById('employeeList').innerHTML = statusHTML;
    }
};
xhr.open('GET', 'data/employees.json');
xhr.send();

var xhr_rooms = new XMLHttpRequest();
xhr_rooms.onreadystatechange = function () {
    if (xhr_rooms.readyState === 4 && xhr_rooms.status === 200) {
        var rooms = JSON.parse(xhr_rooms.responseText);
        var roomsHTML = '<ul class="rooms">';
        for (var i = 0; i < rooms.length; i += 1) {
            roomsHTML += '<li class="';
            roomsHTML += rooms[i].available===true?"empty":"full";
            roomsHTML += '">' + rooms[i].room + '</li>';
        }
        roomsHTML += '</ul>';
        document.getElementById('roomList').innerHTML = roomsHTML;
    }
};
xhr_rooms.open('GET', 'data/rooms.json');
xhr_rooms.send();