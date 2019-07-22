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
    $("#work3img").mouseenter(function() {
        $("#work3").show();
        $(this).addClass("fading");
    }).mouseout(function () {
        $("#work3").hide();
        $(this).removeClass("fading");
    });
});

$(document).ready(function() {
    $("#work2img").mouseenter(function() {
        $("#work2").show();
        $(this).addClass("fading");
    }).mouseout(function () {
        $("#work2").hide();
        $(this).removeClass("fading");
    });
});

$(document).ready(function() {
    $("#work1img").mouseenter(function() {
        $("#work1").show();
        $(this).addClass("fading");
    }).mouseout(function () {
        $("#work1").hide();
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
        $(this).addClass("fading");
    }).mouseout(function () {
        $("#work6").hide();
        $(this).removeClass("fading");
    });
});

$(document).ready(function() {
    $("#work7img").mouseenter(function() {
        $("#work7").show();
        $(this).addClass("fading");
    }).mouseout(function () {
        $("#work7").hide();
        $(this).removeClass("fading");
    });
});

$(document).ready(function() {
    $("#work8img").mouseenter(function() {
        $("#work8").show();
        $(this).addClass("fading");
    }).mouseout(function () {
        $("#work8").hide();
        $(this).removeClass("fading");
    });
});
function contact(form) {
    var name = document.forms["form1"]["name"].value;
    var email = document.forms["form1"]["email"].value;
    var message = document.forms["form1"]["message"].value;
    alert("Hi! " + name + "," + "we are sujected to your message and we appreciate you for being part of us. Cool!");
};

