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
        $("#work4").addClass("enlarge");
        $(this).addClass("fading");
    }).mouseout(function () {
        $("#work4").hide();
        $("#work4").removeClass("enlarge");
        $(this).removeClass("fading");
    });
});

$(document).ready(function() {
    $("#work3img").mouseenter(function() {
        $("#work3").show();
        $("#work3").addClass("enlarge");
        $(this).addClass("fading");
    }).mouseout(function () {
        $("#work3").hide();
        $("#work3").removeClass("enlarge");
        $(this).removeClass("fading");
    });
});

$(document).ready(function() {
    $("#work2img").mouseenter(function() {
        $("#work2").show();
        $("#work2").addClass("enlarge");
        $(this).addClass("fading");
    }).mouseout(function () {
        $("#work2").hide();
        $("#work2").removeClass("enlarge");
        $(this).removeClass("fading");
    });
});

$(document).ready(function() {
    $("#work1img").mouseenter(function() {
        $("#work1").show();
        $("#work1").addClass("enlarge");
        $(this).addClass("fading");
    }).mouseout(function () {
        $("#work1").hide();
        $("#work1").removeClass("enlarge");
        $(this).removeClass("fading");
    });
});

$(document).ready(function() {
    $("#work5img").mouseenter(function() {
        $("#work5").show();
        $("#work5").addClass("enlarge");
        $(this).addClass("fading");
    }).mouseout(function () {
        $("#work5").hide();
        $("#work5").removeClass("enlarge");
        $(this).removeClass("fading");
    });
});

$(document).ready(function() {
    $("#work6img").mouseenter(function() {
        $("#work6").show();
        $("#work6").addClass("enlarge");
        $(this).addClass("fading");
    }).mouseout(function () {
        $("#work6").hide();
        $("#work6").removeClass("enlarge");
        $(this).removeClass("fading");
    });
});

$(document).ready(function() {
    $("#work7img").mouseenter(function() {
        $("#work7").show();
        $("#work7").addClass("enlarge");
        $(this).addClass("fading");
    }).mouseout(function () {
        $("#work7").hide();
        $("#work7").removeClass("enlarge");
        $(this).removeClass("fading");
    });
});

$(document).ready(function() {
    $("#work8img").mouseenter(function() {
        $("#work8").show();
        $("#work8").addClass("enlarge");
        $(this).addClass("fading");
    }).mouseout(function () {
        $("#work8").hide();
        $("#work8").removeClass("enlarge");
        $(this).removeClass("fading");
    });
});
function contact(form) {
    var name = document.forms["form1"]["name"].value;
    var email = document.forms["form1"]["email"].value;
    var message = document.forms["form1"]["message"].value;
    alert("Hi! " + name + "," + "we are sujected to your message and we appreciate you for being part of us. Cool!");
};

