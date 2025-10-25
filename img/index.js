$(document).ready( function (){
    let hiddenRow = $(".expandable");
    $(".expand-btn").click(function () {
        hiddenRow.toggleClass("hide");
        if (hiddenRow.is(":visible")) {
            $(".expand-btn").html("Decrease");
        }
        else {
            $(".expand-btn").html("Dicover More");
        }
    });
});