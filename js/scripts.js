$(document).ready(function() {
   $("#offer1").click(function() {
        $("#offer-p1").show();
        $("#offer1").hide();
    });
    $("#offer-p1").click(function() {
        $("#offer-p1").hide();
        $("#offer1").show();
    });
    $("#offer2").click(function() {
        $("#offer-p2").show();
        $("#offer2").hide();
    });
    $("#offer-p2").click(function() {
        $("#offer-p2").hide();
        $("#offer2").show();
    });
    $("#offer3").click(function() {
        $("#offer-p3").show();
        $("#offer3").hide();
    });
    $("#offer-p3").click(function() {
        $("#offer-p3").hide();
        $("#offer3").show();
    });
});

$(document).ready(function() {
    $("#work4img").mouseenter(function() {
        $("#work4").show();
        $(this).addClass("fading");
    }).mouseout(function () {
        $("#work4").hide();
        $(this).removeClass("fading");
    });
});

$(document).ready(function() {
    $("").mousehover(function() {
        $("").show();
    }).mouseout(function() {
        $("").hide();
    });
});