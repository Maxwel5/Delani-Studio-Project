$(document).ready(function() {
    $("#offer-p").hide();
    $("#offer-p").click(function() {
        $("#offer").hide().toggle();
        $("#offer-p").slideUp();
    });
    $("#offer").click(function() {
        $("#offer-p").slideDown();
        $("#offer").hide();
    });
});