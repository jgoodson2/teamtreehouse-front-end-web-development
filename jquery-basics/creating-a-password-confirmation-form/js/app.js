//Problem: Hints are shown even when form is valid
//Solution: Hide and show them at appropriate times
var $password = $("#password");
var $confirmPassword = $("#confirm_password");

//hide hints
$("form span").hide();

function passwordEvent() {
    ///find out if PW is valid
    if ($password.val().length > 8) {
        ////hide hint if valid
        $password.next().hide();
    }
    ////else show hint
    else {
        $password.next().show();
    }
}

function confirmPasswordEvent() {
///Find out if password and confirmation match
    if ($password.val() === $confirmPassword.val()) {
////Hide hint if matched
        $confirmPassword.next().hide();
    }
////else show hint
    else {
        $confirmPassword.next().show();
    }
}

$password.focus(passwordEvent).keyup(passwordEvent).focus(confirmPasswordEvent).keyup(confirmPasswordEvent);

//when event happens on confirmation input
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent);