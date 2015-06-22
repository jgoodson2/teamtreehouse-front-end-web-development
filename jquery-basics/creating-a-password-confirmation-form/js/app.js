//Problem: Hints are shown even when form is valid
//Solution: Hide and show them at appropriate times
var $password = $("#password");
var $confirmPassword = $("#confirm_password");

//hide hints
$("form span").hide();

function isPasswordValid(){
    return $password.val().length > 8;
}

function arePasswordsMatching(){
    return $password.val() === $confirmPassword.val();
}

function canSubmit(){
    return isPasswordValid() && arePasswordsMatching();
}

function passwordEvent() {
    ///find out if PW is valid
    if (isPasswordValid()) {
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
    if (arePasswordsMatching()) {
////Hide hint if matched
        $confirmPassword.next().hide();
    }
////else show hint
    else {
        $confirmPassword.next().show();
    }
}

function enableSubmitEvent(){
    $("#submit").prop("disabled", !canSubmit())
}

$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

//when event happens on confirmation input
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent);

enableSubmitEvent();