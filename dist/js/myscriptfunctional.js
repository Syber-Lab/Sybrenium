$(document).ready(function() {
    // $("#enable").click(function() {
        $(".draggable").draggableTouch();
    // });
    $("#enable-transform").click(function() {
        $(".draggable").draggableTouch({useTransform:true});
    });
    $("#disable").click(function() {
        $(".draggable").draggableTouch("disable");
    });

    $(".draggable").bind("dragstart", function(e, pos) {
        console.log("dragstart:", this, pos.left + "," + pos.top);
    }).bind("dragend", function(e, pos) {
        console.log("dragend:", this, pos.left + "," + pos.top);
    });
});

// if this is a touch device, we assume we don't have a visible console and use
// a crappy homemade one :)
if ("ontouchstart" in document.documentElement) {
    window.console = {
        log: function(a, b, c) {
            if (a && b && c)
                $("<div>" + a + " " + b + " " + c + "</div>").appendTo($("#console"));
            else if (a && b)
                $("<div>" + a + " " + b + "</div>").appendTo($("#console"));
            else if (a)
                $("<div>" + a + "</div>").appendTo($("#console"));
        }
    };
}
