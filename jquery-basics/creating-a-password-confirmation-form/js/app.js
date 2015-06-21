//Problem: Hints are shown even when form is valid
//Solution: Hide and show them at appropriate times

//hide hints
$("form span").hide();

function passwordEvent() {
    ///find out if PW is valid
    if ($("#password").val().length > 8) {
        ////hide hint if valid
        $(this).next().hide();
    }
    ////else show hint
    else {
        $(this).next().show();
    }
}

$("#password").focus(passwordEvent).keyup(passwordEvent);

//when event happens on confirmation input
///Find out if password and confirmation match
////Hide hint if matched
////else show hint